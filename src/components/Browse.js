import React from 'react'
import Header from './Header'
import useTreandingMovies from '../utils/useTreandingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {

  useTreandingMovies();


  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browse