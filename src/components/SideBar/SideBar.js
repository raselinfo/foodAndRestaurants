import React from 'react';
import { HashLink, NavHashLink } from 'react-router-hash-link';
const SideBar = ({ items, isShowItems }) => {
    let totalRestaurants = 0;
    items.forEach((item, index) => {
        totalRestaurants = totalRestaurants + item.restaurantList.length
    });


    return (
        <aside className="side__bar">
            <div id="list-example" className="list-group">
                {
                    items.map((item, index) => {
                        return (
                            <>
                                <NavHashLink onClick={() => isShowItems(true)} key={index} className="list-group-item list-group-item-action" to={
                                    (item.category === "offers near you" && "#offersNearYou") ||
                                    (item.category === "Express delivery" && "#expressDelivery") ||
                                    (item.category === "Gourmet" && "#gourmet") ||
                                    (item.category === "popular brands" && "#popularBrand") ||
                                    (item.category === "Only In Swiggy" && "#onlyInSwiggy")
                                }>
                                    {item.category}
                                    <span className="total__restaurants">{item.restaurantList.length} restaurants</span>
                                </NavHashLink>
                            </>
                        )
                    })

                }
                <NavHashLink className="list-group-item list-group-item-action" to="#all" onClick={() => isShowItems(false)}>
                    See All
                    <span className="total__restaurants">{totalRestaurants} restaurants</span>
                </NavHashLink>
            </div>
        </aside>
    );
};

export default SideBar;