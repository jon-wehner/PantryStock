/* eslint-disable import/no-extraneous-dependencies */
import { compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import sessionReducer from './session';
import itemReducer from './items';
import shoppingListReducer from './shoppingList';
import inventoryReducer from './inventory';
import categoryReducer from './category';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    __REDUX_DEVTOOLS_EXTENTSION_COMPOSE__?: typeof compose
  }
}

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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
