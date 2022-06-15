/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { render as renderTl } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { reducer } from '../store';

function render(
  ui,
  { preLoadedState, store = configureStore({ reducer, preLoadedState }), ...renderOptions } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return renderTl(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };
