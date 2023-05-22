import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import popularMoviesSlice from "./Slices/PopularMoviesSlice";
import upcomingMoviesSlice from "./Slices/UpcomingMoviesSlice";
import topRatedMoviesSlice from "./Slices/TopRatedMoviesSlice";
import trandingMoviesSlice from "./Slices/TrandingMoviesSlice";
import movieByIdSlice from "./Slices/MovieById";
import castByIdSlice from "./Slices/CastById";
import reviewsByIdSlice from "./Slices/ReviewsById";

export default configureStore({
  reducer: {
    popularMovies: popularMoviesSlice,
    upcomingMovies: upcomingMoviesSlice,
    topRatedMovies: topRatedMoviesSlice,
    trandingMovies: trandingMoviesSlice,
    movieById: movieByIdSlice,
    castById: castByIdSlice,
    reviewsById: reviewsByIdSlice,
  },
  middleware: [thunk],
});
