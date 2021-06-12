import React from 'react';
import { useState } from 'react';
import foods from '../../Data/Data';
import AllFood from '../AllFood/AllFood';
import ExpressDelivery from '../ExpressDelivery/ExpressDelivery';
import GourMet from '../GourMet/GourMet';
import OffersNearYou from '../OffersNearYou/OffersNearYou';
import PopulerBrand from '../PopulerBrand/PopulerBrand';

const Items = ({ isShow}) => {
    const [items,setItms]=useState(foods)
    return (
        <div>
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabindex="0">
                {
                    isShow===true ? <>
                        <PopulerBrand items={items}></PopulerBrand>
                        <OffersNearYou items={items}></OffersNearYou>
                        <ExpressDelivery items={items}></ExpressDelivery>
                        <GourMet items={items}></GourMet>
                    </> : <AllFood items={items}></AllFood>
                }
             
            </div>
        </div>
    );
};

export default Items;