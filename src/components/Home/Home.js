import React from 'react';
import { useState } from 'react';
import foods from '../../Data/Data';
import Items from '../Items/Items';
import SideBar from '../SideBar/SideBar';

const Home = () => {
    const [items, setItems] = useState(foods)
    const [isShow,setIshow]=useState(true)
    const isShowItems=(show)=>{
        setIshow(show)
    }
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <SideBar isShowItems={isShowItems} items={items} />
                    </div>
                    <div className="col-md-9">
                        <Items isShow={isShow}/>
                    </div>
                </div>
            </div>          
        </main>
    );
};

export default Home;