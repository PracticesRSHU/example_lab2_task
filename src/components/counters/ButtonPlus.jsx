import { useContext } from "react";
import { CounterContext } from "../contexts/counterContext";

const ButtonPlus = () => {
    const { incrementCounter } = useContext(CounterContext);
    return (
        <button onClick={incrementCounter}> ++ </button>
    );
}

export default ButtonPlus;