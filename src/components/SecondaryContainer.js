import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const trending = useSelector((store)=> store.movies.trending[0]);
  //const populer = useSelector((store) => store.movies.popular[0]);
  const popular = useSelector((store) => store.movies.populer[0]);
  return (
    // movieList popular
    // movie list trending
    // movie list recent
    <div className="bg-black">
      <div className="-mt-72 relative z-20 ">
      <MovieList title={"Popular"} movies={popular} />
      <MovieList title={"Trending"} movies={trending} />
        <MovieList title={"Popular"} movies={popular} />
        <MovieList title={"Trending"} movies={trending} />
        <MovieList title={"Trending"} movies={trending} />
        <MovieList title={"Popular"} movies={popular} />
      </div>

    </div>
  );
}

export default SecondaryContainer