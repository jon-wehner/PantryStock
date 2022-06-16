import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import {
  render, fireEvent, screen, waitForElementToBeRemoved,
} from '../test-utils';
import App from '../../App';
import testState from '../testState';

export default async function renderShoppingList() {
  render(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </MemoryRouter>,
  );
  fireEvent.click(screen.getByText(/Login/i));
  const demoLoginButton = screen.getByText(/Demo/i);
  fireEvent.click(demoLoginButton);
  await waitForElementToBeRemoved(demoLoginButton);
  const shoppingListButton = await screen.findByText((testState.shoppingLists[1].name));
  fireEvent.click(shoppingListButton);
}
