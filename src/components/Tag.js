import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
function Tag() {
// let imageSource;

   
    const[tag,setTag]=useState('car');
    const {gif,loading,fetchData}=useGif(tag);


  return (
    <div className="w-1/2  border border-black mt-[15px] rounded-lg bg-[#60A5FA] flex flex-col gap-5 items-center">
        <h1 className="font-bold mt-[15px] text-2xl underline uppercase ">A Random Gif {tag}</h1>
    
       
       {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
    }

    <input type="text"
      className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
      onChange={(event)=>{
        setTag(event.target.value)
      }
      }
      value={tag}
      onKeyPress={(event)=>{
        if(event.key==='Enter'){
            setTag(event.target.value)
            fetchData(tag);
        }
      }}
       />


    <button onClick={() => fetchData(tag) }

      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">

       Generate

      </button>
    </div>
  )
}

export default Tag