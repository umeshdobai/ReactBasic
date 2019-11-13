import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post,setPost] = useState({}) //this is for fetching data
    const [id,setId] = useState(1) //This state is used for handling only from textfield
    const [idFromButtonClick,setIdFromButtonClick] = useState(1) // This is used for handling from textfield and buttonClick


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data) //Here we are setting the res data to post
        })
        .catch(error => {
            console.log(error)
        })
    },[idFromButtonClick])


    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange = {e => setId(e.target.value)} />
            <button onClick={handleClick}>Retrive</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
