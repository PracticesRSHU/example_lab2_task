import { useContext } from "react";
import { CounterContext } from "../contexts/counterContext";

const ButtonMinus = () => {
    const { decrementCounter } = useContext(CounterContext);
    return (
        <button onClick={decrementCounter}> -- </button>
    );
}

export default ButtonMinus;