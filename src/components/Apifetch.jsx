import React, { useState } from 'react'
import Axios from 'axios'
export const Apifetch = () => {
    const [excuse,setExcuse]=useState("")

    const fetchexcuse=(name)=>{
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${name}`).then((res)=>{
            setExcuse(res.data[0].excuse);
       })
    }
  return (
    <div className='w-full h-screen bg-[#F1DEC9] p-6 mx-auto '>

      <div className='flex flex-col gap-5 justify-center items-center h-screen w-full bg-[#A4907C]'>
        <h1 className='md:text-4xl text-2xl font-bold text-white uppercase'>Excuse Generator</h1>
        <div className='grid md:grid-cols-3 grid-cols-2 gap-2 w-full justify-between p-5 font-boldnpm'>
              <button className='px-4 py-2 bg-[#8D7B68]' onClick={()=>fetchexcuse('party')}>Party</button>
              <button className='px-4 py-2 bg-[#8D7B68]' onClick={()=>fetchexcuse('family')}>Family</button>
              <button className='px-4 py-2 bg-[#8D7B68]' onClick={()=>fetchexcuse('office')}>Office</button>
              <button className='px-4 py-2 bg-[#8D7B68]' onClick={()=>fetchexcuse('children')}>Children</button>
              <button className='px-4 py-2 bg-[#8D7B68]' onClick={()=>fetchexcuse('college')}>Collage</button>
              <button className='px-4 py-2 bg-[#8D7B68]' onClick={()=>fetchexcuse('funny')}>Funny</button>
              <button className='px-4 py-2 bg-[#8D7B68]' onClick={()=>fetchexcuse('unbelievable')}>Unbelievable</button>
              <button className='px-4 py-2 bg-[#8D7B68]' onClick={()=>fetchexcuse('developers')}>Developer </button>
              <button className='px-4 py-2 bg-[#8D7B68]' onClick={()=>fetchexcuse('gaming')}>Gaming</button>

        </div>
       
        <p className='w-[80%] h-[10%] flex justify-center text-white font-bold text-center'>{excuse}</p>

      </div>

       
    </div>
  )
}
