import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import Spinner from "./Spinner";

const Header = ({ auth, logout }) => {
    return auth.loading && auth === null ? (
        <Spinner />
    ) : (
        <Fragment>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            data-widget="pushmenu"
                            to="#"
                        >
                            <i className="fas fa-bars" />
                        </Link>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="/home" className="nav-link">
                            Home
                        </a>
                    </li>
                </ul>
                {/* SEARCH FORM */}
                {/* <form className="form-inline ml-3">
                    <div className="input-group input-group-sm">
                        <input
                            className="form-control form-control-navbar"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                </form> */}
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="control-sidebar"
                            data-slide="true"
                            href="#!"
                            onClick={logout}
                        >
                            <i className="fas fa-sign-out-alt"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
};

Header.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
