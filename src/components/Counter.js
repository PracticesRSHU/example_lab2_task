import { useState } from "react";

const Counter = () => {
    let [value,setValue]=useState(0);
    let plusBtn=()=>{
        value++;
        setValue(value);
    }
    let minusBtn=()=>{
        value--;
        setValue(value);
    }
    return (
        <>
        <h5>Counter</h5>
            <button onClick={plusBtn}>+</button>
            <span style={{fontSize:"2rem"}}>{value}</span>
            <button onClick={minusBtn}>-</button>
        </>
    );
}
export default Counter;