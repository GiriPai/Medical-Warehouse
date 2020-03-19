import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./store";

import setAuthToken from "./utils/setAuthToken";

import { loadUser } from "./actions/auth";

import PrivateRoute from "./components/routing/PrivateRoute";
import { SignIn } from "./components/pages/SignIn";
import { Home } from "./components/pages/Home";
import { Doctor, AddDoctor, Doctors } from "./components/pages/Doctor";
import { Scan, Patient } from "./components/pages/Patient";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    // JS initializing
    const script = document.createElement("script");
    script.src = "/js/functions.js";
    script.async = true;
    document.body.appendChild(script);
    // JS initializing
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <PrivateRoute exact path="/home" component={Home} title="Home" />
          <PrivateRoute
            exact
            path="/doctors"
            component={Doctors}
            title="Doctors"
          />
          <PrivateRoute
            exact
            path="/doctor/add"
            component={AddDoctor}
            title="Doctors"
          />
          <PrivateRoute
            exact
            path="/doctor/:id"
            component={Doctor}
            title="Doctors"
          />

          <PrivateRoute
            exact
            path="/scan"
            component={Scan}
            title="Scan Patients"
          />
          <PrivateRoute
            exact
            path="/patient/:id"
            component={Patient}
            title="Patients"
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
