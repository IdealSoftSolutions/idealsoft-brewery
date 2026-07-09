import React, { useState } from 'react';
import ImageModal from './ImageModal';

import './FoodCard.css';


export default function Submenu({ submenuItems }) {


    const [selectedItem, setSelectedItem] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleImageClick = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleClose = () => {
        setSelectedItem('');
        setShowModal(false);
    };

    return (
        <div className="row">
            {submenuItems.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4">
                    <div className="food-card">
                        <img src={item.image} alt={item.title} className="food-image" onClick={() => handleImageClick(item)} />
                        <div className="food-details">
                            <h3 className="food-title">
                                {item.isVegetarian ? <span className="veg-icon">🟢</span> : <span className="non-veg-icon">🔺</span>}
                                {item.title}
                            </h3>
                            <p className="food-price">₹{item.price}</p>
                        </div>
                        <ImageModal show={showModal} handleClose={handleClose} selectedFoodItem={selectedItem} />
                    </div>
                </div>
            ))}
        </div>)
}

