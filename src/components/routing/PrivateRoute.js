import React, { Fragment, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../layouts/Header";
import Navigation from "../layouts/Navigation";
import Footer from "../layouts/Footer";
import Spinner from "../layouts/Spinner";

import { getCurrentProfile } from "../../actions/profile";

const PrivateRoute = ({
    component: Component,
    getCurrentProfile,
    auth,
    profile: { profile, loading },
    ...rest
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);
    return loading && profile === null ? (
        <Spinner />
    ) : (
        <Fragment>
            <Header />
            <Navigation />
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
            <Footer />
        </Fragment>
    );
};

PrivateRoute.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(PrivateRoute);
