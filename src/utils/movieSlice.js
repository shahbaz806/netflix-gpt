import { createSlice } from "@reduxjs/toolkit";

const movieSlices = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addNowPopularMovie: (state, action) => {
      state.nowPopularMovie = action.payload;
    },
    addTrailerVideo: (state, action) => {
     state.trailerVideo = action.payload;
    },
  },
});
export const { addNowPlayingMovie,addTrailerVideo,addNowPopularMovie } = movieSlices.actions;
export default movieSlices.reducer;
