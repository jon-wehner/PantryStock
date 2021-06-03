/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => (
  <Route {...props}>
    {(props.authenticated) ? props.children : <Redirect to="/login" />}
  </Route>
);

export default ProtectedRoute;
