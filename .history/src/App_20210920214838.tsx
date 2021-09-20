import React, { useEffect } from 'react';
import citiApi from 'api/citiApi';
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
        <Route path="/login"></Route>
        <Route path="/admin"></Route>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
