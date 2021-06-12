import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
const CardItem = ({ time, foodTypes, img, price, name, rating }) => {

    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <div style={
                        {
                            background: `url(${img})`,
                            height: "100px",
                            backgroundSize: "cover"
                        }
                    }></div>
                    <h3>{name}</h3>
                    {
                        foodTypes.slice(0,3).map((type,index)=>{
                            return <span key={index} className="foodType">{type}</span>
                        })
                    }

                    <div className="d-flex justify-content-between mt-4 card__footer-up">
                        {
                            rating.length === 0 ? 
                            <div>
                                    <FontAwesomeIcon icon={faStar} /> -
                            </div> 
                            :
                             <div className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <span className="ml-2">{rating}</span>
                            </div>
                        }
                        
                        .
                        <div className="time">
                            <span> {time}</span>
                        </div>
                        .
                        <div className="price">
                            <span>₹{price} FOR TWO</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <a href="#">QUICK VIEW</a>
                </div>
            </div>

        </div>

    );
};

export default CardItem;