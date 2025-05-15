import express from 'express';
const router = express.Router();

const rooms = [
    {
        id: 1,
        title: "Standard Room",
        price: "₱2,300",
        description:
            "A comfortable, reasonably priced accommodation with all the amenities you need for a good visit.",
        image: "roomPage/standard.jpg"
    },
    {
        id: 2,
        title: "Deluxe Room",
        price: "₱3,000",
        description:
            "Spacious and stylish, offering enhanced comfort and upgraded amenities.",
        image: "roomPage/deluxe.jpg"
    },
    {
        id: 3,
        title: "Twin deluxe Room",
        price: "₱2,500",
        description:
            "Ideal for two, featuring twin beds and modern conveniences in a roomy layout.",
        image: "roomPage/twin-deluxe.jpg"
    },
    {
        id: 4,
        title: "Executive Room",
        price: "₱3,500",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        image: "roomPage/executive.jpg"
    },
    {
        id: 5,
        title: "Special Executive Room",
        price: "₱4,000",
        description:
            "A luxurious room with top-tier amenities and enhanced privacy for a superior stay.",
        image: "roomPage/special-executive.jpg"
    },
    {
        id: 6,
        title: "Family Room",
        price: "₱4,500",
        description:
            "Generously sized room with multiple beds, perfect for families or small groups.",
        image: "roomPage/family-room.jpg"
    }
];

router.get('/', (req, res) => {
    res.json(rooms);
});

export default router;