import React from "react";

export type CounterDataContextType = {
    count: number,
    setCount: (value: number) => void
}

export const defaultCounterData = {
    count: 0,
    setCount: (newValue: number) => {

    }
}

export const CounterDataContext = React.createContext<CounterDataContextType>(defaultCounterData);