import {configureStore} from '@reduxjs/toolkit';
import {bookslice} from './bookslice'
import {authSlice} from './authSlice';




export const store = configureStore({
    reducer: {
       books: bookslice.reducer,
       state: authSlice.reducer
    },
  });