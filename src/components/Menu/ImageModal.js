// src/components/ImageModal.js
import React from 'react';
import './ImageModal.css';

const ImageModal = ({ show, handleClose, selectedFoodItem }) => {

    return (
        <div className={`modal ${show ? 'show' : 'hide'}`} onClick={handleClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h3 className="food-title">{selectedFoodItem.title}</h3>
                <p className="food-price">₹{selectedFoodItem.price}</p>
                <button className="close-button" onClick={handleClose}>
                    <span className="close-icon">&times;</span>
                </button>
                <img src={selectedFoodItem.image} alt="Large view" className="large-image" />
                <p className="food-description">{selectedFoodItem.description}</p>
            </div>
        </div>
    );
};

export default ImageModal;
