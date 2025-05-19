import express from 'express';
const router = express.Router();


const facilities = [
    {
        id: 1,
        name: "Single Room",
        description: "Indulge in comfort and tranquility in our cozy Single Room, designed to provide the perfect retreat for solo travelers. This inviting space features a plush single bed, ensuring a restful night's sleep. The room is equipped with modern amenities, including a flat-screen TV, complimentary Wi-Fi, and a stylishly appointed bathroom with a refreshing shower.",
        type: "collage",
        images: ["facilitiesPage/single-room-1.jpg", "facilitiesPage/single-room-2.jpg", "facilitiesPage/single-room-3.jpg"],
        position: "left"
    },

    {
        id: 2,
        name: "Double Room",
        description: "Experience comfort and elegance in our Double Room, designed to accommodate two guests with style and sophistication. This spacious room features a luxurious queen or king-size bed, perfect for couples or friends traveling together. The room is equipped with modern amenities, including a flat-screen TV, complimentary Wi-Fi, and an en-suite bathroom with a refreshing shower or bath.",
        type: "collage",
        images: ["facilitiesPage/double-room-1.jpg", "facilitiesPage/double-room-2.jpg", "facilitiesPage/double-room-3.jpg"],
        position: "right"
    },
    {
        id: 3,
        name: "Function Hall",
        description: "Whether you're planning a grand celebration, a corporate event, or an intimate gathering, these function halls offer a range of features and capacities to suit your needs. From luxurious ballrooms to versatile meeting spaces, here are some outstanding options for hosting your next event.",
        type: "collage",
        images: ["facilitiesPage/function-hall-1.jpg", "facilitiesPage/function-hall-2.jpg", "facilitiesPage/function-hall-3.jpg"],
        position: "left"
    },

    {
        id: 4,
        name: "Cafe",
        description: "Indulge in a delightful dining experience at our cozy café, where you can enjoy a variety of international and local flavors in a warm and inviting atmosphere. Our café is designed to provide a comfortable space for guests to relax and socialize while savoring a selection of teas, coffees, and delicious pastries.",
        type: "slider",
        slides: ["facilitiesPage/cafe-1.jpg", "facilitiesPage/cafe-2.jpg", "facilitiesPage/cafe-3.jpg"],
        position: "center"
    },

];

router.get('/', (req, res) => {
    res.set('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.json(facilities);
});

export default router;