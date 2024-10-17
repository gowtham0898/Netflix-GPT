import { createSlice } from "@reduxjs/toolkit";


const movies = createSlice({
    name:"movies",
    initialState : {
        trending :[],
        nowplaying:[]
    },
    reducers:{
        addNowPlaying :(state,action) => {
            state.nowplaying.push(action.payload);
        },

        addTreanding : (state,action) => {
            state.trending.push(action.payload);
        }
    }
})


export const{addNowPlaying,addTreanding} = movies.actions;

export default  movies.reducer;
