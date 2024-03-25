import { useParams,Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
export function DeleteVideo(){
    const params=useParams();
    const [videos,setVideos]=useState([{videoId:0, title:"",url:"",likes:0,dislikes:0,views:0,categoryId:0}]);
    const navigate= useNavigate();
    useEffect(()=>{
        axios({
            method:"get",
            url:`http://127.0.0.1:5000/videos/${params.id}`
        }).then(response=>{
            setVideos(response.data); 
        })
    },[]);
    function handleDeleteClick(){
        axios({
            method:"delete",
            url:`http://127.0.0.1:5000/deleteVideo/${params.id}`
        })
        alert("Video Deleted");
        navigate("/admin-home");
    }
    return(
        <div>
            <h1> Deleting {videos[0].title} Video are you sure?</h1>
            <h2></h2>
            
            <iframe src ={videos[0].url} width="400" height="300" title="tutorials"/>
            <p>
                <button onClick={handleDeleteClick} className="btn btn-danger">Yes</button> <Link to="/admin-home" className="btn btn-warning">Cancel</Link>
            </p> 
        </div>
    )
}