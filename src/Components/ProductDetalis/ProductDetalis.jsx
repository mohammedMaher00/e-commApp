import React, { useContext, useEffect, useState } from 'react'
import styles from '../ProductDetalis/ProductDetalis.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
import { BallTriangle } from 'react-loader-spinner'
import Slider from 'react-slick'
import { CartContext } from '../../Context/ContextCart'
import { toast } from 'react-hot-toast'

export default function ProductDetalis() {
  let {addToCart}=useContext(CartContext)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000
  };

let {id}=useParams();
function getProductData(id){
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}


let {isError,isLoading,data ,isFetching} =useQuery('productData',()=>getProductData(id))
let allProData=data?.data.data;


async function addProduct(id){

  let response =await addToCart(id)
 if(response.data.status==='success'){
toast.success('Product succesfully added')

 }else{
  toast.error('cant add product')

 }
}



 








  return (<>

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
  </div>):(allProData? <div className='container py-5 '>
    <div className="row  align-items-center">
<div className="col-md-4">
<Slider {...settings}>
{allProData.images.map((img)=>(
  <img className='w-100' src={img} alt={allProData.title} key={allProData._id} />

))}

        </Slider>



  
</div>
<div className="col-md-8">
<h2 className='h5'>{allProData.title}</h2>
<p>{allProData.description}</p>
<h6 className='text-main mt-4'>{allProData.category.name}</h6>
<div className="d-flex align-items-center justify-content-between mt-4 ">
<span>Price: <span className='text-danger'>{allProData.price}</span>  EPG</span>
<span>Rating Quantity: {allProData.quantity}</span>
<span><i className='fas fa-star fs-6 rating-color'></i> {allProData.ratingsAverage}</span>

</div>
  <button onClick={()=>addProduct(id)} className='btn bg-main w-100  text-white mt-4'>+ Add</button>
</div>


    </div>




  </div>:'')}


 
  
  
  </>
   
  )
}
