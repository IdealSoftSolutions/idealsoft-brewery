import React, { useState } from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    const [selectedMenu, setSelectedMenu] = useState('');

    const handleClick = (e) => {
        setSelectedMenu(e);
    };


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
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" className="btn btn-link" onClick={() => alert('Search icon clicked')}>
                            <i className="fas fa-search" style={{ fontSize: '24px', color: 'white' }}></i>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
