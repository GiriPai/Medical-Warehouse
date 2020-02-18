import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { login } from "../../../actions/auth";
import { Redirect } from "react-router-dom";
import Alert from "../../layouts/Alert";

const SignIn = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    login(formData);
  };

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Fragment>
      <div className="login" data-lbg="blue">
        <div className="l-block toggled" id="l-login">
          <div className="lb-header palette-Blue bg">
            <i className="zmdi zmdi-account-circle" />
            Hi there! Please Sign in
          </div>
          <Alert />
          <div className="lb-body">
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group fg-float">
                <div className="fg-line">
                  <input
                    type="text"
                    className="input-sm form-control fg-input"
                    name="email"
                    value={email}
                    onChange={e => onChange(e)}
                  />
                  <label className="fg-label">Email Address</label>
                </div>
              </div>
              <div className="form-group fg-float">
                <div className="fg-line">
                  <input
                    type="password"
                    className="input-sm form-control fg-input"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                  />
                  <label className="fg-label">Password</label>
                </div>
              </div>
              <button type="submit" className="btn palette-Blue bg">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

SignIn.prototype = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { login })(SignIn);
