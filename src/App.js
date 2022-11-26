import React from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumer, decNumber } from './actions';

function App() {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
        {myState}

    <button onClick={()=>dispatch(incNumer(2))}>Increment</button>   
    <button onClick={()=>dispatch(decNumber(2))}>Decrement</button>     
    </div>
  );
}

export default App;
