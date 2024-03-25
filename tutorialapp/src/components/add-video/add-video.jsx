import { Link, useNavigate } from "react-router-dom";
import {  useFormik } from "formik";
import axios from "axios";
import { useState,useEffect } from "react";
export function AddVideo(){
        const [categories,setCategories]=useState([]);
        const navigate=useNavigate();
        useEffect(()=>{
            axios({
                method:"get",
                url:"http://127.0.0.1:5000/categories"
            }).then((response)=>{
                response.data.unshift({categoryId:-1,categoryName:"Choose Category"})
                setCategories(response.data);
            })
        },[])
        const formik=useFormik({
            initialValues:{
                videoId:0,
                title:"",
                url:"",
                likes:0,
                dislikes:0,
                views:0,
                categoryId:0
            },
            onSubmit:(values)=>{
                axios({
                    method:"post",
                    url:"http://127.0.0.1:5000/addVideos",
                    data:values
                })
                alert('Video Added Successfully..');
                navigate("/admin-home");
                
            }
        })
        return(
        <div>
            <h3> Add New Videos</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>videoId</dt>
                    <dd><input type="number"onChange={formik.handleChange} name="videoId"/></dd>
                    <dt>title</dt>
                    <dd><input type="text" onChange={formik.handleChange}name="title"/></dd>
                    <dt>url</dt>
                    <dd><input type="text"onChange={formik.handleChange} name="url"/></dd>
                    <dt>likes</dt>
                    <dd><input type="number"onChange={formik.handleChange} name="likes"/></dd>
                    <dt>dislikes</dt>
                    <dd><input type="number"onChange={formik.handleChange} name="dislikes"/></dd>
                    <dt>views</dt>
                    <dd><input type="number" onChange={formik.handleChange}name="views"/></dd>
                    <dt>category</dt>
                    <dd>
                        <select name="categoryId" onChange={formik.handleChange}>
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
                <button className="btn btn-primary">Add Video</button>
            </form>
            <p>
                <Link to="/admin-home">Back to Home</Link>
            </p>
        </div>
    )
}