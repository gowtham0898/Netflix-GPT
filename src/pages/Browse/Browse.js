import React from 'react'
import Header from '../../layout/Header'
import useTreandingMovies from '../../utils/hooks/useTreandingMovies'
import MainContainer from '../../components/main/MainContainer';
import SecondaryContainer from '../../components/secondary/SecondaryContainer';
import usePopularMovies from '../../utils/hooks/usePopularMovies';
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