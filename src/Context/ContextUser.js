import axios from "axios";
import { createContext, useEffect, useState } from "react";

 export let UserCotext=createContext() 

 export default function UserCotextProvider(props){



function forgetpassword(email){

   return axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,email
   ).then((res)=>res).catch((err)=>err)

}

function checkVerifyCode(code){

    return axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,code
    ).then((res)=>res).catch((err)=>err)
 
 }

 function resetPassword(userData){
   return axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,userData).then((res)=>res).catch((err)=>err)
 
 }



 let [userToken,setuserToken]=useState(null)

 

    return <UserCotext.Provider value={{userToken,setuserToken ,forgetpassword,checkVerifyCode,resetPassword}}>
{props.children}

    </UserCotext.Provider>
  
 }