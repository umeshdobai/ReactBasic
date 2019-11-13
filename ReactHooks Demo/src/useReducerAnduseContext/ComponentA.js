import React,{useContext} from 'react'
import {CountContext } from '../App'

function ComponentA() {
    const CountContext = useContext(CountContext)
    return (
        <div>
            
            <button onClick={() => CountContext.countDispatch("increment")}>Increment</button>
            <button onClick={() => CountContext.countDispatch("decrement")}>Decrement</button>
            <button onClick={() => CountContext.countDispatch("reset")}>Reset</button>
        </div>
    )
}

export default ComponentA
