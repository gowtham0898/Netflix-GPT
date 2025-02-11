import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice"
import movies from "./features/movies/moviesSlice";
const appStore = configureStore({
    //  this reducer will have different reducers form different slicce
    reducer:{
        user: userReducer,
        movies: movies
    }
})

export default appStore;