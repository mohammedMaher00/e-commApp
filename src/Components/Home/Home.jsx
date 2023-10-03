import React, { useContext, useEffect } from 'react'
import styles from './Home.module.css'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import MainSlider from '../MainSlider/MainSlider'
import CategorySlider from '../CategorySlider/CategorySlider'
import { CartContext } from '../../Context/ContextCart'


export default function Home() {

// let {getCartData}=useContext(CartContext)

// useEffect(()=>{
//   getCartData()
// },[])

  

  return <>
  <MainSlider/>
  <CategorySlider/>
  <FeaturedProducts/>

  
  </>

 
  
}
