import React from 'react'
import './Header.css'
export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="header" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="header_nav">
                            <a className="nav-link active" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="header_nav">
                            <a className="nav-link" href="#">MENU</a>
                        </li>
                        <li className="header_nav">
                            <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
                        </li>
                        <li className="header_nav">
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
                    </ul>
                </div>

            </nav>

        </div>
    )
}
