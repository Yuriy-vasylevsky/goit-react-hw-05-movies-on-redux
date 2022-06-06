import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchTrendMovie,
  fetchMovieCast,
  fetchdetalisMovi,
} from '../movie/movie-operation';

const trendMovie = createReducer('', {
  [fetchTrendMovie.fulfilled]: (_, { payload }) => payload,
});

const movieCast = createReducer('', {
  [fetchMovieCast.fulfilled]: (_, { payload }) => payload,
});

const detalisMovi = createReducer('', {
  [fetchdetalisMovi.fulfilled]: (state, { payload }) => payload,
});

const movieReducer = combineReducers({
  trendMovie,
  movieCast,
  detalisMovi,
});

export default movieReducer;
