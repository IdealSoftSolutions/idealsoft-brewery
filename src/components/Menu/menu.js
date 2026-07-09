import React, { useEffect, useState } from 'react';
import chickentikka from '../Assets/chickentikka.jpg'
import smokedBBQ from '../Assets/smokedBBQ.jpg'
import tandoorichicken from '../Assets/tandoorichicken.jpg'
import bbq from '../Assets/BBQ.jpg'
import desserts from '../Assets/food/desserts.webp'
import SlidingMenu from './SlidingMenu';
import hookah from '../Assets/food/hookah.jpg'
import drinks from '../Assets/food/drinks.jpg'
import wine from '../Assets/food/wine.webp'
import beer from '../Assets/food/beer.avif'
import food from '../Assets/food/food.avif'
import './FoodCard.css';
import Submenu from './Submenu';
import tiramisu from '../Assets/food/tiramisu.webp'
import mojitos from '../Assets/food/mojito.jpg'
import corona from '../Assets/food/corona.jpg'
import whitewine from '../Assets/food/whitewine.webp'
import cheescake from '../Assets/food/cheesecake.webp'
import brownie from '../Assets/food/brownie.jpg'
import custard from '../Assets/food/custard.png'
import lemonade from '../Assets/food/lemonade.jpg'
import margarita from '../Assets/food/margarita.jpg'
import sparklingwine from '../Assets/food/SparklingWine.jpg'
import tequilla from '../Assets/food/tequilla.jpg'
import whiskey from '../Assets/food/whiskey.jpg'
import rum from '../Assets/food/rum.webp'
import bacardi from '../Assets/food/bacardi.jpg'
import redwine from '../Assets/food/redwine.webp'


export default function Menu(props) {
    const [searchValue, setSearchValue] = useState('');
    const [selectedMenuId, setSelectedMenuId] = useState(1);

    const handleDataFromChild = (data) => {
        setSelectedMenuId(data);
    };

    useEffect(() => {
        setSearchValue(props.searchValue)
    }, [props.searchValue]);

    const items = [
        { id: 1, image: food, label: "Food" },
        { id: 2, image: hookah, label: "Hookah" },
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
    const dessertsItems = [
        {
            image: tiramisu,
            title: "Tiramisu",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        }, {
            image: cheescake,
            title: "Berry Cheescake",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        }, {
            image: brownie,
            title: "Sizzling Brownie",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        }, {
            image: custard,
            title: "Custard Pudding",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        }
    ];

    const hookahItems = [
        {
            image: hookah,
            title: "Hookah",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",
            isVegetarian: false
        },
        {
            image: hookah,
            title: "Hookah",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",
            isVegetarian: false
        }, {
            image: hookah,
            title: "Hookah",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",
            isVegetarian: false
        }, {
            image: hookah,
            title: "Hookah",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",
            isVegetarian: false
        }
    ];

    const nonAlcoholic = [
        {
            image: mojitos,
            title: "mojitos",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        }, {
            image: lemonade,
            title: "Strawberry Lemonade",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        }, {
            image: margarita,
            title: "Margarita",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        }, {
            image: tiramisu,
            title: "tiramisu",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        }
    ];

    const onTap = [
        {
            image: corona,
            title: "corona",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        }, {
            image: tiramisu,
            title: "tiramisu",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        }
    ];

    const wine_spirits = [
        {
            image: whitewine,
            title: "White Wine",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        }, {
            image: sparklingwine,
            title: "Sparkling Wine",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        },
        {
            image: tequilla,
            title: "Tequilla",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        }, {
            image: whiskey,
            title: "Whiskey",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        },
        {
            image: rum,
            title: "Rum",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        }, {
            image: bacardi,
            title: "Bacardi",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        },
        {
            image: redwine,
            title: "Red Wine",
            description: "Crispy Tamilian cottage cheese fritters marinated with garlic, chilly, curry leaves and assorted spices.",
            price: "495",

        }
    ];

    let submenu;

    if (selectedMenuId === 1)
        submenu = foodItems
    else if (selectedMenuId === 2)
        submenu = hookahItems
    else if (selectedMenuId === 3)
        submenu = dessertsItems
    else if (selectedMenuId === 4)
        submenu = nonAlcoholic
    else if (selectedMenuId === 5)
        submenu = onTap
    else if (selectedMenuId === 6)
        submenu = wine_spirits
    console.log("searchValue in menu=== " + searchValue)
    submenu = submenu.filter(item =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    )


    return (
        <div className="catlist">
            <div className="container">
                <SlidingMenu items={items} onDataFromChild={handleDataFromChild} />
                <Submenu submenuItems={submenu} />
            </div>
        </div>

    )
}
