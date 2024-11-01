import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import {  useSearchParams } from 'react-router-dom';


const WatchPage = () => {
    const [searchparams]=useSearchParams();
    console.log(searchparams.get("v"));
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    })

    
  return (
    <div className='px-5'>
    <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+searchparams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe> 
    </div>
  )
}

export default WatchPage
