import React from 'react'
import KayOne from '../../assets/kay_one.jpg'


export default function KayPhotos() {
  return (
    <div className='flex w-screen h-screen'>
        <img src={KayOne} alt="Kay Barak" className='relative w-1/4 h-3/4 bg-red-500 left-56 top-[10%] -skew-x-6 transition-all duration-200
        hover:top-[7%] hover:left-60'/>
        <div className='relative w-1/4 h-3/4 bg-red-500 left-56 mx-10 top-[10%] -skew-x-6 transition-all duration-200
        hover:top-[7%] hover:left-60
        '></div>
        <div className='relative w-1/4 h-3/4 bg-red-500 left-56 top-[10%] -skew-x-6 transition-all duration-200
        hover:top-[7%] hover:left-60
        '></div>
      </div>
  )
}
