import React from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumer, decNumber,login,logout } from './actions';
import axios from 'axios';
import TableRows from './TableRows';

function App() {
  const myState = useSelector((state)=>state.changeTheNumber);
  const loginState = useSelector((state)=>state.LoginLogout);
  const dispatch = useDispatch();

  const baseURL = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = React.useState([]);


  const getMyData = ()=>{  
      axios.get(baseURL).then((response)=>{
        
          setPost(response.data)
      })
    }

  if(String(loginState) === "true")
 {
    return(
      <>
        <h1>You are successfully Logged In</h1>
        <button onClick={()=>dispatch(logout())}>Logout</button>
      </>
    )
 }
  return (
    <div className="App">
        {myState}
        <h1>Login State : {String(loginState)}</h1>
        <div>
          <table border={1}>
            <thead>
              <tr><td>ID</td>
              <td>User ID</td>
              <td>Title</td>
             <td>Body</td>
             <td>Action</td>
             </tr>
            </thead>
            <tbody>
              <TableRows post={post}/>
            </tbody>
          </table>
        </div>

    <button onClick={()=>dispatch(incNumer(2))}>Increment</button>   
    <button onClick={()=>dispatch(decNumber(2))}>Decrement</button>    
    <button onClick={()=>getMyData()}>Get Data</button> 
    <button onClick={()=>dispatch(login())}>Login</button>
    
    </div>
  );
}

export default App;
