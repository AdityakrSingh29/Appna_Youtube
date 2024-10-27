import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Head = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-md'>
      {/* FIRST SECTION */}
      <div className='flex col-span-1 '>
        <img  className="h-14" alt="menu" src="https://th.bing.com/th/id/OIP.K9-apaoP-DKq-8xpziKA_wHaHa?rs=1&pid=ImgDetMain"/>
        <img className="h-14" alt="youtube" src="https://th.bing.com/th/id/OIP.sCtdNjphAin-gugu0MNptAHaEK?rs=1&pid=ImgDetMain"/>
      </div>

      {/* second section */}
      <div className='col-span-10 mt-2 px-10'>
        <input className="w-1/2 border border-gray-600 p-2  rounded-l-full" type="text"/>
        <button className='border border-gray-600 px-5 py-3 rounded-r-full bg-gray-100'><IoSearchOutline /></button>
      </div>

      {/* THird section  */}
      <div className='col-span-1'>
        <img className="h-10" alt="user icon" src="https://th.bing.com/th/id/OIP.76mq3EPwKyt6wuwRVFvr5wHaHa?w=608&h=608&rs=1&pid=ImgDetMain"/>
      </div>
    </div>
  )
}

export default Head
