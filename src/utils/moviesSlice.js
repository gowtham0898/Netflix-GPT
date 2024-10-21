import { createSlice } from "@reduxjs/toolkit";


const movies = createSlice({
    name:"movies",
    initialState : {
        trending :[],
        nowplaying:[],
        populer: []
    },
    reducers:{
        addNowPlaying :(state,action) => {
            state.nowplaying.push(action.payload);
        },

        addTreanding : (state,action) => {
            state.trending.push(action.payload);
        },

        addPopuler : (state,action) => {
            state.populer.push(action.payload);
        }
    }
})


export const{addNowPlaying,addTreanding,addPopuler} = movies.actions;

export default  movies.reducer;
