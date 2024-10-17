import React from 'react'
import { useSelector } from 'react-redux'

const VideoTitle = () => {
    const movie = useSelector((store => store.movies.nowplaying));
    let title = "";
    let overview = "";

if(movie && movie.length > 0){
   
    title = movie[0].title;
    overview = movie[0].overview;
    
}
  return (
    <div className="w-screen aspect-video pt-[21%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
     <p className="py-6 font-bold w-1/4">{overview}</p>
     <div className="">
        <button className="text-xl font-bold bg-white text-gray-500 py-2 px-4  rounded-lg hover:border-white hover:rounded-lg hover:scale-110 hover:bg-opacity-90 transition duration-200">👀 watch</button>
        <button className="text-xl mx-2 font-bold bg-gray-500 text-white py-2 px-4 bg-opacity-50 rounded-lg hover:bg-opacity-90 hover:border-white hover:rounded-lg hover:scale-110 transition duration-200"> More Info</button>
     </div>
    </div>
  );
}

export default VideoTitle