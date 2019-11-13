import React, {useState,useEffect} from 'react'

function HookMouse() {

    const [x,setx]=useState(0)
    const [y,sety]=useState(0)

    const logMousePosition = e =>{
        console.log("Mouse event")
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect called")
        window.addEventListener("mousemove",logMousePosition)

        return () => {
            console.log("component unmounting code")
            window.removeEventListener("mousemove",logMousePosition)
        }//********** This is the clean up code for removing eventListener
        //******* The clean up code can be cancelling subscription, timers,removing eventListeners etc

    },[]) //*****************React will render the component only once and then it will forget......
    return(
        <div>
            Hooks x - {x} Y - {y}
        </div>
    )
}

export default HookMouse
