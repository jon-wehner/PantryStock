import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ShoppingList from './components/ShoppingList';
import { authenticate } from './store/session';
import LandingPage from './LandingPage';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const userId = useSelector((state) => state.session.id);

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
              setAuthenticated={setAuthenticated}
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
          authenticated={authenticated}
          element={authenticated ? <Dashboard authenticated={authenticated} />
            : <LandingPage authenticated={authenticated} setAuthenticated={setAuthenticated} />}
        />
        <Route
          path="/inventory"
          authenticated={authenticated}
          element={<Inventory userId={userId} />}
        />
      </Routes>
    </>
  );
}

export default App;
