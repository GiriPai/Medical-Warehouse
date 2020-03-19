import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Preloader from "../layouts/Preloader";
import Navigation from "../layouts/Navigation";

import { logout } from "../../actions/auth";

const PrivateRoute = ({
  component: Component,
  title,
  path,
  user,
  isAuthenticated,
  loading,
  logout,
  ...rest
}) => {
  return loading ? (
    <Preloader />
  ) : !isAuthenticated ? (
    <Redirect to="/" />
  ) : user === null ? (
    <Preloader />
  ) : (
    <Fragment>
      <Header title={title} user={user} logout={logout} />
      <section id="main">
        <Navigation title={title} user={user} logout={logout} />
        <Route {...rest} render={props => <Component {...props} />}></Route>
        <Footer />
      </section>
      {/* <Preloader /> */}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
});

export default connect(mapStateToProps, { logout })(PrivateRoute);
