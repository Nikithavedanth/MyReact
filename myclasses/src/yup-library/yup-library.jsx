import * as yup from "yup";
import { useFormik } from "formik";
export function YupLibrary(){
const formik =useFormik({
    initialValues:{"UserName":'',"Age":0,"Mobile":'',"City":""},
    validationSchema:yup.object({
        "UserName":yup.string().required("Name Required").min(4,"Name too short"),
        "Age":yup.number().required("Age Required"),
        "Mobile":yup.string().matches(/\+91\d{10}/,"Invalid Mobile").required("Mobile Required")
    }),
    onSubmit:(values)=>{
        alert(JSON.stringify(values));
    }


})
return(
    <div className="container-fluid">
        <h2>Register User</h2>
        <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>UserName</dt>
                <dd><input {...formik.getFieldProps("UserName")}type="text" name="UserName" /></dd>
                <dd className="text-danger">{formik.errors.UserName}</dd>
                <dt>Age</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Age" onBlur={formik.handleBlur}/></dd>
                <dd className="text-danger">{formik.errors.Age}</dd>
                <dt>Mobile</dt>
                <dd><input type="text"onChange={formik.handleChange} name="Mobile" onBlur={formik.handleBlur}/></dd>
                <dd className="text-danger">{formik.errors.Mobile}</dd>
                <dt>City</dt>
                <dd>
                    <select onChange={formik.handleChange} name="City" onBlur={formik.handleBlur} >
                        <option value="-1">Choose City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyderabad">Hyderabad</option>
                    </select>
                </dd>
                <dd className="text-danger">{formik.errors.City}</dd>
            </dl>
            <button className="btn btn-primary">Register</button>
        </form>

    </div>
)
}