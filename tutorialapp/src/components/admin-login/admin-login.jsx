import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

export function AdminLogin(){
    const [user,setUser]=useState({userId:"",password:""});
    const [error,setError]=useState("");
    const navigate=useNavigate();
    const [cookies,setCookie,removeCookie]=useCookies(['user-Id'])

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
            url:"http://127.0.0.1:5000/admin"
        }).then(response=>{
            for(var vuser of response.data){
                if(vuser.userId===user.userId && vuser.password===user.password){
                    setCookie("user-Id",user.userId)
                    navigate("/admin-home");
                    break;
                }
                else{
                    setError("Invalid Credentials");
                }
            }
        })
    }
    return(
        <div>
            <h3><span className="bi bi-person-fill"></span>Admin Login</h3>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>Admin Id</dt>
                    <dd><input onChange={handleIdChange} type="text" className="form-control"/></dd>
                    <dt>Password</dt>
                    <dd><input onChange={handlePasswordChange} type="text" className="form-control"/></dd>
                </dl>
                <button className="btn btn-primary">Login</button>
                <h3 className="text-danger">{error}</h3>
            </form>
        </div>
    )
}