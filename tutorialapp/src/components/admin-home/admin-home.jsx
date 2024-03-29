import { useState,useEffect } from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import {  useCookies } from "react-cookie";
export function AdminHome(){
    const [videos,setVideos]=useState([]);
    const [cookies,setCookie,removeCookie]=useCookies();
    const navigate=useNavigate();
    function LoadVideos(){
        axios({
            method:"get",
            url:'http://127.0.0.1:5000/videos'
        }).then(response=>{
            setVideos(response.data);
        })
    }
    useEffect(()=>{
        if(cookies["user-Id"]==undefined){
            navigate("/admin-login");
        }else{
        LoadVideos();
        }
    },[])
    function handleSignout(){
        removeCookie('user-Id');
        navigate("/admin-login");
    }
    return(
        <div>
           <h2 className="d-flex justify-content-between"><span>Admin Home-Hello!</span> {cookies['user-Id']}<button onClick ={handleSignout}className="btn btn-link"> Sign Out</button> </h2> 
          <div className="mb-4">
            <Link to="/add-video"className="btn btn-success">Add New Video</Link>
            
          </div>
          <table className="table table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Preview</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    videos.map(video=>
                        <tr key={video.videoId}>
                            <td>{video.title}</td>
                            <td>
                                <iframe width="100" height="100" src={video.url} title="hello"/>
                            </td>
                            <td>
                                <Link to={`/view-video/${video.videoId}`}className="btn btn-primary me-2"><span className="bi bi-eye"></span></Link>
                                <Link to ={`/edit-video/${video.videoId}`}className="btn btn-warning me-2"><span className="bi bi-pen"></span></Link>
                                <Link to ={`/delete-video/${video.videoId}`} className="btn btn-danger"><span className="bi bi-trash-fill"></span></Link>
                            </td>
                        </tr>
                    )
                }
            </tbody>
          </table>
        </div>
    )
}