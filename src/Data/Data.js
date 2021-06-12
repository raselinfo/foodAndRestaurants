const foods=[
    {
        "category": "popular brands",
        "restaurantList": [
            {
                "name": "World Art Dining - Cook house",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "",
                "isExlusive": false,
                "delivery_time": "58 mins",
                "price_for_two": 1000,
                img:"https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Maestro A Restro Cafe",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Beverages"
                ],
                "ratings": "4.2",
                "isExlusive": false,
                "delivery_time": "47 mins",
                "price_for_two": 1200,
                img:"https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Cocoberry",
                "food_types": [
                    "Desserts"
                ],
                "ratings": "4.2",
                "isExlusive": true,
                "delivery_time": "52 mins",
                "price_for_two": 200,
                img:"https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Haiyan",
                "food_types": [
                    "North Indian",
                    "Chinese"
                ],
                "ratings": "",
                "isExlusive": false,
                "delivery_time": "31 mins",
                "price_for_two": 400,
                img:"https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Lotus Leaf",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Desserts"
                ],
                "ratings": "4.1",
                "isExlusive": false,
                "delivery_time": "35 mins",
                "price_for_two": 700,
                img: "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "The Big Bun",
                "food_types": [
                    "Fast Food"
                ],
                "ratings": "4.3",
                "isExlusive": false,
                "delivery_time": "42 mins",
                "price_for_two": 300,
                img: "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Moti Mahal Delux",
                "food_types": [
                    "North Indian",
                    "Muglai",
                    "Continental",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.7",
                "isExlusive": true,
                "delivery_time": "78 mins",
                "price_for_two": 1100,
                img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Hot Spot Mini Shop",
                "food_types": [
                    "Fast Food",
                    "Snacks",
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.0",
                "isExlusive": true,
                "delivery_time": "108 mins",
                "price_for_two": 1300,
                img: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "KAKE DA HOTEL",
                "food_types": [
                    "North Indian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.8",
                "isExlusive": false,
                "delivery_time": "58 mins",
                "price_for_two": 350,
                img: "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Creme N Crisp",
                "food_types": [
                    "Bakery"
                ],
                "ratings": "3.7",
                "isExlusive": true,
                "delivery_time": "25 mins",
                "price_for_two": 400,
                img: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=500&q=60"
            }
        ]
    },
    {
        "category": "offers near you",
        "restaurantList": [
            {
                "name": "Hot Spot Mini Shop",
                "food_types": [
                    "Fast Food",
                    "Snacks",
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.0",
                "isExlusive": true,
                "delivery_time": "108 mins",
                "price_for_two": 1300,
                img: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Maestro A Restro Cafe",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Beverages"
                ],
                "ratings": "4.2",
                "isExlusive": false,
                "delivery_time": "47 mins",
                "price_for_two": 1200,
                img: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Cocoberry",
                "food_types": [
                    "Desserts"
                ],
                "ratings": "4.2",
                "isExlusive": true,
                "delivery_time": "52 mins",
                "price_for_two": 200,
                img: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "World Art Dining - Cook house",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "",
                "isExlusive": false,
                "delivery_time": "58 mins",
                "price_for_two": 1000,
                img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Haiyan",
                "food_types": [
                    "North Indian",
                    "Chinese"
                ],
                "ratings": "",
                "isExlusive": false,
                "delivery_time": "31 mins",
                "price_for_two": 400,
                img: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "KAKE DA HOTEL",
                "food_types": [
                    "North Indian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.8",
                "isExlusive": false,
                "delivery_time": "58 mins",
                "price_for_two": 350,
                img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Creme N Crisp",
                "food_types": [
                    "Bakery"
                ],
                "ratings": "3.7",
                "isExlusive": true,
                "delivery_time": "25 mins",
                "price_for_two": 400,
                img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "The Big Bun",
                "food_types": [
                    "Fast Food"
                ],
                "ratings": "4.3",
                "isExlusive": false,
                "delivery_time": "42 mins",
                "price_for_two": 300,
                img: "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Moti Mahal Delux",
                "food_types": [
                    "North Indian",
                    "Muglai",
                    "Continental",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "2.7",
                "isExlusive": true,
                "delivery_time": "78 mins",
                "price_for_two": 700,
                img: "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Lotus Leaf",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Desserts"
                ],
                "ratings": "3.1",
                "isExlusive": false,
                "delivery_time": "135 mins",
                "price_for_two": 1700,
                img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Hot Spot Mini Shop",
                "food_types": [
                    "Fast Food",
                    "Snacks",
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.0",
                "isExlusive": true,
                "delivery_time": "108 mins",
                "price_for_two": 1300,
                img: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Maestro A Restro Cafe",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Beverages"
                ],
                "ratings": "4.2",
                "isExlusive": false,
                "delivery_time": "47 mins",
                "price_for_two": 1200,
                img: "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Cocoberry",
                "food_types": [
                    "Desserts"
                ],
                "ratings": "4.2",
                "isExlusive": true,
                "delivery_time": "52 mins",
                "price_for_two": 200,
                img: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "World Art Dining - Cook house",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "",
                "isExlusive": false,
                "delivery_time": "58 mins",
                "price_for_two": 1000,
                img: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Haiyan",
                "food_types": [
                    "North Indian",
                    "Chinese"
                ],
                "ratings": "",
                "isExlusive": false,
                "delivery_time": "31 mins",
                "price_for_two": 400,
                img: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "KAKE DA HOTEL",
                "food_types": [
                    "North Indian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.8",
                "isExlusive": false,
                "delivery_time": "58 mins",
                "price_for_two": 350,
                img: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=60"
            }
        ]
    },
    {
        "category": "Express delivery",
        "restaurantList": [
            {
                "name": "Hot Spot Mini Shop",
                "food_types": [
                    "Fast Food",
                    "Snacks",
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.0",
                "isExlusive": false,
                "delivery_time": "108 mins",
                "price_for_two": 1300,
                img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Maestro A Restro Cafe",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Beverages"
                ],
                "ratings": "4.2",
                "isExlusive": true,
                "delivery_time": "47 mins",
                "price_for_two": 1200,
                img: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Cocoberry",
                "food_types": [
                    "Desserts"
                ],
                "ratings": "4.2",
                "isExlusive": false,
                "delivery_time": "52 mins",
                "price_for_two": 200,
                img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "KAKE DA HOTEL",
                "food_types": [
                    "North Indian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.8",
                "isExlusive": false,
                "delivery_time": "58 mins",
                "price_for_two": 350,
                img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Maestro A Restro Cafe",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Beverages"
                ],
                "ratings": "4.2",
                "isExlusive": false,
                "delivery_time": "47 mins",
                "price_for_two": 1200,
                img: "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Lotus Leaf",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Desserts"
                ],
                "ratings": "3.1",
                "isExlusive": true,
                "delivery_time": "135 mins",
                "price_for_two": 1700,
                img: "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Hot Spot Mini Shop",
                "food_types": [
                    "Fast Food",
                    "Snacks",
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.0",
                "isExlusive": true,
                "delivery_time": "108 mins",
                "price_for_two": 1300,
                img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Haiyan",
                "food_types": [
                    "North Indian",
                    "Chinese"
                ],
                "ratings": "",
                "isExlusive": false,
                "delivery_time": "31 mins",
                "price_for_two": 400,
                img: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "KAKE DA HOTEL",
                "food_types": [
                    "North Indian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.8",
                "isExlusive": false,
                "delivery_time": "58 mins",
                "price_for_two": 350,
                img: "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Cocoberry",
                "food_types": [
                    "Desserts"
                ],
                "ratings": "4.2",
                "isExlusive": true,
                "delivery_time": "52 mins",
                "price_for_two": 200,
                img: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "World Art Dining - Cook house",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "",
                "isExlusive": false,
                "delivery_time": "58 mins",
                "price_for_two": 1000,
                img: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "World Art Dining - Cook house",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "",
                "isExlusive": false,
                "delivery_time": "58 mins",
                "price_for_two": 1000,
                img: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Haiyan",
                "food_types": [
                    "North Indian",
                    "Chinese"
                ],
                "ratings": "",
                "isExlusive": false,
                "delivery_time": "31 mins",
                "price_for_two": 400,
                img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60"
            }
        ]
    },
    {
        "category": "Gourmet",
        "restaurantList": [
            {
                "name": "Maestro A Restro Cafe",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Beverages"
                ],
                "ratings": "4.2",
                "isExlusive": true,
                "delivery_time": "47 mins",
                "price_for_two": 1200,
                img: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Lotus Leaf",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Desserts"
                ],
                "ratings": "3.1",
                "isExlusive": false,
                "delivery_time": "135 mins",
                "price_for_two": 1700,
                img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Hot Spot Mini Shop",
                "food_types": [
                    "Fast Food",
                    "Snacks",
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.0",
                "isExlusive": true,
                "delivery_time": "108 mins",
                "price_for_two": 1300,
                img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Hot Spot Mini Shop",
                "food_types": [
                    "Fast Food",
                    "Snacks",
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.0",
                "isExlusive": false,
                "delivery_time": "108 mins",
                "price_for_two": 1300,
                img: "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Maestro A Restro Cafe",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Beverages"
                ],
                "ratings": "4.2",
                "isExlusive": false,
                "delivery_time": "47 mins",
                "price_for_two": 1200,
                img: "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Cocoberry",
                "food_types": [
                    "Desserts"
                ],
                "ratings": "4.2",
                "isExlusive": false,
                "delivery_time": "52 mins",
                "price_for_two": 200,
                img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "KAKE DA HOTEL",
                "food_types": [
                    "North Indian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.8",
                "isExlusive": false,
                "delivery_time": "58 mins",
                "price_for_two": 350,
                img: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Haiyan",
                "food_types": [
                    "North Indian",
                    "Chinese"
                ],
                "ratings": "",
                "isExlusive": true,
                "delivery_time": "31 mins",
                "price_for_two": 400,
                img: "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "KAKE DA HOTEL",
                "food_types": [
                    "North Indian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.8",
                "isExlusive": false,
                "delivery_time": "58 mins",
                "price_for_two": 350,
                img: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Cocoberry",
                "food_types": [
                    "Desserts"
                ],
                "ratings": "4.2",
                "isExlusive": true,
                "delivery_time": "52 mins",
                "price_for_two": 200,
                img: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "World Art Dining - Cook house",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "",
                "isExlusive": false,
                "delivery_time": "58 mins",
                "price_for_two": 1000,
                img: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "World Art Dining - Cook house",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "",
                "isExlusive": false,
                "delivery_time": "58 mins",
                "price_for_two": 1000,
                img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Haiyan",
                "food_types": [
                    "North Indian",
                    "Chinese"
                ],
                "ratings": "",
                "isExlusive": false,
                "delivery_time": "31 mins",
                "price_for_two": 400,
                img: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Hot Spot Mini Shop",
                "food_types": [
                    "Fast Food",
                    "Snacks",
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.0",
                "isExlusive": true,
                "delivery_time": "108 mins",
                "price_for_two": 1300,
                img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Maestro A Restro Cafe",
                "food_types": [
                    "North Indian",
                    "Chinese",
                    "Beverages"
                ],
                "ratings": "4.2",
                "isExlusive": false,
                "delivery_time": "47 mins",
                "price_for_two": 1200,
                img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "Cocoberry",
                "food_types": [
                    "Desserts"
                ],
                "ratings": "4.2",
                "isExlusive": true,
                "delivery_time": "52 mins",
                "price_for_two": 200,
                img: "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60"
            },
            {
                "name": "KAKE DA HOTEL",
                "food_types": [
                    "North Indian",
                    "Desserts",
                    "Beverages"
                ],
                "ratings": "4.8",
                "isExlusive": false,
                "delivery_time": "58 mins",
                "price_for_two": 350,
                img: "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60"
            }
        ]
    }
]


export default foods;