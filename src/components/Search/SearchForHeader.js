import React, { useState } from 'react';
import Submenu from '../Menu/Submenu';
import './SearchForHeader.css';
import chickentikka from '../Assets/chickentikka.jpg'



const Search = ({ searchQuery }) => {
    const foodItemss = [
        {
            image: chickentikka,
            title: "Chicken Tikka",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",
            isVegetarian: false
        }
    ];
    return (
        <div className="Search">
            <Submenu submenuItems={foodItemss} />
        </div>
    );
};

export default Search;
