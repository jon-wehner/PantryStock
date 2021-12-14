import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render } from './test-utils';
import '@testing-library/jest-dom';
import ShoppingList from '../components/ShoppingList';

describe('Shopping List Component', () => {
  test('renders the shopping list component', () => {
    render(
      <MemoryRouter initialEntries={['/shopping-lists/1']} initialIndex={0}>
        <Route path="/shopping-lists/:id" component={ShoppingList} />
      </MemoryRouter>,
    );
    expect(screen.getByText('Shopping List')).toBeInTheDocument();
  });
});
