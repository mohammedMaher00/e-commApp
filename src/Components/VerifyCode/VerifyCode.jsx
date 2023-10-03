import React, { useContext } from 'react'
import styles from './VerifyCode.module.css'
import { UserCotext } from '../../Context/ContextUser'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

export default function VerifyCode() {
  let navigate=useNavigate()

let {checkVerifyCode}=useContext(UserCotext)

async function handelSubmit(values){
  console.log(values);
let {data}=await checkVerifyCode(values)

console.log(data);
if(data.status==='success'){
  navigate('/resetpassword')


}

}


const formic = useFormik({
  initialValues: {
    resetCode: "",
    
  },
  onSubmit: handelSubmit,
});

return  <>
    <div className="container">


      <form onSubmit={formic.handleSubmit}>  
        <div>
          <label htmlFor="resetCode" className="form-label h5">
            resetCode:
          </label>
          <input
            className="form-control"
            type="text"
            name="resetCode"
            id="resetCode"
            value={formic.values.resetCode}
            onChange={formic.handleChange}
          />
        </div>

       

        <button type="submit" className="btn btn-outline-success w-100 mt-4">
          {" "}
         change password
        </button>
      </form>
    </div>
  </>
}
