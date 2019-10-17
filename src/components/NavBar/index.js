import React from "react";
import "./style.css";
import Counter from "../Counter/counter";

function NavBar({ score, topScore }) {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li className="brand">
                        <a href="/">SUPER-CLICK</a>
                    </li>
                    <li>Click and image to begin!</li>
                    <li><Counter score={score} topScore={topScore} /></li>
                </ul>
            </nav>


        </div >
    );
}

export default NavBar;
