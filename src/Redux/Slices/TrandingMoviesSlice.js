import { createSlice } from "@reduxjs/toolkit";
import { getTrandingMovies } from "../../APIs/GetMoviesLists";

export const trandingMoviesSlice = createSlice({
  name: "trandingMovies",
  initialState: { moviesInfo: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrandingMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTrandingMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.moviesInfo = action.payload;
    });
    builder.addCase(getTrandingMovies.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default trandingMoviesSlice.reducer;

//Selectors
export const trandingMovies = (state) =>
  state.trandingMovies.moviesInfo.results;

export const trandingMoviesFull = (state) => state.trandingMovies.moviesInfo;
export const trandingMoviesLoading = (state) => state.trandingMovies.loading;
