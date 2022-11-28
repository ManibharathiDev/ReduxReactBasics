import { useState } from "react";
import EditPost from "./EditPost";

function TableRows(props){

    const [ePost,setEditPost] = useState([]);

    const editPost = (value) =>{
        console.log(value)
        setEditPost(value);
    }


    if(ePost.length === 0)
    {
    return(
        

            
            props.post.map(data => {
                
             return( <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.userId}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
                <td><button onClick={()=>editPost(data.id)}>View Data</button></td>
              </tr>
              )
            
          })
              
       
           
    )
    }
    else{
        return(
            <EditPost ePost={ePost}/>
        )
    }

}

export default TableRows;