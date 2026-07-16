import React, { useState } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function Header({ sendSearchValue }) {
    const [selectedMenu, setSelectedMenu] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const navigate = useNavigate();

    const handleClick = (menu) => {
        setSelectedMenu(menu);

        console.log("handleClick searchValue ==> ", searchValue);
        console.log("handleClick selectedMenu ==> ", menu);

        switch (menu) {
            case "home":
                navigate("/home");
                break;

            case "menu":
                navigate("/menu");
                break;

            case "search":
                navigate("/menu");
                sendSearchValue(searchValue);
                break;

            default:
                break;
        }
    };~

    const handleChange = (event) => {
        const value = event.target.value;

        setSearchValue(value);
        navigate("/menu");
        sendSearchValue(value);
    };

    return (
        <div className="navbar-header">
            <div className="navbar-left">
                <div className="navbar-links">
                    <a
                        href="/home"
                        className={selectedMenu === "home" ? "activeMenu" : ""}
                        onClick={() => handleClick("home")}
                    >
                        Home
                    </a>

                    <a
                        href="/about"
                        className={selectedMenu === "about" ? "activeMenu" : ""}
                        onClick={() => handleClick("about")}
                    >
                        About
                    </a>

                    <a
                        href="/menu"
                        className={selectedMenu === "menu" ? "activeMenu" : ""}
                        onClick={() => handleClick("menu")}
                    >
                        Menu
                    </a>

                    <a
                        href="/on-tap"
                        className={selectedMenu === "on tap" ? "activeMenu" : ""}
                        onClick={() => handleClick("on tap")}
                    >
                        On Tap
                    </a>

                    <a
                        href="/wine-spirits"
                        className={selectedMenu === "wine & spirits" ? "activeMenu" : ""}
                        onClick={() => handleClick("wine & spirits")}
                    >
                        Wine & Spirits
                    </a>

                    <a
                        href="/non-alcoholic"
                        className={selectedMenu === "non alcoholic" ? "activeMenu" : ""}
                        onClick={() => handleClick("non alcoholic")}
                    >
                        Non Alcoholic
                    </a>
                </div>
            </div>

            <div className="navbar-right">
                <div className="navbar-icons">
                    <div className="input-group rounded">
                        <input
                            type="text"
                            className="searchbox"
                            value={searchValue}
                            onChange={handleChange}
                            onClick={() => handleClick("search")}
                            placeholder="Search..."
                            aria-label="Search"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}