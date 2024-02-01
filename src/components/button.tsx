import { useState } from "react";

export function Button(){
    const [counter, setCounter] = useState(0);

    function incremet(){
        setCounter(counter + 1)
    }

    return(
        <button className="bg-gray-300 w-16 h-8 m-20 rounded-md border border-gray-500 hover:bg-gray-400 transition duration-150 ease-in-out active:bg-gray-200" onClick={incremet}>{counter}</button>
    );
};