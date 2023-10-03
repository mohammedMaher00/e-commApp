import React, { useContext, useEffect, useState } from 'react'
import styles from './Cart.module.css'
import { CartContext } from '../../Context/ContextCart'
import { BallTriangle } from 'react-loader-spinner'
import emptyCart from "../../assets/images/emptyCart.png"
import { Link } from 'react-router-dom'



export default function Cart() {

const {getLoggedUserCart ,removeProdouct,updateProductQuantity,clearUserCart,setnumOfCartItem}=useContext(CartContext)
let [cartDetails,setcartDetails] =useState(null)

async function getCart(){

  const {data}= await getLoggedUserCart()

    setcartDetails(data)
  

  

}


useEffect(()=>{
  
  getCart()

  

},[])


async function removeItem(id){

  let {data}=await removeProdouct(id)
  setcartDetails(data)
  setnumOfCartItem(data.numOfCartItems)


}

async function updateCount(id , count){
  let {data}=await updateProductQuantity(id , count)
  setcartDetails(data)
}


async function clearCart(){
  let {data}=clearUserCart()
  setnumOfCartItem(data.numOfCartItems)
  setcartDetails(data)
  


}





  return <div className="container bg-main-light p-3 my-3">



{cartDetails?.numOfCartItems>0? <div className="">
<div className='d-flex justify-content-between mb-5'>
<h3 className='fs-2 fw-bolder'>Cart Shopping</h3>
<Link to={'/checkout'}><button className=' btn btn-primary'>Check out</button></Link>
</div>
<div className='d-flex justify-content-between mb-5 '>
<h4 className='h5 fw-bold'>Total number of items: <span className='text-main'>{cartDetails.numOfCartItems}</span></h4>
  <h4 className='h5 fw-bold'>Total Price: <span className='text-main'> {cartDetails.data.totalCartPrice}</span> EGP </h4>
  
</div>
{cartDetails.data.products.map((product)=> <div key={product.product._id} className="row p-3 border-bottom ">
<div className="col-md-2">
  <img className='w-100' src={product.product.imageCover}  alt="" />
</div>
<div className="col-md-10">
<div className='d-flex justify-content-between align-items-center '>

  <div className='  mt-5'>
  <h5>{product.product.title.split(" ").slice(0,3).join(' ')}</h5>
    <h6 className='fw-bold'>{product.price} EPG</h6>
    <span onClick={()=>removeItem(product.product.id)} className='text-danger cursor-pointer'><i className="fa-solid fa-trash"></i> Remove</span>
  </div>
<div className='mt-5'>
<button onClick={()=>updateCount(product.product.id,product.count+1)} className='btn btn-outline-success me-2'>+</button>
<span className='me-2'>{product.count}</span>
<button onClick={()=>updateCount(product.product.id,product.count-1)} className='btn btn-outline-success'>-</button>

</div>



</div>

</div>

  </div> )}
<div className='d-flex justify-content-center'>
<button  className='btn btn-outline-success  mt-3 '>Clear Your Cart</button>
</div>

</div>: <div className='d-flex flex-column justify-content-center align-items-center'>
<img className='w-50' src={emptyCart} alt="emptyCart" />
<Link to={'/'}><button className='btn btn-outline-success mt-3'> Go Shopping</button></Link>
</div> }










  </div>
}
