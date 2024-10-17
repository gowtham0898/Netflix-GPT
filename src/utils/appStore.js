import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movies from "./moviesSlice";
const appStore = configureStore({
    //  this reducer will have different reducers form different slicce
    reducer:{
        user: userReducer,
        movies: movies
    }
})

export default appStore;