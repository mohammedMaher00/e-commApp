import React from 'react'
import styles from './MainSlider.module.css'

import slider1 from '../../assets/images/slider-image-1.jpeg'
import slider2 from '../../assets/images/slider-image-2.jpeg'
import slider3 from '../../assets/images/slider-image-3.jpeg'
import Slider from 'react-slick'

export default function MainSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000
  };




  return <>
  <div className="container py-5">
    <div className="row g-0 mb-5">
<div className="col-md-9">
<Slider {...settings}>
<img src={slider1} height={400} className='w-100' alt="" />
<img src={slider2} height={400} className='w-100' alt="" />
<img src={slider3} height={400} className='w-100' alt="" />
        </Slider>


</div>
<div className="col-md-3">

<img src={slider2} height={200} className='w-100' alt="" />
<img src={slider3} height={200} className='w-100' alt="" />

</div>



    </div>
    
    </div>  
  
  </>
}
