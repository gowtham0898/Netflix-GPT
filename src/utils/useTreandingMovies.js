import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTreanding } from "./moviesSlice";
import { API_OPTIONS } from "./constants";

const useTreandingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = async () => {
      
     const data =await fetch("https://private-amnesiac-6cccdf-trakt.apiary-proxy.com/movies/trending", API_OPTIONS);
  
     const trending = await data.json();
     dispatch(addTreanding(trending));
     
    }
  
    useEffect(() => {
      nowPlayingMovies();
   },[])
}

export default useTreandingMovies;