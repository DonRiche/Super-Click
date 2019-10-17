import React from "react";
import "./style.css";




// By extending the React.Component class, Counter inherits functionality from it
function Counter({ score, topScore }) {
    return (
        <div>
            <p className="score">Score: {score} |</p>
            <p className="topScore"> Top Score: {topScore}</p>

        </div>
    );
}


export default Counter;
