import React, { useContext, useEffect } from 'react'
import styles from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { UserCotext } from '../../Context/ContextUser'


export default function Layout() {
let {setuserToken}=useContext(UserCotext)
useEffect(()=>{
if(localStorage.getItem('userToken')!==null){
  setuserToken(localStorage.getItem('userToken'))
}

},[])





  return <>

<Navbar/>


<Outlet></Outlet>


  
  
  
  </>
}
