import express from 'express';
import fs from 'fs';
import { google } from 'googleapis';
import dayjs from 'dayjs';


const ROOM_TYPES = [
    { id: 'standard', name: 'Standard Room', price: 2000, description: "Comfortable room with basic amenities" },
    { id: 'deluxe', name: 'Deluxe Room', price: 3000, description: "Spacious room with additional features" },
    { id: 'twin-deluxe', name: 'Twin Deluxe Room', price: 3500, description: "Two beds for extra comfort" },
    { id: 'executive', name: 'Executive Room', price: 4000, description: "Luxurious room with premium amenities" },
    { id: 'special-executive', name: 'Special Executive Room', price: 4500, description: "Exclusive room with special features" },
    { id: 'family', name: 'Family Room', price: 5000, description: "Spacious room for families" },
];

const LOCATION_DATA = {
    email: ['sales.inigo2019@gmail.com', 'reservations@hotelinigo.ph'],
    phone: ['+63935-281-0508', '+63923-692-0148'],
    address: ['Rizal St.', 'Brgy.19 Cabangan', 'Legazpi City'],
    socialMedia: [
        { name: 'Facebook', url: 'https://www.facebook.com/hotelinigo' },
        { name: 'Messenger', url: 'https://www.facebook.com/hotelinigo' }
    ]
};


const SHEET_ID = '1bUUBug0Ie2ovEqDs9GebvM86Nh9nP-rjGQWkoeadRWI';
const SHEET_NAME = 'Bookings';

const CREDEDTIALS = JSON.parse(fs.readFileSync('service-account.json', 'utf-8'));

const auth = new google.auth.GoogleAuth({
    credentials: CREDEDTIALS,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

const router = express.Router();
router.use(express.json());


async function appendBookingToSheet(data) {
    const values = [
        [
            data.firstName,
            data.lastName,
            data.age,
            data.email,
            data.contactNo,
            data.guests,
            data.checkIn,
            data.checkOut,
            data.roomType,
            data.message || '',
            dayjs().format('YYYY-MM-DD HH:mm:ss'),
        ]
    ];
    // Append the booking data to the Google Sheet
    await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: `${SHEET_NAME}!A1:K1`,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: { values },
    });
}
// Helper: Check room availability (simple version)
async function isRoomAvailable(roomType, checkIn, checkOut) {
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: `${SHEET_NAME}!A2:J`,
    });

    const rows = res.data.values || [];
    const reqCheckIn = dayjs(checkIn, 'YYYY-MM-DD');
    const reqCheckOut = dayjs(checkOut, 'YYYY-MM-DD');

    for (const row of rows) {
        const [, , , , , , existingCheckIn, existingCheckOut, existingRoomType] = row;
        if (existingRoomType === roomType) {
            const bookedIn = dayjs(existingCheckIn, 'YYYY-MM-DD');
            const bookedOut = dayjs(existingCheckOut, 'YYYY-MM-DD');

            if (reqCheckIn.isBefore(bookedOut) && reqCheckOut.isAfter(bookedIn)) {
                return false; // Room is not available
            }
        }
    }
    return true; // Room is available   
}


router.get('/room-types', (req, res) => res.json(ROOM_TYPES));

router.get('/location', (req, res) => res.json(LOCATION_DATA));


router.post('/submit', async (req, res) => {
    try {
        const data = req.body;
        console.log('Booking data:', data);

        const available = await isRoomAvailable(data.roomType, data.checkInDate, data.checkOutDate);
        if (!available) {
            return res.status(400).json({ success: false, message: 'Room is not available for the selected dates.' });
        }

        await appendBookingToSheet(data);

        res.json({ success: true, message: 'Booking data received successfully!' });
    } catch (error) {
        console.log('Booking error:', error);
        res.status(500).json({ success: false, message: 'An error occurred while processing your booking.' });
    }
});
export default router;