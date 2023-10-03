import React from 'react'
import styles from './Notfound.module.css'
import notFoundImg from '../../assets/images/error.svg'
export default function Notfound() {
  return <>
<div className='d-flex justify-content-center align-items-center mt-5'>

<img className='w-50' src={notFoundImg} alt="notFoundImg" />

  </div>  </>
}
