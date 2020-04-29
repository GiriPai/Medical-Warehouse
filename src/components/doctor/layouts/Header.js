import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

import { logout } from "../../../actions/auth";

const Header = ({ profile, loading, logout, title }) => {
  return loading && profile === null ? (
    <Fragment>
      <Spinner />
    </Fragment>
  ) : (
    <Fragment>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-minimize">
              <button
                id="minimizeSidebar"
                className="btn btn-just-icon btn-white btn-fab btn-round"
              >
                <i className="material-icons text_align-center visible-on-sidebar-regular">
                  more_vert
                </i>
                <i className="material-icons design_bullet-list-67 visible-on-sidebar-mini">
                  view_list
                </i>
              </button>
            </div>
            <a className="navbar-brand" href="#pablo">
              {title}
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar" />
            <span className="navbar-toggler-icon icon-bar" />
            <span className="navbar-toggler-icon icon-bar" />
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                                <a className="nav-link" href="#pablo">
                                    <i className="material-icons">dashboard</i>
                                    <p className="d-lg-none d-md-block">
                                        Stats
                                    </p>
                                </a>
                            </li> */}
           
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#pablo"
                  id="navbarDropdownProfile"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="material-icons">person</i>
                  <p className="d-lg-none d-md-block">Account</p>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownProfile"
                >
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                  {/* <a className="dropdown-item" href="#">
                                        Settings
                                    </a> */}
                  <div className="dropdown-divider" />
                  <a
                    className="dropdown-item"
                    href="#!"
                    onClick={e => {
                      logout();
                    }}
                  >
                    Log out
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </Fragment>
  );
};

Header.prototype = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  profile: state.profile.profile,
  loading: state.profile.loading
});

export default connect(mapStateToProps, { logout })(Header);
