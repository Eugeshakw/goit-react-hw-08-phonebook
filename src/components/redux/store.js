import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './createSlice';
import {persistStore } from 'redux-persist';
import { userSlice } from './auth/authSlice';
// import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactReducer,
  user: userSlice.reducer
})


export const store = configureStore({ reducer: rootReducer});

export const persistor = persistStore(store);


  

