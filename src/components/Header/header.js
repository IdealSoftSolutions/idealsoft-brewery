import React, { useState } from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../Search/SearchForHeader';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

export default function Header({ sendSearchValue }) {
    const [selectedMenu, setSelectedMenu] = useState('');
    const [searchMeu, setSearchMeu] = useState(false);
    const [searchvalue, setSearchValue] = useState('');

    const navigate = useNavigate();


    const handleClick = (e) => {
        setSelectedMenu(e);
        console.log('handleClick searchvalue ==> ' + searchvalue)
        console.log('handleClick selectedMenu ==> ' + selectedMenu)

        if (selectedMenu == 'search') {
            navigate('/menu');
            setSearchMeu(true)
            sendSearchValue(searchvalue)
        }
    };

    const handleChange = (event) => {
        setSearchValue(event.target.value)
        navigate('/menu');
        setSearchMeu(true)
        sendSearchValue(searchvalue)
    }


    return (
        <div className="navbar-header">
            <div className="navbar-left">
                <div className="navbar-links">
                    <a itemProp='url' role='tab' aria-controls='primarypanel2' aria-selected='true' className={selectedMenu === 'home' ? 'activeMenu' : ''} onClick={() => handleClick('home')} href="/home">Home</a>
                    <a className={selectedMenu === 'about' ? 'activeMenu' : ''} onClick={() => handleClick('about')} href="#">About</a>
                    <a className={selectedMenu === 'menu' ? 'activeMenu' : ''} onClick={() => handleClick('menu')} href="/menu">Menu</a>
                    <a className={selectedMenu === 'on tap' ? 'activeMenu' : ''} onClick={() => handleClick('on tap')} href="#">On Tap</a>
                    <a className={selectedMenu === 'wine & spirits' ? 'activeMenu' : ''} onClick={() => handleClick('wine & spirits')} href="#">Wine & Spirits</a>
                    <a className={selectedMenu === 'non alcoholic' ? 'activeMenu' : ''} onClick={() => handleClick('non alcoholic')} href="#">Non Alcoholic</a>
                </div>
            </div>
            <div className="navbar-right">
                <div className="navbar-icons">
                    <div className="input-group rounded">
                        <input type="text" className="searchbox" onChange={handleChange} onClick={() => handleClick('search')} placeholder="Search..." aria-label="Search" aria-describedby="search-addon" />
                    </div>

                </div>
            </div>
            {/* {searchMeu & Search} */}
        </div>
    )
}
