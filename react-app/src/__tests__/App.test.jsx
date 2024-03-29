import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { setupServer } from 'msw/node';
import {
  render, screen, fireEvent, waitForElementToBeRemoved, handlers,
} from './test-utils';
import App from '../App';

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

describe('Landing page', () => {
  it('allows users to enter their email and go to the signup page', async () => {
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </MemoryRouter>,
    );
    const email = 'test@test.com';
    fireEvent.change(screen.getByPlaceholderText(/Enter Email/i), { target: { value: email } });
    fireEvent.click(screen.getByText(/Get Started/i));
    expect(screen.getByDisplayValue(email));
  });
});
