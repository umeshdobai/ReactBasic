//*****************Data fetching using useState and useEffect from API endpoint.................
import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DatafetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [post, setPost] = useState({})
    useEffect (() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res => {
            setLoading(false)
            //console.log(res)
            setPost(res.data)
            setError("")
        })
        .catch(error =>{
            setLoading(false)
            setPost({})
            setError("Something went wrong")
        })
    },[])
    return (
        <div>
            { loading ? "loading please wait" : post.title }
            { error  ? error : null }
        </div>
    )
}

export default DatafetchingOne
