import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { login } from "../../actions/auth";
import Alert from "../layouts/Alert";

const Login = ({ login, isAuthenticated }) => {
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
    login(formData);
  };

  return isAuthenticated ? (
    <Redirect to="/home" />
  ) : (
    <Fragment>
      <div className="account-pages mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center w-75 m-auto">
                    <Link to="/">
                      <span>
                        <h3>Medical Warehouse System</h3>
                      </span>
                    </Link>
                    <p className="text-muted mb-4 mt-3">
                      Enter your email address and password to access your
                      profile.
                    </p>
                  </div>
                  <Alert />
                  <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group mb-3">
                      <label htmlFor="emailaddress">Email address</label>
                      <input
                        className="form-control"
                        type="email"
                        id="emailaddress"
                        required
                        placeholder="Enter your email"
                        value={email}
                        name="email"
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        className="form-control"
                        type="password"
                        required
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        name="password"
                        onChange={e => onChange(e)}
                      />
                    </div>

                    <div className="form-group mb-0 text-center">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        {" "}
                        Log In{" "}
                      </button>
                    </div>
                  </form>

                  {/* end card-body */}
                </div>
                {/* end card */}
              </div>{" "}
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
      </div>
    </Fragment>
  );
};

Login.prototype = {
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
