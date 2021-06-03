/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ authenticated, children }) {
  return (
    <Route authenticated={authenticated} children={children}>
      {(authenticated) ? children : <Redirect to="/login" />}
    </Route>
  );
}

export default ProtectedRoute;
