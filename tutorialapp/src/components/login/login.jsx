import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

export function Login(){
    const [user,setUser]=useState({userId:"",password:""});
    const [error,setError]=useState("");
    const navigate=useNavigate();
    const [Cookies,setCookie,removeCookie]=useCookies(['user-Id']);

    function handleIdChange(e){
        setUser({
            userId:e.target.value,
            password:user.password
        })

    }
    function handlePasswordChange(e){
        setUser({
            userId:user.userId,
            password:e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        axios({
            method:"get",
            url:"http://127.0.0.1:5000/users"
        }).then(response=>{
            for(var vuser of response.data){
                if(vuser.userId===user.userId && vuser.password===user.password){
                    setCookie('user-Id',user.userId)
                    navigate("/videos");
                    break;
                }
                else{
                    setError("Invalid Credentials");
                }
            }
        })
    }
    return(<div>
        <h2><span className="bi bi-person-fill"></span>User Login</h2>
        <form onSubmit={handleSubmit}>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onChange={handleIdChange} className="form-control"/></dd>
                <dt>Password</dt>
                <dd><input type="password"onChange={handlePasswordChange} className="form-control"></input></dd>
            </dl>
            <button className="btn btn-primary me-2">Login</button>
            <Link to="/register">New User? Register</Link>
            <h4 className="text-danger">{error}</h4>
        </form>
    </div>)
}