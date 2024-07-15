import React from 'react'
import cocktail from '../Assets/chicken/'
import FoodCard from './FoodCard';

export default function Menu() {


    const foodItems = [
        {
            image: "",
            title: "Paneer 65",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",
            isVegetarian: true
        },
        {
            image: cocktail,
            title: "Falafel & Hummus Platter",
            description: "Chickpea Falafels served with Hummus and Pita.",
            price: "495",
            isVegetarian: true
        },
        {
            image: cocktail,
            title: "Vegetable Adana Kebab Platter",
            description: "Turkish style vegetable skewers cooked in a tandoor.",
            price: "1195",
            isVegetarian: true
        },
        {
            image: cocktail,
            title: "Chicken 65",
            description: "Crispy Tamilian chicken fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "595",
            isVegetarian: false
        }
    ];


    return (
        <div className="catlist" pro='1'>
            <header className="App-header">
                <h1>Food Menu</h1>
                <div className="container">
                    <div className="row">
                        {foodItems.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4">
                                <FoodCard {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </header>
        </div>

    )
}
