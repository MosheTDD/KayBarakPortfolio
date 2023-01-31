import React from 'react'
import CloudOne from '../../assets/images/cloud_one.png'

export default function FilmsContainer() {
  return (
    <div id='films_container' className='mt-80 h-fit w-screen'>
        <h1 className='text-5xl '>Projects</h1>
        <div className='group w-fit'>
            <img src={CloudOne} className='absolute top-[105%] -left-48 select-none z-10
            group-hover:z-0 group-hover:opacity-40 group-hover:-translate-x-24
            transition-all duration-500
            '/>
            <img src={CloudOne} className='absolute top-[115%] select-none z-10
            group-hover:z-0 group-hover:opacity-40 group-hover:translate-x-24
            transition-all duration-500
            '/>
            <img src={CloudOne} className='absolute top-[145%] -left-24 select-none z-10
            group-hover:z-0 group-hover:opacity-40 group-hover:translate-y-24
            transition-all duration-500
            '/>
            <div className='relative m-10 left-5 -top-44'>
                <iframe width="640" height="480" src="https://www.youtube.com/embed/XSMiSKEJh38" 
                title="הרפתקה בחלל" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}
