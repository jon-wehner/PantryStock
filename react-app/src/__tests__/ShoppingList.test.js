import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render } from './test-utils';
import ShoppingList from '../components/ShoppingList';

describe('Shopping List Component', () => {
  test('renders the shopping list component', () => {
    render(
      <MemoryRouter initialEntries={['/shopping-lists/1']} initialIndex={0}>
        <Route path="/shopping-lists/:id" component={ShoppingList} />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Shopping List/i)).toBeInTheDocument();
  });
  test('expect the produce category to be rendered with an item in it', () => {
    render(
      <MemoryRouter initialEntries={['/shopping-lists/1']} initialIndex={0}>
        <Route path="/shopping-lists/:id" component={ShoppingList} />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Produce/i)).toBeInTheDocument();
    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
  });
  test('expect the search bar to render', () => {
    render(
      <MemoryRouter initialEntries={['/shopping-lists/1']} initialIndex={0}>
        <Route path="/shopping-lists/:id" component={ShoppingList} />
      </MemoryRouter>,
    );
    expect(screen.getByPlaceholderText(/Add an Item/i)).toBeInTheDocument();
  });
});
