import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './hooks';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ShoppingList from './components/ShoppingList';
import { authenticate } from './store/session';
import LandingPage from './LandingPage';
import Dashboard from './components/Dashboard/index';
import Inventory from './components/Inventory';
import Footer from './components/Footer';

function App() {
  const dispatch = useAppDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const userId = useAppSelector((state) => state.session.id);

  useEffect(() => {
    (async () => {
      const user = await dispatch(authenticate());
      if (!user.errors) {
        setAuthenticated(true);
      }
    })();
  }, [dispatch, userId]);
  return (
    <>
      <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <Routes>
        <Route
          path="/login"
          element={(
            <LoginForm
              authenticated={authenticated}
            />
          )}
        />
        <Route
          path="/sign-up"
          element={(
            <SignUpForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
            )}
        />
        <Route
          path="/shopping-lists/:id"
          element={(
            <ShoppingList />
          )}
        />
        <Route
          path="/"
          element={authenticated ? <Dashboard />
            : <LandingPage />}
        />
        <Route
          path="/inventory"
          element={<Inventory userId={userId} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
