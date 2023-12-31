import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { infoToast } from 'components/Toasts/Toasts';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const {data} = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    infoToast('The user is already existed');
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const {data} = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    infoToast('Incorrect login or password');
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    throw error;
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectedWithValue();
    }
    token.set(persistedToken);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectedWithValue();
    }
  }
);

