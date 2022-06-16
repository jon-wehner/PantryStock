/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { render as renderTl } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rest } from 'msw';
import { reducer } from '../store';
import testState from './testState';

function render(
  ui,
  { preLoadedState, store = configureStore({ reducer, preLoadedState }), ...renderOptions } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return renderTl(ui, { wrapper: Wrapper, ...renderOptions });
}

export const handlers = [
  rest.get('/api/auth/', (req, res, ctx) => res(ctx.json({
    email: 'demo@aa.io',
    id: 1,
    username: 'Demo',
  }), ctx.delay(150))),
  rest.post('/api/auth/login', (req, res, ctx) => res(ctx.json({
    email: 'demo@aa.io',
    id: 1,
    username: 'Demo',
  }), ctx.delay(150))),
  rest.get('/api/items/categories', (req, res, ctx) => res(ctx.json(testState), ctx.delay(150))),
  rest.get('/api/shopping-lists/1', (req, res, ctx) => res(ctx.json(testState.shoppingLists[1]), ctx.delay(150))),
  rest.get('/api/users/1/shopping-lists', (req, res, ctx) => res(ctx.json(testState.shoppingLists), ctx.delay(150))),
];

export * from '@testing-library/react';

export { render };
