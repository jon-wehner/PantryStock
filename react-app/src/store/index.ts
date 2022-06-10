/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import sessionReducer from './session';
import itemReducer from './items';
import shoppingListReducer from './shoppingList';
import inventoryReducer from './inventory';
import categoryReducer from './category';



export const reducer = {
  session: sessionReducer,
  items: itemReducer,
  shoppingLists: shoppingListReducer,
  inventory: inventoryReducer,
  categories: categoryReducer,
};

export const store = configureStore({ 
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});


