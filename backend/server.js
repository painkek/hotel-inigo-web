import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import roomRouter from './routes/room.js';
import facilityRouter from './routes/facilities.js';
import bookingRouter from './routes/bookingData.js';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use('/api/rooms', roomRouter);
app.use('/api/facilities', facilityRouter);
app.use('/api/booking', bookingRouter);

app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({success: false, message: 'Internal server error' });
});

app.listen(3001, () => (
    console.log(`Server is running on port 3001`)
));