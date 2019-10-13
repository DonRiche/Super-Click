import React from "react";
import "./style.css";

function HeroCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">

            </div>
            <span onClick={() => props.removeHero(props.id)} className="remove">
                𝘅
      </span>
        </div>
    );
}

export default HeroCard;
