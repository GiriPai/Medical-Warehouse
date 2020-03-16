import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { loadUser } from "./actions/auth";

import setAuthToken from "./utils/setAuthToken";

import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/auth/Login";
import Dashboard from "./components/home/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/home" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
