import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from "yup";
export function FormikValidation() 
   {
    return(
        <div className="container-fluid">
            <h3> Register User</h3>
            <Formik initialValues={{"UserName":"","Age":0,"Mobile":""}} validationSchema={yup.object({"UserName":yup.string().required("Name Required").min(4,"Name too short").max(10,"Name too Long"),"Age":yup.number().required("Age Required"),"Mobile":yup.string().required("Mobile No Required").matches(/\+91\d{10}/,"Invalid Mobile No")})} onSubmit= {(values)=>{
                alert(JSON.stringify(values))
            }}>
                {
                props=>
                <Form className={(props.isValid)?'bg-success p-3':'bg-danger p-2'}>
                    <dl>
                        <dt>UserName</dt>
                        <dd><Field type='text' name="UserName"/></dd>
                        <dd className='text-danger'><ErrorMessage name="UserName"/></dd>
                        <dt>Age</dt>
                        <dd><Field type="text" name="Age"/></dd>
                        <dd className='text-danger'><ErrorMessage name="Age"/></dd>
                        <dt>Mobile</dt>
                        <dd><Field type="text" name="Mobile"/></dd>
                        <dd className='text-danger'><ErrorMessage name="Mobile"/></dd>
                    </dl>
                    <button className='btn btn-primary' disabled={!props.isValid}>Register</button>
                    <button className='btn btn-success ms-2' style={{display:(props.dirty)?"inline":"none"}}>Save</button>
                    <p>
                        {(props.isValid)?"Valid":"Invalid"}<br/>
                        {(props.dirty)?"Modified":"Not Modified"}
                    </p>
                </Form>
                }
            </Formik>


        </div>
    )
}