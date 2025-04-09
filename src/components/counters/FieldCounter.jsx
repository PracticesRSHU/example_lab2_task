import { useContext } from "react";
import { CounterContext } from "../contexts/counterContext";
const FieldCounter = () => {
    const data = useContext(CounterContext);
    console.log(data);
    return (
        <div className="feiald">
            Counter: {data.count}
        </div>
    );
}

export default FieldCounter;