import React, { Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { LOGOUT } from "../../actions/types";

const Header = ({ user, logout }) => {
  return (
    <Fragment>
      <div className="navbar-custom">
        <ul className="list-unstyled topnav-menu float-right mb-0">
          <li className="dropdown notification-list">
            <a
              className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src={`http://localhost:5000/${user.patient.avatar}`}
                alt="user-image"
                className="rounded-circle"
              />
              <span className="pro-user-name ml-1">
                {user.patient.name} <i className="mdi mdi-chevron-down" />
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
              {/* item*/}
              <div className="dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome !</h6>
              </div>
              {/* item*/}
              <div className="dropdown-divider" />
              {/* item*/}
              <a
                onClick={logout}
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="remixicon-logout-box-line" />
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
        <div className="logo-box">
          <a href="index.html" className="logo text-center">
            <span className="logo-lg">
              {/* <img src="assets/images/logo-light.png" alt height={20} /> */}
              <span className="logo-lg-text-light">Medical Warehouse</span>
            </span>
            <span className="logo-sm">
              <span className="logo-sm-text-dark">MWS</span>
              {/* <img src="assets/images/logo-sm.png" alt height={24} /> */}
            </span>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { logout })(Header);
