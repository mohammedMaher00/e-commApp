import React, { useEffect, useState } from 'react'
import styles from './CategorySlider.module.css'
import axios from 'axios'
import Slider from 'react-slick'

export default function CategorySlider() {

  let [categories,setCategories]=useState([])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000
  };


  async function getCategorySlider(){
    let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    setCategories(data.data)
  }

  useEffect(()=>{
    getCategorySlider()
  },[])

  




  return <>
  
  <div className="container mb-5">
  <Slider {...settings}>

{categories.map((category)=>(
<div key={category._id} >
<img  className='w-100' src={category.image} height={225} alt={category.name} />
<h4 className='text-center'>{category.name}</h4>
</div>



)


)
}

</Slider>
  
  





  </div>
  
  </>
}
