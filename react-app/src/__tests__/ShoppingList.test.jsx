import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render } from './test-utils';
import ShoppingList from '../components/ShoppingList';
import testState from './testState';

const shoppingList = testState.shoppingLists['1'];
const handlers = [
  rest.get('/api/shopping-lists/1'), (req, res, ctx) => res(ctx.json(shoppingList), ctx.delay(150)),
  rest.get('/api/auth', (req, res, ctx) => res(ctx.json({
    email: 'demo@aa.io',
    id: 1,
    username: 'Demo',
  }))),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Shopping List Component', () => {
  test('renders the shopping list component', () => {
    render(
      <MemoryRouter initialEntries={['/shopping-lists/1']} initialIndex={0}>
        <Routes>
          <Route path="/shopping-lists/:id" element={<ShoppingList />} />
        </Routes>
      </MemoryRouter>,
    );
    server.printHandlers();
    expect(screen.getByText(/Shopping List/i)).toBeInTheDocument();
  });
  test('expect the produce category to be rendered with an item in it', () => {
    render(
      <MemoryRouter initialEntries={['/shopping-lists/1']} initialIndex={0}>
        <Routes>
          <Route path="/shopping-lists/:id" element={<ShoppingList />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText(/Produce/i)).toBeInTheDocument();
    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
  });
  test('expect the search bar to render', () => {
    render(
      <MemoryRouter initialEntries={['/shopping-lists/1']} initialIndex={0}>
        <Routes>
          <Route path="/shopping-lists/:id" element={<ShoppingList />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByPlaceholderText(/Add an Item/i)).toBeInTheDocument();
  });
});
