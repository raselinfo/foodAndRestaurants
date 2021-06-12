import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CardItem from '../CardItem/CardItem';

const PopulerBrand = ({ items}) => {  
    const [popular, setPopular] = useState(items[0].restaurantList.slice(0,5))
    const [isShowMore,setIsShowMore]=useState(false)
    useEffect(()=>{
        if(isShowMore){
            setPopular(items[0].restaurantList)
        }
    }, [isShowMore])
    return (
        <section id="popularBrand" className="popular__brand">
            <div className="container-fluid">
                <h2>{items[0].category}</h2>
                <div className="row mt-5">
                    {
                        popular.map((item,index)=>{
                      
                            const { delivery_time, food_types, img, name, price_for_two, ratings }=item;
                            return (
                                <CardItem time={delivery_time} foodTypes={food_types} img={img} name={name} price={price_for_two} rating={ratings} key={index}></CardItem>
                            )
                        })
                    }
                    {/* Show More */}
                    {
                        !isShowMore && <div className="col-md-4">
                            <div className="card show__more" onClick={() => setIsShowMore(true)}>
                                <div style={
                                    {
                                        background: `url(https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60)`,
                                        height: "200px",
                                        backgroundSize: "cover"
                                    }
                                }></div>

                                <div className="overlay">
                                    <h3>+{
                                        items[0].restaurantList.slice(0, 5).length
                                    } More</h3>
                                </div>
                            </div>
                        </div>
                    }
                   
                </div>
            </div>
        </section>
    );
};

export default PopulerBrand;