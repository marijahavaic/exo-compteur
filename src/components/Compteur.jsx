import React from "react";

const Compteur = ({ number, subtract, reset, add }) => {
    return (
        <div className="Compteur">
            <h1>{number}</h1>
            <button onClick={() => subtract()}>-</button>
            <button onClick={() => reset()}>Reset</button>
            <button onClick={() => add()}>+</button>
        </div>
    );
};

export default Compteur;
