import React, { useContext, useEffect, useState } from 'react'
import styles from './Wishlist.module.css'
import { WishListContext } from '../../Context/WishListContext'
import { CartContext } from '../../Context/ContextCart'
import { toast } from 'react-hot-toast'



export default function Wishlist() {

let {getLoggedUserWishlist,removeProductFromWishlist}=useContext(WishListContext)
let{addToCart,setnumOfCartItem,getCartData}=useContext(CartContext)

let [wishlistDetails,setWishlistDetails]=useState(null)

async function getWhishlist(){
let {data}=await getLoggedUserWishlist();
console.log(data.data);
setWishlistDetails(data.data)

}




async function removeProduct(id){
let {data}= await removeProductFromWishlist(id)
getWhishlist()

}



async function addProduct(id){
let {data}= await addToCart(id)

removeProduct(id)
setnumOfCartItem(data.numOfCartItems)
if(data.status==='success'){
  toast.success('Product succesfully added ')
  
  setnumOfCartItem(data.numOfCartItems)
  
   }else{
    toast.error('cant add product')
  
   }



}







useEffect(()=>{
  getWhishlist()

},[])


  return <>
 <div className="container bg-main-light">

 {(wishlistDetails)?.map((product)=> <div key={product.id} className="row p-3 border-bottom">

<div className="col-md-2">
  <img className='w-100' src={product.imageCover}  alt={product.title} />
</div>

<div className="col-md-10">

<div className='d-flex justify-content-between align-items-center '>

  <div className='  mt-5'>


  <h5>{product.title.split(" ").slice(0,3).join(' ')}</h5>
    <h6 className='fw-bold'>{product.price} EPG</h6>
    <span onClick={()=>removeProduct(product.id)}  className='text-danger cursor-pointer'><i className="fa-solid fa-trash"></i> Remove</span>
  </div>



<div className='mt-5'>
<button onClick={()=>addProduct(product.id)} className='btn btn-outline-success'>Add to cart</button>

</div>

</div>



</div>
</div>



)}



 </div>
  
  
  
  
  
  </>
}
