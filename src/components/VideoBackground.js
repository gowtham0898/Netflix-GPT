import React from "react";
import { useSelector } from "react-redux";

const VideoBackground = () => {
  const movie = useSelector((store) => store.movies.nowplaying);
  let trailer = "";

  let videoId = "";
  if (movie && movie.length > 0) {
    trailer = movie[0].videoUrl;
    const url = new URL(trailer);
    videoId = url.searchParams.get("v");
  }
  return (
    <div className="w-screen">
      {trailer ? (
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" + videoId + "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"></iframe>
      ) : (
        <p>loading....</p>
      )}
    </div>
  );
};

export default VideoBackground;
