
import MovieCard from './MovieCard'; 

const MovieList = ({ title, movies }) => {
debugger
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              tmdb={movie.ids.tmdb}
              title={movie.title}
              url={movie.photoUrl} // Pass the fetched URL to the MovieCard
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

// import React from 'react'
// import MovieCard from './MovieCard'

// const MovieList = ({title,movies}) => {
//     //const{tmdb} = movies.ids.tmdb;
//     //console.log(tmdb);
//    console.log(movies);
   
//   return (
//     <div>
//       <div>{title}</div>
//       <div>
//         {movies?.map((movie) => (
           
//           <MovieCard key={movie.movie.ids.tmdb} tmdb ={movie.movie.ids.tmdb} title={movie.movie.title}/>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MovieList