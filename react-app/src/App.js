import React, { useState, useEffect } from "react";
import {Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux"
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ShoppingList from "./components/ShoppingList"
import { authenticate } from "./store/session";
import LandingPage from "./LandingPage";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";

function App() {
  const dispatch = useDispatch()
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await dispatch(authenticate());
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/shopping-lists/:id" exact={true} authenticated={authenticated}>
          <ShoppingList />
        </ProtectedRoute>
        <Route path="/" exact={true} authenticated={authenticated}>
          {authenticated ? <Dashboard authenticated={authenticated}/> : <LandingPage authenticated={authenticated} setAuthenticated={setAuthenticated}/>}
        </Route>
        <Route path="/user/:id/inventory">
          <Inventory />
        </Route>
      </Switch>
    </>
  );
}

export default App;
