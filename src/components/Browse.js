import React from 'react'
import Header from './Header'
import useTreandingMovies from '../utils/useTreandingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../utils/usePopularMovies';
const Browse = () => {

  useTreandingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browse