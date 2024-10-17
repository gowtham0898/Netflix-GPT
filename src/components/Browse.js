import React from 'react'
import Header from './Header'
import useTreandingMovies from '../utils/useTreandingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {

  useTreandingMovies();

//  const singleMovie = await fetch("https://private-amnesiac-6cccdf-trakt.apiary-proxy.com/movies/deadpool-wolverine-2024/videos",API_OPTIONS);

//    const sigleJson = await singleMovie.json();
//    dispatch(addNowPlaying(sigleJson));
//    console.log("singlemovie",sigleJson);
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browse