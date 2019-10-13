import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li className="brand">
                        <a href="/">SUPER-CLICK</a>
                    </li>
                    <li>Click and image to begin!</li>
                    <li>Score: 0 | Top Score: 0</li>
                </ul>
            </nav>


        </div>
    );
}

export default NavBar;
