import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store';
import { ModalProvider } from './context/Modal';

const store = configureStore();
if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}
function AppContainer() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  );
}
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
);
