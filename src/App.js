import { useState } from "react";
import Compteur from "./components/Compteur";

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
            <Compteur
                number={number}
                subtract={subtract}
                reset={reset}
                add={add}
            />
        </div>
    );
}

export default App;
