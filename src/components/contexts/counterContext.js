import { createContext, useState } from "react";

// variant 1
// export const CounterContext=createContext();
export const CounterContext = createContext(
    {
        count: 0,
        decrementCounter: () => null,
        incrementCounter: () => null,
        resetCounter: () => null
    }
);

const CounterProvider = (props) => {
    const [count, setCount] = useState(0);
    const decrementCounter = () => {

        count >= 1 && setCount(count - 1);
    }

    const incrementCounter = () => {
        count < 20 && setCount(count + 1);
    }
    const resetCounter = () => setCount(0);
    const values = { count, decrementCounter, incrementCounter, resetCounter }

    return (<CounterContext.Provider value={values}>
        {props.children}
    </CounterContext.Provider>);


}

export default CounterProvider;

