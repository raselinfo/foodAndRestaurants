import React, { useState } from 'react';
import { useEffect } from 'react';
import CardItem from '../CardItem/CardItem';

const AllFood = ({ items }) => {

    const [popular, setPopular] = useState(items[0])
    const [offer, setOffer] = useState(items[1])
    const [express, setExpress] = useState(items[2])
    const [gourmet, setGourmet] = useState(items[3])
    const [swiggy, setSwiggy] = useState(items[4])
    const [allFood, setAllFood] = useState([])

    useEffect(()=>{
        const newFood = [...popular.restaurantList, ...offer.restaurantList, ...express.restaurantList, ...gourmet.restaurantList, ...swiggy.restaurantList]
        setAllFood(newFood)
    },[])
    
    return (
        <section id="all" className="popular__brand">
            <div className="container-fluid">
                <h2>All Restaurants</h2>
                <div className="row mt-5">
                    {
                        allFood.map((item, index) => {

                            const { delivery_time, food_types, img, name, price_for_two, ratings } = item;
                            return (
                                <CardItem time={delivery_time} foodTypes={food_types} img={img} name={name} price={price_for_two} rating={ratings} key={index}></CardItem>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
};

export default AllFood;