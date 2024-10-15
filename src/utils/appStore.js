import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"

const appStore = configureStore({
    //  this reducer will have different reducers form different slicce
    reducer:{
        user: userReducer
    }
})

export default appStore;