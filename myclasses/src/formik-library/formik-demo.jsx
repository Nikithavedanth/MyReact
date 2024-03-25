import { useFormik } from "formik"

export function FormikExample(){
    const formik=useFormik({
        initialValues:{
            "UserName":"",
            "Age":0,
            "Mobile":"",
            "City":""
        },
        onSubmit:values=>{
            alert(JSON.stringify(values))
        }
    })
    return(
        <div>
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserName</dt>
                    <dd><input onChange ={formik.handleChange}type="text" name="userName"/></dd>
                    <dt>Age</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Age"/></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text"onChange={formik.handleChange} name="Mobile"/></dd>
                   
                    <dt>City</dt>
                    <dd>
                        <select onChange={formik.handleChange} name="City">
                            <option value="-1">Choose City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </select>
                    </dd>
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}