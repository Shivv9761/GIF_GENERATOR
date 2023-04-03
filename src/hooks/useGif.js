
import axios from 'axios';
import { useState,useEffect } from 'react';
// import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
function useGif(tag) {
  
 
    // function Random(tag) {
    // let imageSource;
        const[gif,setGif]=useState('');
        const [loading,setLoading]=useState('false');
        async function fetchData(tag){
            setLoading(true);
            const {data}=await axios.get(tag?`${url}&tag=${tag}`:url);
             
    
           
           
           
            // const op=axios.get(url)
            // console.log(op)
            //  console.log(data);
             const imageSource= await data.data.images.downsized_large.url;
            //  console.log(imageSource)
            setLoading(false);
              setGif(imageSource);
        }
    
    
        // fetchData();
        useEffect( () => {
            fetchData();
          },[] )

          return{gif,loading,fetchData};
}

export default useGif