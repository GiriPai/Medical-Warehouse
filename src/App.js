import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min";

//redux
import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import Landing from "./components/doctor/layouts/Landing";
import DoctorRoute from "./components/routing/DoctorRoute";
import Dashboard from "./components/doctor/dashboard/Dashboard";
import Scan from "./components/doctor/patient/Scan";
import Patient from "./components/doctor/patient/Patient";
import Profile from "./components/doctor/profile/Profile";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    // Sidebar initializing
    const script = document.createElement("script");
    script.src = "/js_config/allInit.js";
    script.async = true;
    document.body.appendChild(script);
    // Sidebar initializing
  }, []);

  useEffect(() => {
    // initialize materialize javascripts
    M.AutoInit();
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Landing} />
            <DoctorRoute
              exact
              path="/home"
              component={Dashboard}
              title="Dashboard"
            />
            <DoctorRoute
              exact
              path="/scan"
              component={Scan}
              title="Scan QR Code"
            />
            <DoctorRoute
              exact
              path="/patient/:id"
              component={Patient}
              title="Patient"
            />
            <DoctorRoute
              exact
              path="/profile/"
              component={Profile}
              title="My Profile"
            />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
