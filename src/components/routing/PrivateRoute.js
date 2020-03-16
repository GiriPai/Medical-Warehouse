import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "../layouts/Header";

import { connect } from "react-redux";

import Spinner from "../layouts/Spinner";
import Alert from "../layouts/Alert";

import { logout } from "../../actions/auth";

const PrivateRoute = ({
  user,
  isAuthenticated,
  loading,
  logout,
  component: Component,
  ...rest
}) => {
  return loading ? (
    <Spinner />
  ) : !isAuthenticated ? (
    <Redirect to="/" />
  ) : user === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div id="wrapper">
        <Header user={user} logout={logout} />

        <Route {...rest} render={props => <Component {...props} />}></Route>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
});

export default connect(mapStateToProps, { logout })(PrivateRoute);
