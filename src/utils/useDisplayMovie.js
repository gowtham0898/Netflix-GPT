
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { API_OPTIONS } from '../utils/constants';
import { addNowPlaying } from '../utils/moviesSlice';

const useDisplayMovie = () => {
  
    const dispatch = useDispatch();
    const movies = useSelector((store) => store.movies.trending[0]);
   
    const displayMovie = async(slug) => {
   
    const singleMovie = await fetch(`https://private-amnesiac-6cccdf-trakt.apiary-proxy.com/movies/${slug}?extended=full`,API_OPTIONS);

   const sigleJson = await singleMovie.json();
  
   dispatch(addNowPlaying(sigleJson));
    }
    useEffect(() => {
        if(!movies) return;
        const mainMovie = movies[0];
        const {slug} = mainMovie.movie.ids;
        displayMovie(slug);
    },[movies])

}

export default useDisplayMovie;