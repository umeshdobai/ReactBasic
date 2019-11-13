import React, { useState} from 'react'

function Hookcounter2() {
    const initialCount=0
    const [count,setCount]=useState(initialCount)

    const incrementFive = () =>{
        for(let i=0; i<5;i++)
            setCount(prevcount => prevcount+1)
    }
    return (
        <div>
            Count: {count} &nbsp;         
            <button onClick ={() => setCount(initialCount)}>Reset</button> &nbsp;
            <button onClick ={()=> setCount(prevcount => prevcount+1)}>Increment</button> &nbsp;
            <button onClick ={()=> setCount(prevcount => prevcount-1)}>Decremement</button> &nbsp;
            <button onClick ={incrementFive}>Increment5</button>
        </div>
    )
}

export default Hookcounter2
