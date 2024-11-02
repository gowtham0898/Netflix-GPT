import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopuler } from "./moviesSlice";
import { API_OPTIONS, FANART_API_KEY } from "./constants";

import { collection, getDocs,addDoc, query, where } from "firebase/firestore";
import { db } from "./firebase";
import fetchWithAuth from "./fetchWithAuth";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  
  const nowPlayingMovies = async () => {
    try {
      const populerMovies = await fetchWithAuth(
        `https://localhost:7263/api/Movies/populer`,
        {
          method: "GET",
          headers: {
            Accept: "*/*",
          },
        }
      );
      if (populerMovies.ok) {
        const populerMovieData = await populerMovies.json();
  
        dispatch(addPopuler(populerMovieData));
      } else {
        const errorData = await populerMovies.json();
        console.error("featching popuper data request is not success:", errorData);
      }
    } catch (error) {
      console.error("An error occurred featching popuper data:", error);
    }
    // const data = await fetch(
    //   "https://private-amnesiac-6cccdf-trakt.apiary-proxy.com/movies/popular",
    //   API_OPTIONS
    // );

//     const populers = await data.json();
// console.log("populers",populers);
//  const tmdbids = populers.map((populer) => populer.ids.tmdb);
//  console.log("populers tndbs",tmdbids);
 
//  if(tmdbids){
//     await Promise.all(
//         tmdbids.map(async (tmdbId) => {
//           const apiUrl = `https://webservice.fanart.tv/v3/movies/${tmdbId}?api_key=${FANART_API_KEY}`;
//           const response = await fetch(apiUrl);
//           const data = await response.json();

//           if (data && data.movieposter && data.movieposter.length > 0) {
//            const newPosterUrls = data.movieposter[0].url;
//             // Here you can save to Firestore if needed
//             await addDoc(collection(db, "movies"), {
//               tmdb_id: tmdbId,
//               poster_url: newPosterUrls,
//             });
//           }
//         })
//       );

//  }
  //   const updatedpopularMovies = await Promise.all(
  //       populers?.map(async (popular) => {
  //           //console.log("populer",popular);
            
  //       const tmdbId = popular.ids.tmdb;

  //       // Query Firestore for the movie with the matching TMDB ID
  //       const q = query(
  //         collection(db, "movies"),
  //         where("tmdb_id", "==", tmdbId)
  //       );
  //       const result = await getDocs(q);

  //       let url = null;
  //       if (!result.empty) {
  //         const movieDoc = result.docs[0].data();
  //         url = movieDoc.poster_url; // Fetch the poster URL
  //       }

  //       // Return the updated movie data with the URL
  //       return { ...popular, url };
  //     })
  //   );
    
 };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default usePopularMovies;
