import React, { useContext } from 'react'
import styles from './ResetPassword.module.css'
import { useFormik } from 'formik';
import { UserCotext } from '../../Context/ContextUser';
import { useNavigate } from 'react-router-dom';


export default function ResetPassword() {
  let navigate=useNavigate()
let {resetPassword}=useContext(UserCotext)


  async function handelSubmit(values) {
    console.log(values);

    
    let {data}=await resetPassword(values)
    console.log(data);
    if(localStorage.getItem('userToken')===data.token){
        navigate('/login')

    }
  }


    const formic = useFormik({
      initialValues: {
        email: "",
        newPassword:''
        
      },
      onSubmit: handelSubmit,
    });
  
    return <>
        <div className="container">
         
  
          <form onSubmit={formic.handleSubmit}>  
            <div>
              <label htmlFor="email" className="form-label h5">
                email:
              </label>
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                value={formic.values.email}
                onChange={formic.handleChange}
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="form-label h5">
                newPassword:
              </label>
              <input
                className="form-control"
                type="text"
                name="newPassword"
                id="newPassword"
                value={formic.values.newPassword}
                onChange={formic.handleChange}
              />
            </div>
  
           
  
            <button type="submit" className="btn btn-outline-success w-100 mt-4">
              
             Reset Password
            </button>
          </form>
        </div>
      </>
   
  
    

    
   
  

}
