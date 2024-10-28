import  { useEffect, useState } from 'react';
import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import {toggleMenu} from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { use } from 'react';

const Head = () => {

  const dispatch=useDispatch();
  const [searchQuery,setSearchQuery]=useState("");
  const [suggestion,setSuggestion]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);


  useEffect(()=>{
    //MAKE AN API CALL AFTER EVERY KEY PRESS
    //BUT IF DIFFRN BW TWO API IS LESS TAHN <200MS DECLINE THE API CALLS

    const timer=setTimeout(()=>getSearchSuggestions(),200);
    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery])



  const getSearchSuggestions=async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json=await data.json();
    // console.log(json[1]);
    setSuggestion(json[1]);
  }

  const toggleMenuHandler=()=>{
    dispatch(toggleMenu())
  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-md'>
      {/* FIRST SECTION */}
      <div className='flex col-span-1 '>
        <img  onClick={()=>toggleMenuHandler()} className="h-14 cursor-pointer" alt="menu" src="https://th.bing.com/th/id/OIP.K9-apaoP-DKq-8xpziKA_wHaHa?rs=1&pid=ImgDetMain"/>
        <img className="h-14" alt="youtube" src="https://th.bing.com/th/id/OIP.sCtdNjphAin-gugu0MNptAHaEK?rs=1&pid=ImgDetMain"/>
      </div>

      {/* SECOND SECTION */}
      <div className='col-span-10 mt-2 px-10'>
        <div>
          <input className="w-1/2 border border-gray-600 p-2 rounded-l-full" type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}/>
          <button className='border border-gray-600 px-5 py-3 rounded-r-full bg-gray-100'><IoSearchOutline /></button>
        </div>

        {showSuggestions && (
          <div className='absolute bg-white py-2 px-2 w-[42rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>
            {suggestion.map((s) => (

              <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-200 rounded-lg'>
              <div className='flex gap-2'>
              <IoSearchOutline />{s}
              </div>
              </li>
            ))}
          </ul>
        </div>
        )}
        
      </div>

      {/* THIRD SECTION */}
      <div className='col-span-1'>
        <img className="h-10" alt="user icon" src="https://th.bing.com/th/id/OIP.76mq3EPwKyt6wuwRVFvr5wHaHa?w=608&h=608&rs=1&pid=ImgDetMain"/>
      </div>
    </div>
  );
};

export default Head;
