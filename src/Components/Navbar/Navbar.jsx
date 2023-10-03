import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/freshcart-logo.svg'

import { UserCotext } from '../../Context/ContextUser'
import { CartContext } from '../../Context/ContextCart'



export default function Navbar() {


let {userToken,setuserToken}=useContext(UserCotext)
let {numOfCartItem}=useContext(CartContext)
let navigate=useNavigate()
function logOut(){
  localStorage.removeItem('userToken');
  setuserToken(null)
  navigate('/login')
}



 

  


  return <>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-5   mb-lg-0">
{userToken!==null?<>
<li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/wishlist">Wish List</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/brands">Brands</Link>
        </li>
</>:''}


        
        
        
       
      </ul>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

      <li className="nav-item d-flex align-items-center gap-3 me-4">
          <i className='fab fa-facebook '></i>
          <i className='fab fa-twitter '></i>
          <i className='fab fa-tiktok '></i>
        
          <i className='fab fa-linkedin '></i>
          <i className='fab fa-youtube '></i>

          {userToken !==null?  <span className='position-relative'>


            <Link to={'/cart'}>
            <div className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-main'>{numOfCartItem}</div>
            <i className="fa-solid fa-cart-shopping"></i>
            
            </Link>



          </span>  :''}
          
        </li>

{userToken !==null?<>

  <li className="nav-item">
    
          <span onClick={()=>logOut()} className="nav-link text-black cursor-pointer btn btn-outline-danger" aria-current="page" >LogOut</span>
        </li></>:<>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
        </li>
        </> }


       
        
     
        
       
      </ul>

     
    
    </div>
  </div>
</nav>
  
  
  
  </>
}
