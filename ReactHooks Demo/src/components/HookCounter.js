import React, { useState } from 'react'

function HookCounter() {


    const [count, setCount] = useState(0) //This is array destructuring
    //This hook or function(useState(0)) accepts the initial value of the current property and returns the current value of the state property and a method that is capable of updating state property
    //In useState(0) "0" is the default state value 
    //count variable will always contain the current state value and setCount will accept an arg and s+etCount value to that arg 
    return (
        <div>
            <button onClick={() => setCount(count+1)}>count {count}</button>
        </div>
    )
}

export default HookCounter
