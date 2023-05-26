import { useState } from "react";

function App() {
    const [number, setNumber] = useState(0);
    const subtract = () => {
        setNumber(number - 1);
    };
    const reset = () => {
        setNumber(0);
    };
    const add = () => {
        setNumber(number + 1);
    };
    return (
        <div className="App">
            <h1>{number}</h1>
            <button onClick={() => subtract()}>-</button>
            <button onClick={() => reset()}>Reset</button>
            <button onClick={() => add()}>+</button>
        </div>
    );
}

export default App;
