import { useState } from "react"

export function ReactFormDemo(){
    const [userDetails,setUserDetails]=useState({userName:'',age:0,mobile:'',city:''});
    const [error,setError]= useState({userName:'',age:"",mobile:'',city:''});
    function handleSubmit(e){
        e.preventDefault();
        if(userDetails.userName===""){
            setError({
                userName:"UserName Required Please Enter",
                age:error.age,
                mobile:error.mobile,
                city:error.city
             })
    }
       else if(userDetails.age===0){
            setError({
                userName:error.userName,
                age:"enter Valid Age",
                mobile:error.mobile,
                city:error.city

            })
    } 
       else if(userDetails.mobile===""){
            setError({
                userName:error.userName,
                age:error.age,
                mobile:'Enter a valid mobile number',
                city:error.city

            })
    }
        else if(userDetails.city===""){
            setError({
                userName:error.userName,
                age:error.age,
                mobile:error.mobile,
                city:'select a city'

            })
    }
}
    function handleAge(e){
            setUserDetails({
                userName:userDetails.userName,
                age:parseInt(e.target.value),
                mobile:userDetails.mobile,
                city:userDetails.city
            })
        

    }
    
    function handleCity(e){
            setUserDetails({
                userName:userDetails.userName,
                age:userDetails.age,
                mobile:userDetails.mobile,
                city:e.target.value
            })
        

    }
    function handleMobile(e){
    
            setUserDetails({
                userName:userDetails.userName,
                age:userDetails.age,
                mobile:e.target.value,
                city:userDetails.city
            })
        

    }
    function handleUserName(e){
        setUserDetails({
            userName:e.target.value,
            age:userDetails.age,
            mobile:userDetails.mobile,
            city:userDetails.city
        })
    }
    function verifyUserName(e){
        if(userDetails.userName===""){
            setError({
                userName:'UserName required',
                age:"",
                mobile:'',
                city:''
            })
        }else{
            if(userDetails.userName.length<8){
                setError({
                    userName:'Name too short min 7 characters',
                    age:'',
                    mobile:'',
                    city:''
                })
            }else{
                setError({
                    userName:'',
                    age:'',
                    mobile:'',
                    city:''
                })
            }
            // setError({
            //     userName:'',
            //     age:"",
            //     mobile:'',
            //     city:''
            // })
        }

    }
    function verifyAge(e){
        if(userDetails.age ==="" && isNaN(userDetails.age)){
            setError({
                userName:'',
                age:"age required and age must be a no",
                mobile:'',
                city:''
            })
        }else{
            setError({
                userName:"",
                age:'',
                mobile:'',
                city:''
            })
        }

    }
    // if(isNaN(userDetails.age)){
    //     setError({
    //         userName:error.userName,
    //         age:"Age must be a no",
    //         mobile:error.mobile,
    //         city:error.city
    //     })
    // }
    // else{
    //     setError({
    //         userName:error.userName,
    //         age:'',
    //         mobile:error.mobile,
    //         city:error.city
    //     })
    // }
    function verifyMobile(e){
        if(userDetails.mobile===""){
            setError({
                userName:'',
                age:"",
                mobile:'Invalid phone number',
                city:''
            })
        }else{
            setError({
                userName:"",
                age:"",
                mobile:'',
                city:''
            })
        }

    }
    function verifyCity(e){
        if(userDetails.city==="" && userDetails.city==="-1"){
            setError({
                userName:'',
                age:"",
                mobile:'',
                city:'please select your city'
            })
        }else{
            setError({
                userName:"",
                age:"",
                mobile:'',
                city:''
            })
        }

    }
    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <h3>Register User</h3>
                <dl>
                    <dt>UserName</dt>
                    <dd><input onKeyUp={verifyUserName} onChange={handleUserName} type="text"/></dd>
                    <dd>{error.userName}</dd>
                    <dt>Age</dt>
                    <dd><input  onKeyUp={verifyAge} onChange={handleAge}type="number"></input></dd>
                    <dd>{error.age}</dd>
                    <dt>Mobile</dt>
                    <dd><input  onKeyUp={verifyMobile} type="text" onChange={handleMobile}/></dd>
                    <dd>{error.mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select  onKeyUp={verifyCity} onChange={handleCity}>
                           <option value="-1">Choose City</option>
                           <option value="Delhi">Delhi</option>
                           <option value="Hyderabad">Hyderabad</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{error.city}</dd>
                   
                </dl>
                <button className="btn btn-primary">Register</button>

            </form>

        </div>
    )
}