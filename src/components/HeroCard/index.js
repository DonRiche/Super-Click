import React from "react";
import "./style.css";

function HeroCard({ hero, handleIncrement }) {
    return (
        <div className="card" id={hero.id} onClick={handleIncrement} >
            <div className="img-container">
                <img alt={hero.name} src={hero.image} />
            </div>
        </div>
    );
}

export default HeroCard;
