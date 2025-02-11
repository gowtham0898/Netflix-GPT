import React, { useEffect } from 'react'

const MovieCard = ({tmdb,title,url}) => {
console.log(tmdb);
console.log(title);
console.log(url);



  return (
<div className="w-48">
  <div>
    {url ? (
      // If url exists, render the image
      <img className="w-48 " alt={title} src={url} />
    ) : (
      // If no url, render a blank card with the movie title
      <div className="w-48 h-[17rem]  bg-gradient-to-t from-gray-900 to-gray-700  flex items-center justify-center shadow-lg">
        <span className="text-center text-white font-bold px-2 text-lg">{title}</span>
      </div>
    )}
  </div>
</div>
  );
}

export default MovieCard