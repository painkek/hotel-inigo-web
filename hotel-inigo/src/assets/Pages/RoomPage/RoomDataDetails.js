
import deluxe1 from "../../images/rooms/deluxe3.jpg";
import deluxe2 from "../../images/rooms/deluxe4.jpg";
import deluxe3 from "../../images/rooms/deluxe5.jpg";

import standard1 from "../../images/rooms/standard.jpg";
import standard2 from "../../images/rooms/standard2.jpg";
import standard3 from "../../images/rooms/standard3.jpg";

import twin1 from "../../images/rooms/twin-deluxe1.jpg";
import twin2 from "../../images/rooms/twin-deluxe2.jpg";
import twin3 from "../../images/rooms/twin-deluxe4.jpg";

import executive1 from "../../images/rooms/executive1.jpg";
import executive2 from "../../images/rooms/executive2.jpg";
import executive3 from "../../images/rooms/executive3.jpg";

import special1 from "../../images/rooms/special-executive1.jpg";
import special2 from "../../images/rooms/special-executive4.jpg";
import special3 from "../../images/rooms/special-executive3.jpg";

import family1 from "../../images/rooms/family-room1.jpg";
import family2 from "../../images/rooms/family-room4.jpg";
import family3 from "../../images/rooms/family-room5.jpg";


const RoomDetails = [
    {
        id: 1,
        title: "Standard Room",
        description: "Our well-appointed Standard Room is ideal for couples or single visitors seeking comfort and simplicity. It provides excellent value and has a comfortable bed, a contemporary bathroom, and all the necessities. Perfect for a peaceful night's sleep following a day of city exploration.",
        price: 2300,
        currency: "₱",
        view: "City View",
        size: "24m²",
        bedType: "One bed",
        images: [
            standard1,
            standard2,
            standard3
            
        ],
        
        facilities: [
            "Air conditioning",
            "Linens",
            "TV",
            "Desk",
            "Cable channels",
            "Wardrobe or closet",
        ],
        privateRoom: [
            "Free toiletries",
            "Towels",
            "Shower",
            "Toilet"
        ]
    },
    {
        id: 2,
        title: "Deluxe Room",
        description: "Our Deluxe Room features chic furnishings and high-quality linen, providing additional space and enhanced comfort. Unwind with extra features including a bigger TV, a couch, and better toiletries. An excellent option for guests looking for a more upscale stay.",
        price: 3000,
        currency: "₱",
        view: "Ocean View",
        bedType: "King-size bed",

        images: [
            deluxe1,
            deluxe2,
            deluxe3
        ],
        facilities: [
            "Air conditioning",
            "Linens",
            "TV",
            "Desk",
            "Safe",
            "Hypoallergenic",
            "Tea/Coffee maker",
            "Alarm clock",
            "Electric kettle",
            "Cable channels",
            "Wardrobe or closet",
            "Clothes rack"

        ],
        privateRoom: [
            "Free toiletries",
            "Shower",
            "Toilet",
            "Towels",
            "Bidet",
            "Slippers",
            "Guest bathroom",
            "Toilet paper"
        ]
    },
    {
        id: 3,
        title: "Twin Deluxe Room",
        description: "With two cozy single beds arranged in a roomy arrangement, the Twin Deluxe Room is ideal for groups of friends or coworkers. Savor thoughtful comforts, a spacious workstation, and stylish décor. Convenience and comfort are intended to be combined.",
        price: 2500,
        currency: "₱",
        view: "Garden View",
        bedType: "Two Twin Beds",
        images: [
            twin1,
            twin2,
            twin3
        ],
        facilities: [
            "Air conditioning",
            "Linens",
            "TV",
            "Desk",
            "Safe",
            "Hypoallergenic",
            "TV",
            "Tea/Coffee maker",
            "Alarm clock",
            "Electric kettle",
            "Cable channels",
            "Wardrobe or closet",
            "Clothes rack"

        ],

        privateRoom: [
            "Free toiletries",
            "Shower",
            "Bidet",
            "Toilet",
            "Towels",
            "Slippers",
            "Guest bathroom",
            "Toilet paper"
        ]
    },
    {
        id: 4,
        title: "Executive Room",
        description: "Enhance your visit by booking an Executive Room, which offers exquisite décor and special access to additional services. It's perfect for business travelers or visitors seeking a first-rate experience because it's spacious and peaceful. consists of premium finishes and a designated work space.",
        price: 3500,
        currency: "₱",
        view: "City View",
        bedType: "King-size bed",
        images: [
            executive1,
            executive2,
            executive3
        ],
        facilities: [
            "Air conditioning",
            "Linens",
            "Desk",
            "TV",
            "Cable channels",
            "Wardrobe or closet",   
        ],
       
        privateRoom: [
           "Free toiletries",
           "Shower",
           "Toilet",
            "Towels"
        ]
    },
    {
        id: 5,
        title: "Special Executive Room",
        description: "The Special Executive Room is a luxurious retreat that combines elegance and comfort. It features a spacious layout, premium furnishings, and exclusive amenities. Ideal for discerning travelers seeking an elevated experience, this room offers stunning views and personalized service.",
        price: 4000,
        currency: "₱",
        view: "Ocean View",
        bedType: "King-size bed",
        images: [
            special1,
            special2,
            special3,
        ],
        facilities: [
            "Air conditioning",
            "Linens",
            "Desk",
            "TV",
            "Cable channels",
            "Wardrobe or closet",
        ],
        privateRoom: [
           "Free toiletries",
              "Shower",
              "Toilet",
                "Towels"
        ]
    },
    {
        id: 6,
        title: "Family Room",
        description: "Our Family Room was created with families in mind, offering additional room, several beds, and amenities that are kid-friendly. In a cozy and welcoming environment, everyone may unwind in ease. A comfortable and useful choice for group travel.",
        price: 4500,
        currency: "₱",
        view: "City View",
        bedType: "Two Queen Beds",
        images: [
            family1,
            family2,
            family3
        ],
        facilities: [
            "Air conditioning",
            "Linens",
            "TV",
            "Desk",
            "Safe",
            "Hypoallergenic",
            "TV",
            "Tea/Coffee maker",
            "Alarm clock",
            "Electric kettle",
            "Cable channels",
            "Wardrobe or closet",
            "Clothes rack"
        ],
       
        privateRoom: [
            "Private Bathroom",
            "Shower",
            "Toiletries",
            "Towels",
            "Hair Dryer",
            "Bathrobe"
        ]
    }
];

export default RoomDetails;

