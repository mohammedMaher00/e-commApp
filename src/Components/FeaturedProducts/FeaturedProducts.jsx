import React, { useContext, useEffect, useState } from 'react'
import styles from './FeaturedProducts.module.css'
import axios from 'axios'
import { useQuery } from 'react-query'
import { BallTriangle } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/ContextCart'
import { toast } from 'react-hot-toast'
import { WishListContext } from '../../Context/WishListContext'


let heart1=document.querySelector('.heart1')

let heart2=document.querySelector('.heart2')

let heartStatus1='d-block'
let heartStatus2='d-none'

export default  function FeaturedProducts() {

const {addToCart,setnumOfCartItem,getCartData}=useContext(CartContext)
const {addToWishlist,removeProductFromWishlist}=useContext(WishListContext)



// useEffect(()=>{
//   getCartData()
// },[])

async function addProductToWhishlist(id){
  let {data}=await addToWishlist(id)
  console.log(data);


if(data.status==='success'){
  // setnumOfCartItem(data?.numOfCartItems)
  // heartStatus1='d-none'
  // heartStatus2='d-block'
  toast.success('Product succesfully added to Wish List')
  

 
  
   }else{
    toast.error('cant add product')
  
   }
} 
async function removeProductformWishlist(id){
  let {data}=await removeProductFromWishlist(id)
  if(data.status==='success'){
    // heartStatus1='d-block'
    // heartStatus2='d-none'
 
    toast.success('Product succesfully Remove from Wish List')
  
    // setnumOfCartItem(data.numOfCartItems)
    
     }else{
      toast.error('cant remove product')
    
     }

}



async function addProduct(id){

  let {data} =await addToCart(id)
 if(data.status==='success'){
  setnumOfCartItem(data.numOfCartItems)
toast.success('Product succesfully added')


 }else{
  toast.error('cant add product')

 }
}


 

  function getFeaturedProducts(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  }


let {isLoading,isError,isFetching,data}=useQuery('featuredProducts',getFeaturedProducts)


// let [allproducts,setAllProducts]=useState([]);
// // let [isLoading,setIsloading]=useState(false)
// async function getFeaturedProducts(){
//   // setIsloading(true)
// let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/products')
// console.log(data.data);
//  setAllProducts(data.data)

// // setIsloading(false)
// }

// useEffect(()=>{
//   getFeaturedProducts()
// }, [])


// useEffect(()=>{

//   getCartData()
// },[])

  return <>
 

  {isLoading?(<div className='w-100 d-flex justify-content-center py-5'>
 <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
  </div>):(<div className="container py-2">
<div className="row">

{data?.data.data.map((product)=> <div key={product.id} className="col-md-2">

<div  className="product cursor-pointer py-3 px-2">
<Link to={`/productdetalis/${product.id}`} >
<img className='w-100' src={product.imageCover} alt={product.title} />

<span className='text-main fw-bold '>{product.category.name}</span>


<h3 className='h6 fw-bolder'>{product.title.split(" ").slice(0,2).join(' ')}</h3>

<div className='d-flex justify-content-between mt-2'>
<span>{product.price}EPG</span>
<span><i className='fas fa-star fs-6 rating-color'></i>{product.ratingsAverage}</span>

</div>
</Link>
<div className='d-flex justify-content-between mt-3 align-items-center productHeart'>

<button onClick={()=>addProduct(product.id)}   className='btn bg-main text-white w-75 btn-sm mt-2'> +Add</button>


<i onClick={()=>addProductToWhishlist(product.id)} className={`fa-regular fa-heart fs-3 text-dark heart1  `}  ></i>
<i onClick={()=>removeProductformWishlist(product.id)} className={`fa-regular fa-heart text-danger fs-3 heart2  `}    ></i>

</div>
</div>



</div> )}


</div>



  </div>
  )}
  
 
  
  
  
  
  </>
}
