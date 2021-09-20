import React, { useEffect } from 'react';
import citiApi from 'api/citiApi';
import { Route, Switch } from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPage';
import { AdminLayout } from 'components/Layout';
import { NotFound } from 'components/Common';

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
        <Route path="/admin">
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
