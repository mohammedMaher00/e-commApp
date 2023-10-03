import { createContext, useState } from "react";

export let CounterContext=createContext();



export default function CounterContextProvider(props){

    let [counter,setCounter]=useState(0)

    return <CounterContext.Provider value={{counter}}>
{props.children}

    </CounterContext.Provider>
}