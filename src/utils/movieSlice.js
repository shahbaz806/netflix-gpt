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
    addNowTrendingMovie: (state, action) => {
      state.nowTrendingMovie = action.payload;
    },
    addNowUpcomingMovie: (state, action) => {
      state.nowUpcomingMovie = action.payload;
    },
    addTrailerVideo: (state, action) => {
     state.trailerVideo = action.payload;
    },
  },
});
export const { addNowPlayingMovie,addTrailerVideo,addNowPopularMovie,addNowTrendingMovie,addNowUpcomingMovie } = movieSlices.actions;
export default movieSlices.reducer;
