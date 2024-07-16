// src/components/SlidingMenu.js
import React, { useRef, useState } from 'react';
import './SlidingMenu.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SlidingMenu = ({ items }) => {
    const menuRef = useRef(null);
    const [selected, setSelected] = useState(null);

    const slideLeft = () => {
        menuRef.current.scrollLeft -= 200;
    };

    const slideRight = () => {
        menuRef.current.scrollLeft += 200;
    };

    return (

        <div className="sliding-container">
            <button className="slide-button left" onClick={slideLeft}>
                <FaChevronLeft />
            </button>
            <div className="sliding-menu" ref={menuRef}>
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`menu-item ${selected === item.id ? 'selected' : ''}`}
                        onClick={() => setSelected(item.id)}>
                        <img src={item.image} alt={item.label} className="item-image" />
                        <div className="item-label">{item.label}</div>
                    </div>
                ))}
                <button className="slide-button right" onClick={slideRight}>
                    <FaChevronRight />
                </button>
            </div>
        </div>

    );
};

export default SlidingMenu;
