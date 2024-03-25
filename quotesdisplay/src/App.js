
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [obj,setObj]=useState({"id":0,"advice":''})
  useEffect(()=>{
    // console.log('component will mount');
    fetchAdvice();
    
  },[])
  function fetchAdvice(){
    axios.get('https://api.adviceslip.com/advice').then((response)=>{
     setObj(response.data.slip);
    console.log(response.data);
    })}
  return (
    <div className='app'>
      <div className='card'>

   
     {/* <h1>
      {obj.id}
     </h1> */}
     <h1 className='heading'>
      {obj.advice}
      </h1>
      <button onClick={fetchAdvice} className="button">
        <span>Give Me a free advice!</span>
      </button>
    </div>
    </div>
  );
}

export default App;
