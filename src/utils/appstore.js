import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const app = configureStore({
  reducer: {
    user: userReducer,
    movie: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});
export default app;
