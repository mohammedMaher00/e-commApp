import React, { useContext, useState } from 'react'
import styles from './Login.module.css'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { ColorRing}from 'react-loader-spinner'
import { UserCotext } from '../../Context/ContextUser'






export default function Register() {
  let {setuserToken}=useContext(UserCotext)

let navigate=useNavigate();

const [error,seterror]=useState(null)

const [isLoading,setisLoading ]=useState(false)
async function submitLogin(values){
  setisLoading(true)
 let {data}= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values).catch((err)=>{
  setisLoading(false)
  seterror(err.response.data.message)

 })
if(data.message==="success"){
  setisLoading(false)
localStorage.setItem('userToken', data.token)
setuserToken(data.token)


navigate('/')
}
}


let validteSchema=Yup.object({
 
  email:Yup.string().email('email is invalid').required('required field'),
 
  password:Yup.string().matches(/[A-z][A-Za-z0-9]{5,10}/,'password is not valid').required('required field'),
  

})



let formic=useFormik({
  initialValues:{

email:'',
password:'',


  }, validationSchema:validteSchema,
  onSubmit:submitLogin

})


  return <>
  
 <div className='container mx-auto py-5'>
  <h2 className='mb-4'>Login Now</h2>
<form onSubmit={formic.handleSubmit}>


<label htmlFor="email"> Email:</label>
  <input id='email' name='email' value={formic.values.email} onChange={formic.handleChange}
  onBlur={formic.handleBlur} type="email" className='form-control mb-2'/>
  {formic.errors.email &&formic.touched.email? <div className="alert alert-danger p-2 mt-2">{formic.errors.email}</div>:''}
<label htmlFor="password">Password:</label>
  <input id='password' name='password' value={formic.values.password} onChange={formic.handleChange}
  onBlur={formic.handleBlur} type="password" className='form-control mb-2'/>
    {formic.errors.password &&formic.touched.password? <div className="alert alert-danger p-2 mt-2">{formic.errors.password}</div>:''}
  
  {error !==null?<div className="alert alert-danger p-2 mt-2">{error}</div>:'' }

  {isLoading?(<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>):(<div className='d-flex align-items-center'>
  <button disabled={!(formic.isValid&&formic.dirty)} type='submit' className='btn btn-success text-white mt-2'>Login</button>
 
<Link className='btn   align-items-center  ' to='/register'>You dont have account? <span className='text-success'>Register Now</span></Link>

<Link to={'/forgetpassword'} className='ms-auto '>Forget Password?..</Link>


</div>
)}
  
 




</form>
 </div>

  
  </>
}
