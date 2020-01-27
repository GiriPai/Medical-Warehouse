import React, { Fragment, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../doctor/layouts/Header";
import Navigation from "../doctor/layouts/Navigation";
import Footer from "../doctor/layouts/Footer";
import SidebarFilter from "../doctor/layouts/SidebarFilter";

import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../doctor/layouts/Spinner";
import Alert from "../doctor/layouts/Alert";

const DoctorRoute = ({
  getCurrentProfile,
  auth,
  profile: { loading, profile },
  component: Component,
  title,
  ...rest
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Fragment>
      <Spinner />
    </Fragment>
  ) : (
    <Fragment>
      <div className="wrapper ">
        <Navigation profile={profile} />
        <div className="main-panel">
          <Header title={title} />
          <div className="content">
            <Alert />

            <Route
              {...rest}
              render={props =>
                !auth.isAuthenticated && !auth.loading ? (
                  <Redirect to="/" />
                ) : (
                  <Component {...props} />
                )
              }
            />
          </div>
          <Footer />
        </div>
      </div>
      <SidebarFilter />
    </Fragment>
  );
};

DoctorRoute.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile })(DoctorRoute);
