import {useState,useEffect} from "react";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {  useCookies } from "react-cookie";
export function VideosHome(){
    const [videos,setVideos] =useState([]);
    const [cookies,setCookie,removeCookie]=useCookies();
    const navigate=useNavigate();
    useEffect(()=>{
       
        if(cookies["user-Id"]==undefined){
            navigate("/login");
        }
        else{
            axios({
                method:"get",
                url:"http://127.0.0.1:5000/videos"
            }).then(response=>{
                setVideos(response.data);
            })
            
        }
        
    },[]);
    function handleSignOut(){
        removeCookie('user-Id');
        navigate('/login');
    }
    return(
        <div>
            <h2><span>Videos Home hello!</span>{cookies['user-Id']}<button onClick={handleSignOut}className="btn btn-link">Signout</button> </h2>
            <div>
                {
                    videos.map(video=>
                        <div className="card m-2 p-2" style={{width:"400px"}}>
                            <div className="card-header">
                                <h3>{video.title}</h3>
                            </div>
                            <div className="card-body">
                                <iframe src ={video.url} width="300" height="200" title="videos"/>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        
    )
}