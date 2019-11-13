import React,{useReducer} from 'react'

const initialState = 0 // This is a state
const reducer = (state, action) => {
    switch(action){
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return initialState
        default:
            return state
    }
}

function CounterThree() {

    //***********This is an example of multiple useReducer..
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <div>Count - {count}</div>
                <button onClick={() => dispatch("increment")}>Increment</button>
                <button onClick={() => dispatch("decrement")}>Decrement</button>
                <button onClick={() => dispatch("reset")}>Reset</button>
            </div>
            <div>
                <div>Count2 - {countTwo}</div>
                <button onClick={() => dispatchTwo("increment")}>Increment</button>
                <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
                <button onClick={() => dispatchTwo("reset")}>Reset</button>
            </div>
        </div>
    )
}

export default CounterThree
