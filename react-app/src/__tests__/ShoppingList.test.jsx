import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers } from './test-utils';
import renderShoppingList from './pages';

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('The Shopping List Component', () => {
  test('renders the shopping list component and displays items', async () => {
    await renderShoppingList();

    expect(screen.getByText(/Apple/i));
  });
});
