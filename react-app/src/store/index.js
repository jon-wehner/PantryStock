/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import itemReducer from './items';
import shoppingListReducer from './shoppingList';
import inventoryReducer from './inventory';

const rootReducer = combineReducers({
  session: sessionReducer,
  items: itemReducer,
  shoppingLists: shoppingListReducer,
  inventory: inventoryReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, enhancer);

export default configureStore;
