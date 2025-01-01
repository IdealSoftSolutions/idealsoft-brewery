// src/components/SlidingMenu.js
import React, { useRef, useState } from 'react';
import './SlidingMenu.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SlidingMenu = ({ items, onDataFromChild }) => {
    const menuRef = useRef(null);
    const [selectedMenuId, setSelectedMenuId] = useState(1);
    const [selectedLabel, setSelectedLabel] = useState('Food');
    const slideLeft = () => {
        menuRef.current.scrollLeft -= 200;
    };

    const slideRight = () => {
        menuRef.current.scrollLeft += 200;
    };

    const handleSelect = (item) => {
        onDataFromChild(item.id)
        setSelectedLabel(item.label)
        setSelectedMenuId(item.id)
    }
    return (
        <div>
            <div className="sliding-container">
                <button className="slide-button left" onClick={slideLeft}>
                    <FaChevronLeft />
                </button>
                <div className="sliding-menu" ref={menuRef}>
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`menu-item ${selectedMenuId === item.id ? 'selected' : ''}`}
                            onClick={() => handleSelect(item)}>
                            <img src={item.image} alt={item.label} className="item-image" />
                            <div className="item-label">{item.label}</div>
                        </div>
                    ))}
                    <button className="slide-button right" onClick={slideRight}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            <div>
                <div className='slected-menu-item'>
                    <div className="veg-label">
                        <div className="veg-icon">
                            <div className="inner-circle"></div>
                        </div>
                        <span className="veg-text">{selectedLabel}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlidingMenu;
