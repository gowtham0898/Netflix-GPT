import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import useDisplayMovie from '../utils/useDisplayMovie';
const MainContainer = () => {
  
  //make sure if useEffect is called with out condetional rendering
    useDisplayMovie();
  return (
    <div>
      <VideoTitle />
      <VideoBackground />
    </div>
  );
}

export default MainContainer