import React,{useState,useEffect} from 'react'

function HookCounterOne() {
    const [count,setCount]=useState(0)

    const[name,setName] = useState("")


    //**************useEffect() hooks runs after every render of the component............
    //this method will combine componentDidMount and componentDidUpdate method 
    //Exapmple of conditionally run an effect hooks..................
    useEffect(() => {
        console.log("useEffect updating document title")
        document.title=`you clicked ${count} times`
    },[count])//*************In order to conditionally run an effect we have to specify the state or props in second parameter of the useEffect hooks

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
         </div>
    )
}

export default HookCounterOne
