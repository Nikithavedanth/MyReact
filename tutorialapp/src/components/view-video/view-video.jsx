import { useParams,Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
export function ViewVideo(){
    const params=useParams();
    const [videos,setVideos]=useState([{videoId:0, title:"",url:"",likes:0,dislikes:0,views:0,categoryId:0}]);
    useEffect(()=>{
        axios({
            method:"get",
            url:`http://127.0.0.1:5000/videos/${params.id}`
        }).then(response=>{
            setVideos(response.data); 
        })
    },[]);
    return(
        <div>
            <h2>{videos[0].title}</h2>
            
            <iframe src ={videos[0].url} width="400" height="300" title="tutorials"/>
            <p>
                <Link to="/admin-home">Back to Home</Link>
            </p> 
        </div>
    )
}