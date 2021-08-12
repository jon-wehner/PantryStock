import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ShoppingList from './components/ShoppingList';
import { authenticate } from './store/session';
import LandingPage from './LandingPage';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    (async () => {
      const user = await dispatch(authenticate());
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
      setUserId(user.id);
      console.log(userId);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/login" exact>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/sign-up" exact>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/shopping-lists" exact authenticated={authenticated}>
          <ShoppingList />
        </ProtectedRoute>
        <Route path="/" exact authenticated={authenticated}>
          {authenticated ? <Dashboard authenticated={authenticated} />
            : <LandingPage authenticated={authenticated} setAuthenticated={setAuthenticated} />}
        </Route>
        <ProtectedRoute path="/inventory" authenticated={authenticated}>
          <Inventory userId={userId} />
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;
