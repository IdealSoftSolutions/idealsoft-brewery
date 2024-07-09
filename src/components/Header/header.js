import React from 'react'
import './Header.css'
import { FaSearch } from "react-icons/fa"; // Import your desired icon

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="header" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="header_nav">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="header_nav">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="header_nav">
                            <a className="nav-link" href="#">On Tap</a>
                        </li>
                        <li className="header_nav">
                            <a className="nav-link" href="#">Wine & Spirits</a>
                        </li>
                        <li className="header_nav">
                            <a className="nav-link" href="#">Non Alcoholic</a>
                        </li>
                        <li className="header_nav">
                            <a className="nav-link" href="/menu">Food Menu</a>
                        </li>
                        <li className="header_nav">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="header_nav">
                            <input className="header_search_button" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-info" type="submit"><FaSearch /></button>
                        </li>
                    </ul>
                </div>

            </nav>

        </div>
    )
}
