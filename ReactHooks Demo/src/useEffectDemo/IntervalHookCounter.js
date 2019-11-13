import React,{useState,useEffect} from 'react'

function IntervalHookCounter() {
    const [count,setCount] = useState(0)



    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }


    useEffect(() => {
    //*********** Whenever we used to call a function in useEffect it is recommended that the function you should define the function inside also
    // function doSomething(){
    //     console.log(someProp)
    // }
    //     doSomething()


    //If we want to use multitple effects then we should use multiple useEffect for everyone
        const interval = setInterval(tick, 1000)
        return () =>{
            clearInterval(interval)
        }
    },[])
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
