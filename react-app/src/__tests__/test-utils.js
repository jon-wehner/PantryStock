/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../store';

const testState = {
  inventory: { fridge: null, pantry: null },
  shoppingLists: {
    1: {
      id: 1,
      items: [
        {
          id: 1,
          inCart: false,
          item: {
            category: 'Produce',
            categoryId: 1,
            fridge: false,
            id: 2,
            name: 'Apple',
          },
          measurement: {
            id: 1,
            unit: 'Each',
          },
          quantity: 3,
          shoppingListId: 1,
        },
      ],
      name: 'Shopping List',
      userId: 1,
    },
  },
  categories: [
    { id: 1, name: 'Produce' },
    { id: 2, name: 'Butcher' },
    { id: 3, name: 'Seafood' },
    { id: 4, name: 'Deli' },
    { id: 5, name: 'Grains & Bread' },
    { id: 6, name: 'Baking & Cooking' },
    { id: 7, name: 'Dairy' },
    { id: 8, name: 'Beer & Wine' },
    { id: 9, name: 'Canned Goods' },
    { id: 10, name: 'Coffee & Tea' },
    { id: 11, name: 'Condiments' },
  ],
  items: {
    results: [
      {
        category: 'Produce', categoryId: 1, fridge: true, id: 1, name: 'Lettuce',
      },
    ],
  },
};
function Wrapper({ children }) {
  return <Provider store={configureStore(testState)}>{children}</Provider>;
}

const customRender = (ui, options) => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
