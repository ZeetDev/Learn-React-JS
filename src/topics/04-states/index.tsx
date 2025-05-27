/*
    ?? in react when state change react re-render the component
    ?? if parent component re-render then child component also re-render
    ?? if child component re-render then parent component not re-render
*/

import { useState } from "react";

function States() {
    const [counter, setCounter] = useState<number>(0);
    const [name] = useState<string>("hello");

    return (
        <div>
            <span>{name}</span>
            <button type="button" onClick={() => setCounter(counter + 1)}>
                Increment
            </button>
            {counter}
        </div>
    );
}

export default States;
