import React, { useEffect, useState } from 'react'
import styles from './Categories.module.css'
import axios from 'axios'







export default function Categories() {

const [categoriesData,setcategoriesData]=useState(null)
async function getCategories(){
  let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  console.log(data.data);
  setcategoriesData(data.data)
}

useEffect(()=>{
  getCategories()
},[])


  return <>
<div className="container mt-5">
<div className="row g-5">
{
  categoriesData?.map((category)=>  



  <div key={category._id} className="col-md-3 rounded">
    <div className='product p-3 cursor-pointer border'>
      
  <img height={250} className="  w-100" src={category.image} alt={category.name} />
  <h3 className='text-center mt-3'>{category.name}</h3>
  
  
    </div>
  
  </div>
  
 
  



  
  )

}

</div>


</div>


  
  </>
}
