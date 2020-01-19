import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/routing/PrivateRoute";

import setAuthToken from "./utils/setAuthToken";

import Landing from "./components/layouts/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import HospitalProfile from "./components/hospitals/HospitalProfile";
import Hospitals from "./components/hospitals/Hospitals";
import CreateHospital from "./components/hospitals/CreateHospital";

import { loadUser } from "./actions/auth";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import Doctors from "./components/doctors/Doctors";
import CreateDoctor from "./components/doctors/CreateDoctor";
import DoctorProfile from "./components/doctors/DoctorProfile";
import Patients from "./components/patients/Patients";
import CreatePatient from "./components/patients/CreatePatient";
import PatientProfile from "./components/patients/PatientProfile";

import "bootstrap/dist/css/bootstrap.min.css";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = props => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Landing} />

                        <PrivateRoute
                            exact
                            path="/home"
                            component={Dashboard}
                        />
                        <PrivateRoute
                            exact
                            path="/hospitals"
                            component={Hospitals}
                        />
                        <PrivateRoute
                            exact
                            path="/hospitals/create"
                            component={CreateHospital}
                        />
                        <PrivateRoute
                            exact
                            path="/hospitals/profile/:id"
                            component={HospitalProfile}
                        />

                        <PrivateRoute
                            exact
                            path="/doctors"
                            component={Doctors}
                        />
                        <PrivateRoute
                            exact
                            path="/doctors/create"
                            component={CreateDoctor}
                        />
                        <PrivateRoute
                            exact
                            path="/doctors/profile/:id"
                            component={DoctorProfile}
                        />

                        <PrivateRoute
                            exact
                            path="/patients"
                            component={Patients}
                        />
                        <PrivateRoute
                            exact
                            path="/patients/create"
                            component={CreatePatient}
                        />
                        <PrivateRoute
                            exact
                            path="/patients/profile/:id"
                            component={PatientProfile}
                        />
                    </Switch>
                </Fragment>
            </Router>
        </Provider>
    );
};

export default App;
