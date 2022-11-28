import { useState } from "react";
import axios from "axios";

const EditPost=(props)=>{

    const[myPost,setMyPost] = useState([]);
    let baseURL = "https://jsonplaceholder.typicode.com/posts";
    baseURL = baseURL+"/"+props.ePost;
    const getMyData = ()=>{  
        axios.get(baseURL).then((response)=>{
            setMyPost(response.data)
        })
      }

      

    getMyData()  

    if(myPost !== [])
    {
        return(
            <table>
                <tr><td>Id</td><td>{myPost.id}</td></tr>
                <tr><td>User Id</td><td>{myPost.userId}</td></tr>
                <tr><td>Title</td><td>{myPost.title}</td></tr>
                <tr><td>Body</td><td>{myPost.body}</td></tr>
            </table>
        )
    }  
    else{
    return(
        <>
            <div>
                
            </div>
        </>
    )
}
}

export default EditPost;