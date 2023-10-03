import React, { useEffect, useState } from 'react'
import styles from './Brands.module.css'
import axios from 'axios'

export default function Brands() {

  const [brandsData,setbrandsData]=useState(null)
async function getBrands(){

let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
setbrandsData(data.data)


}
useEffect(()=>{
  getBrands()
},[])


  return <>


<div className="container mt-5">
<div className="row g-5">
{
  brandsData?.map((brand)=>  



  <div key={brand._id} className="col-md-3 rounded">
    <div className='product p-3 cursor-pointer border'>
      
  <img  className="  w-100" src={brand.image} alt={brand.name} />
  <h3 className='text-center mt-3'>{brand.name}</h3>
  
  
    </div>
  
  </div>
  
 
  



  
  )

}

</div>


</div>














  
  
  
  </>
}
