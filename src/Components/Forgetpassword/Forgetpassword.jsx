import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCotext } from "../../Context/ContextUser";
import { useFormik } from "formik";

export default function Forgetpassword() {

let {forgetpassword}=useContext(UserCotext)

let navigate=useNavigate()


    async function handelSubmit(values) {
        console.log(values);
        let {data}=await forgetpassword(values)
        console.log(data);
        if(data.message==='Reset code sent to your email'){
            navigate('/verfiycode')


        }
        
    
        
       
      }
    
      const formic = useFormik({
        initialValues: {
          email: "",
          
        },
        onSubmit: handelSubmit,
      });
    
      return (
        <>
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
    
             
    
              <button type="submit" className="btn btn-outline-success w-100 mt-4">
                {" "}
                get code
              </button>
            </form>
          </div>
        </>
      );
}
