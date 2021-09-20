import citiApi from 'api/citiApi';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  useEffect(() => {
    citiApi.getAll().then((response) => {
      console.log(response);
    });
  });

  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/admin">
          <AdminLayout />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
