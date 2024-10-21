import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTreanding } from "./moviesSlice";
import { API_OPTIONS } from "./constants";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

const useTreandingMovies = () => {
  const dispatch = useDispatch();
  
  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://private-amnesiac-6cccdf-trakt.apiary-proxy.com/movies/trending",
      API_OPTIONS
    );

    const trending = await data.json();

    const updatedTrendingMovies = await Promise.all(
      trending?.map(async (trend) => {
        const tmdbId = trend.movie.ids.tmdb;

        // Query Firestore for the movie with the matching TMDB ID
        const q = query(
          collection(db, "movies"),
          where("tmdb_id", "==", tmdbId)
        );
        const result = await getDocs(q);

        let url = null;
        if (!result.empty) {
          const movieDoc = result.docs[0].data();
          url = movieDoc.poster_url; // Fetch the poster URL
        }

        // Return the updated movie data with the URL
        return { ...trend.movie, url };
      })
    );
    dispatch(addTreanding(updatedTrendingMovies));
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useTreandingMovies;
