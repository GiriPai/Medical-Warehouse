import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { setAlert } from "../../actions/alert";
import { login } from "../../actions/auth";
import Alert from "./Alert";

const Landing = props => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        props.login({ email, password });
    };

    // Redirect if logged in
    if (props.isAuthenticated) {
        return <Redirect to="/home" />;
    }

    return (
        <Fragment>
            <div className="login-box">
                <div className="login-logo">
                    <Link to="/">
                        <b>Admin -</b> Medical Repo
                    </Link>
                </div>
                <Alert />
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">
                            Sign in to start your session
                        </p>
                        <form action="!#" onSubmit={e => onSubmit(e)}>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => onChange(e)}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => onChange(e)}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="col-12">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block btn-flat"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* /.login-card-body */}
                </div>
            </div>
            {/* /.login-box */}
        </Fragment>
    );
};

Landing.propTypes = {
    setAlert: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, login })(Landing);
