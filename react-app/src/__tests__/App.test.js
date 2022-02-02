import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render } from './test-utils';
import App from '../App';

const handlers = [
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
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('The App Component', () => {
  test('renders app and allows user to login', async () => {
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText(/Login/i));
    fireEvent.click(screen.getByText(/Login/i));
    const demoLoginButton = screen.getByText(/Demo/i);
    expect(demoLoginButton);
    fireEvent.click(demoLoginButton);
    await waitForElementToBeRemoved(demoLoginButton);
    expect(screen.getByText(/Hello/i));
  });
});
