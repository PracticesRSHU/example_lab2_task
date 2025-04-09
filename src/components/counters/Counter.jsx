import { useContext } from "react";
import ButtonMinus from "./ButtonMinus";
import ButtonPlus from "./ButtonPlus";
import FieldCounter from "./FieldCounter";

const Counter=()=>{
    return(
        <div className="counter">
            <ButtonMinus />
            <FieldCounter/>
            <ButtonPlus/>
        </div>
    );
}

export default Counter;