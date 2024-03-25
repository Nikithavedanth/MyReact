import { Link ,useNavigate} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
  export function Register(){
    const [userError,setUserError] = useState('');
    const [errorClass,setErrorClass]=useState('');
    const [user,setUser]=useState({userId:"",userName:"",password:"",email:"",mobile:""})
    const navigate=useNavigate();
    function handleIdChange(e){
        setUser({
            userId:e.target.value,
            userName:user.userName,
            password:user.password,
            email:user.email,
            mobile:user.mobile
        })
        axios({
            method:'get',
            url:'http://127.0.0.1:5000/users'
        }).then(response=>{
            for(var user of response.data){
                if(user.userId===e.target.value){
                    setUserError('UserId Taken-Try Another');
                    setErrorClass('text-danger');
                    break;
                }
                else{
                    setUserError("UserId Available");
                    setErrorClass('text-success');
                }
            }
        })

    }
    function  handleNameChange(e){
        setUser({
            userId:user.userId,
            userName:e.target.value,
            password:user.password,
            email:user.email,
            mobile:user.mobile
        })

    }
    function  handlePasswordChange(e){
        setUser({
            userId:user.userId,
            userName:user.userName,
            password:e.target.value,
            email:user.email,
            mobile:user.mobile
        })

    }
    function  handleEmailChange(e){
        setUser({
            userId:user.userId,
            userName:user.userName,
            password:user.password,
            email:e.target.value,
            mobile:user.mobile
        })

    }
    function  handleMobileChange(e){
        setUser({
            userId:user.userId,
            userName:user.userName,
            password:user.password,
            email:user.email,
            mobile:e.target.value
        })

    }
    function handleSubmit(){
        axios({
            method:'post',
            url:"http://127.0.0.1:5000/registerUser",
            data:user
        })
        alert("Register Successfully");
        navigate('/login');
    }
    return(
        <div>
            <h2><span className="bi bi-person-fill"></span>Register user</h2>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input onChange={handleIdChange} type="text"/></dd>
                    <dd className={errorClass}>{userError}</dd>
                    <dt>UserName</dt>
                    <dd><input onChange={handleNameChange} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input onChange={handlePasswordChange} type="password"/></dd>
                    <dt>Email</dt>
                    <dd><input onChange={handleEmailChange} type="email"/></dd>
                    <dt>Mobile</dt>
                    <dd><input onChange={handleMobileChange} type="text"/></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
                <p>Existing User?<Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}