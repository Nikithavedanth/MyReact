import { useState,useEffect} from "react";
import { useParams,Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, useFormik } from "formik";
export function EditVideo(){
    const [video,setVideo]=useState([{videoId:0,title:"",url:"",likes:0,dislikes:0,views:0,categoryId:0}]);
    const params=useParams();
    const [categories,setCategories]=useState([])
    const navigate=useNavigate();
    function LoadCategories(){
        axios({
            method:"get",
            url:"http://127.0.0.1:5000/categories"
        }).then((response)=>{
            response.data.unshift({categoryId:-1,categoryName:"Choose Category"})
            setCategories(response.data);
        })
    }
    useEffect(()=>{
        LoadCategories();
        axios({
            method:"get",
            url:`http://127.0.0.1:5000/videos/${params.id}`
        }).then(response=>{
            setVideo(response.data); 
        })
    },[])
    const formik= useFormik({
        initialValues:{
            videoId:video[0].videoId,
            title:video[0].title,
            url:video[0].url,
            likes:video[0].likes,
            dislikes:video[0].dislikes,
            views:video[0].views,
            categoryId:video[0].categoryId
        },
        onSubmit:(values)=>{
            axios({
                method:"put",
                url:`http://127.0.0.1:5000/updateVideo/${params.id}`,
                data:values
            })
            alert("Video Updated Successfully..");
            navigate("/admin-home")
        },
        enableReinitialize:true
    })
    return(
        <div>
            <h2>Edit Video Details</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>videoId</dt>
                    <dd><input type="number" value={formik.values.videoId} onChange={formik.handleChange} name="videoId"/></dd>
                    <dt>title</dt>
                    <dd><input type="text" value={formik.values.title}onChange={formik.handleChange}name="title"/></dd>
                    <dt>url</dt>
                    <dd><input type="text"value={formik.values.url}onChange={formik.handleChange} name="url"/></dd>
                    <dt>likes</dt>
                    <dd><input type="number"value={formik.values.likes}onChange={formik.handleChange} name="likes"/></dd>
                    <dt>dislikes</dt>
                    <dd><input type="number"value={formik.values.dislikes}onChange={formik.handleChange} name="dislikes"/></dd>
                    <dt>views</dt>
                    <dd><input type="number" value={formik.values.views} onChange={formik.handleChange}name="views"/></dd>
                    <dt>category</dt>
                    <dd>
                        <select name="categoryId" value={formik.values.categoryId} onChange={formik.handleChange}>
                            {
                                categories.map(category=>
                                    <option value={category.categoryId}key={category.categoryId}>
                                        {category.categoryName.toUpperCase()}
                                    </option>
                                )
                            }

                        </select>
                    </dd>

                </dl>
                <button className="btn btn-primary">Update Video</button>
            </form>
            <p>
                <Link to="/admin-home">Back to Home</Link>
            </p>

        </div>
    )
}