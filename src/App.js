import React, { Fragment, useEffect } from "react";
import Landing from "./components/layouts/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hospitals from "./components/hospitals/Hospitals";
import CreateHospital from "./components/hospitals/CreateHospital";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import PrivateRoute from "./components/routing/PrivateRoute";

//Redux
import { Provider } from "react-redux";
import store from "./store";

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
                    </Switch>
                </Fragment>
            </Router>
        </Provider>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default App;
