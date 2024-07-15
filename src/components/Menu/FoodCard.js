// src/components/FoodCard.js
import React from 'react';
import './FoodCard.css';

const FoodCard = ({ image, title, price, isVegetarian }) => {
    return (
        <div className="food-card">
            <img src={image} alt={title} className="food-image" />
            <div className="food-details">
                <h3 className="food-title">
                    {isVegetarian ? <span className="veg-icon">🟢</span> : <span className="non-veg-icon">🔺</span>}
                    {title}
                </h3>
                <p className="food-price">₹{price}</p>
            </div>
        </div>
    );
};

export default FoodCard;
