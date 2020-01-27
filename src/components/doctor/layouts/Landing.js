import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { login } from "../../../actions/auth";
import Alert from "./Alert";

const Landing = ({ isAuthenticated, login }) => {
    useEffect(() => {
        // Login Card Effect initializing
        const script = document.createElement("script");
        script.src = "/js_config/loginEffect.js";
        script.async = true;
        document.body.appendChild(script);
        // end Login Card Effect initializing
    }, []);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(formData);
    };

    if (isAuthenticated) {
        return <Redirect to="/home" />;
    }
    return (
        <Fragment>
            <div className="wrapper wrapper-full-page">
                <div
                    className="page-header login-page header-filter"
                    filter-color="black"
                    style={{
                        backgroundImage: 'url("../../assets/img/login.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "top center"
                    }}
                >
                    {/*   you can change the color of the filter page using: data-color="blue | purple | green | orange | red | rose " */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                                <form
                                    className="form"
                                    onSubmit={e => onSubmit(e)}
                                >
                                    <div className="card card-login card-hidden">
                                        <div className="card-header card-header-rose text-center">
                                            <h4 className="card-title">
                                                Login
                                            </h4>
                                        </div>
                                        <div className="card-body ">
                                            <Alert />
                                            <p className="card-description text-center">
                                                Enter The Credentials
                                            </p>
                                            {/* <span className="bmd-form-group">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="material-icons">
                                                                    face
                                                                </i>
                                                            </span>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="First Name..."
                                                        />
                                                    </div>
                                                </span> */}
                                            <span className="bmd-form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="material-icons">
                                                                email
                                                            </i>
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email..."
                                                        name="email"
                                                        value={email}
                                                        onChange={e => {
                                                            onChange(e);
                                                        }}
                                                    />
                                                </div>
                                            </span>
                                            <span className="bmd-form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="material-icons">
                                                                lock_outline
                                                            </i>
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Password..."
                                                        name="password"
                                                        value={password}
                                                        onChange={e => {
                                                            onChange(e);
                                                        }}
                                                    />
                                                </div>
                                            </span>
                                        </div>
                                        <div className="card-footer justify-content-center">
                                            <button
                                                type="submit"
                                                className="btn btn-rose btn-link btn-lg"
                                            >
                                                Lets Go
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className="container">
                            <div className="copyright float-right">
                                made with{" "}
                                <i className="material-icons">favorite</i> by{" "}
                                <a href="#!" target="_blank">
                                    {" "}
                                    Giri Pai U
                                </a>{" "}
                                for Medical Warehouse Project
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </Fragment>
    );
};

Landing.prototype = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Landing);
