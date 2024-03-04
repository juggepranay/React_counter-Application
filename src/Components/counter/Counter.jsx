import React, { useState } from 'react';
import './Counter.css';

export default function Counter() {
    const [count, setCount] = useState(0);

    const updateCounter = (value) => {
        setCount(count + value);
    };

    const resetCounter = () => {
        setCount(0);
    };

    return (
        <div className="Counter">
            <span className="count">{count}</span>

            <div className="onegroup">
                <div><button className="plusButton" onClick={() => updateCounter(1)}>+1</button></div>
                <div><button className="plusButton" onClick={() => updateCounter(-1)}>-1</button></div>
            </div>

            <div className="fivegroup">
                <div><button className="plusButton" onClick={() => updateCounter(5)}>+5</button></div>
                <div><button className="plusButton" onClick={() => updateCounter(-5)}>-5</button></div>
            </div>

            <div className="tengroup">
                <div><button className="plusButton" onClick={() => updateCounter(10)}>+10</button></div>
                <div><button className="plusButton" onClick={() => updateCounter(-10)}>-10</button></div>
            </div>

            <div><button className="resetButton" onClick={resetCounter}>reset</button></div>
        </div>
    );
}
