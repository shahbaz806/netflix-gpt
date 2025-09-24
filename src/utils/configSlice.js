import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
  name: "config",
  initialState: {
    Lang: "en",
  },
  reducers: {
    changeLang: (state, action) => {
      state.Lang = action.payload;
    },
  },
});

export const {changeLang} = ConfigSlice.actions;
export default ConfigSlice.reducer;