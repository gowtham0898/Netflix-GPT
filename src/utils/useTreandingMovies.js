import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTreanding } from "./moviesSlice";
import { API_OPTIONS } from "./constants";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";
import fetchWithAuth from "./fetchWithAuth";
const useTreandingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = async () => {
      
  try {
    const trendingMovies = await fetchWithAuth(
      `https://localhost:7263/api/Movies/treanding`,
      {
        method: "GET",
        headers: {
          Accept: "*/*",
        },
      }
    );
    if (trendingMovies.ok) {
      const trendingData = await trendingMovies.json();

      dispatch(addTreanding(trendingData));
    } else {
      const errorData = await trendingMovies.json();
      console.error("featching trending data request is not success:", errorData);
    }
  } catch (error) {
    console.error("An error occurred featching trending data:", error);
  }

 
    // const data = await fetch(
    //   "https://private-amnesiac-6cccdf-trakt.apiary-proxy.com/movies/trending",
    //   API_OPTIONS
    // );

    // const trending = await data.json();

    // const updatedTrendingMovies = await Promise.all(
    //   trending?.map(async (trend) => {
    //     const tmdbId = trend.movie.ids.tmdb;

    //     // Query Firestore for the movie with the matching TMDB ID
    //     const q = query(
    //       collection(db, "movies"),
    //       where("tmdb_id", "==", tmdbId)
    //     );
    //     const result = await getDocs(q);

    //     let url = null;
    //     if (!result.empty) {
    //       const movieDoc = result.docs[0].data();
    //       url = movieDoc.poster_url; // Fetch the poster URL
    //     }

    //     // Return the updated movie data with the URL
    //     return { ...trend.movie, url };
    //   })
    // );

  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useTreandingMovies;
