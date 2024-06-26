import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
// image nase URL
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original/";

const Slider = () => {
  const [movieList,setMovieList]=useState([]);
  useEffect(()=>{
    getTrendingMovies();
  },[])
  const getTrendingMovies=()=>{
    GlobalApi.getTrendingVideos.then(resp=>{
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    })
  }
  return (
    <div className="flex overflow-x-auto w-full px-16 py-4">
      {movieList.map((item,index)=>(
        <img key={index} src={IMAGE_BASE_URL+item.backdrop_path}  className="min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md" alt=""/>
      ))}
    </div>
  )
}

export default Slider;
