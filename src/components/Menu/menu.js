import React from 'react'
import chickentikka from '../Assets/chickentikka.jpg'
import FoodCard from './FoodCard';
import smokedBBQ from '../Assets/smokedBBQ.jpg'
import tandoorichicken from '../Assets/tandoorichicken.jpg'
import bbq from '../Assets/BBQ.jpg'
import SlidingMenu from './SlidingMenu';
import desserts from '../Assets/food/desserts.webp'
import hookah from '../Assets/food/hookah.jpg'
import drinks from '../Assets/food/drinks.jpg'
import wine from '../Assets/food/wine.webp'
import beer from '../Assets/food/beer.avif'
import food from '../Assets/food/food.avif'

export default function Menu() {

    const items = [
        { id: 1, image: hookah, label: "Hookah" },
        { id: 2, image: food, label: "Food" },
        { id: 3, image: desserts, label: "Desserts" },
        { id: 4, image: drinks, label: "Non Alcoholic" },
        { id: 5, image: beer, label: "On tap" },
        { id: 6, image: wine, label: "Wine & Spirits" },

    ];
    const foodItems = [
        {
            image: chickentikka,
            title: "Chicken Tikka",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",
            isVegetarian: false
        },
        {
            image: smokedBBQ,
            title: "Smoked BBQ",
            description: "Chickpea Falafels served with Hummus and Pita.",
            price: "495",
            isVegetarian: false
        },
        {
            image: tandoorichicken,
            title: "Tandoori Chicken",
            description: "Turkish style vegetable skewers cooked in a tandoor.",
            price: "1195",
            isVegetarian: false
        },
        {
            image: bbq,
            title: "BBQ",
            description: "Crispy Tamilian chicken fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "595",
            isVegetarian: false
        },
        {
            image: bbq,
            title: "BBQ",
            description: "Crispy Tamilian chicken fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "595",
            isVegetarian: true
        }
    ];


    return (
        <div className="catlist">
            <div className="container">
                <SlidingMenu items={items} />
                <div className="row">
                    {foodItems.map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4">
                            <FoodCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
