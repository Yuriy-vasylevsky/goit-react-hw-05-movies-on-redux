import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../services/tehMovi';
import axios from 'axios';

export const fetchTrendMovie = createAsyncThunk(
  'movie/fetchTrendMovie',
  async (_, { rejectWithValue }) => {
    try {
      const response = await Api.ApiTehMovi();
      return response;
    } catch (err) {
      rejectWithValue(alert(err.message));
    }
  },
);

export const fetchMovieCast = createAsyncThunk(
  'movie/fetchMoviecast',
  async (moviId, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${moviId}/credits?api_key=d2ada567dc639d858047ccd57be2d062&language=ru`,
      );
      return res.data.cast;
    } catch (err) {
      rejectWithValue(alert(err.message));
    }
  },
);

export const fetchdetalisMovi = createAsyncThunk(
  'movie/fetchdetalisMovi',
  async (moviId, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${moviId}?api_key=d2ada567dc639d858047ccd57be2d062&language=ua`,
      );
      return res.data;
    } catch (err) {
      rejectWithValue(alert(err.message));
    }
  },
);
