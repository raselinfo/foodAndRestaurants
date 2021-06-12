import React from 'react';
import { NavLink } from 'react-router-dom';
const SideBar = ({ items, isShowItems }) => {
    let totalRestaurants=0;
    items.forEach((item,index) => {       
        totalRestaurants = totalRestaurants + item.restaurantList.length
  });   

  
    return (
        <aside className="side__bar">
            <div  className="list-group">
                {
                    items.map((item,index) => {
                        return (
                            <>
                                <a activeClassName="selected" onClick={() => isShowItems(true)}  key={index} className="list-group-item list-group-item-action" href={
                                    (item.category ==="offers near you" && "#offersNearYou") ||
                                    (item.category === "Express delivery" && "#expressDelivery") ||
                                    (item.category === "Gourmet" && "#gourmet") ||
                                    (item.category === "popular brands" && "#popularBrand")
                                }>
                                    {item.category}
                                    <span className="total__restaurants">{item.restaurantList.length} restaurants</span>
                                </a>
                            </>
                        )
                    })
                   
                }
                <a className="list-group-item list-group-item-action" href="#all" onClick={() => isShowItems(false)}>
                    See All
                    <span className="total__restaurants">{totalRestaurants} restaurants</span>
                </a>
            </div>
        </aside>
    );
};

export default SideBar;