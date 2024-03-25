import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
export function MainComponent(){
    const [users,setUsers]=useState([]);
    const [userEmail,setUserEmail]=useState("");
    // const [error,setError] =useState('');
    const navigate=useNavigate();
    function handleEmailChange(e){
        setUserEmail(e.target.value);

    }
    function handleStartedClick(){
        axios({
            method:'get',
            url:'http://127.0.0.1:5000/users'
        }).then(response=>{
            // console.log(response.data);
            for(var user of response.data){
                if(user.email===userEmail){
                   navigate('/login');
                   break;
                }
                else{
                    navigate('/unregister');
                    // break;
                }
            }
            setUsers(response.data);
        })
    }
    return(
        <main>
        <h1>Learn and Design</h1>
        <p>Watch Videos,Learn Technology</p>
        <div className='input-group'>
          <input placeholder="Your email address" onChange={handleEmailChange}type="email" className='form-control'/><button onClick={handleStartedClick}className='btn btn-danger btn-lg'>Get Started<span className='bi bi-chevron-right'/></button>
        </div>
      </main> 
    )

}