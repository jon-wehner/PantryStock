import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import App from '../App';

afterEach(cleanup);

it('should take a snapshot and render the app component', () => {
  const initialState = {};
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);
  const { asFragment } = render(<Provider store={store}><App /></Provider>);

  expect(asFragment(<App />)).toMatchSnapshot();
});
