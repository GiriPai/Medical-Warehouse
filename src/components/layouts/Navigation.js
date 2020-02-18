import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navigation = ({ title }) => {
  return (
    <Fragment>
      <aside id="s-main-menu" className="sidebar">
        <div className="smm-header">
          <i
            className="zmdi zmdi-long-arrow-left"
            data-ma-action="sidebar-close"
          />
        </div>

        <ul className="main-menu">
          <li className={title === "Home" ? "active" : ""}>
            <Link to="/home">
              <i className="zmdi zmdi-home" /> Home
            </Link>
          </li>
          <li className={title === "Doctors" ? "active" : ""}>
            <Link to="/doctors">
              <i className="zmdi zmdi-widgets" /> Doctors
            </Link>
          </li>
          <li className={title === "Scan" ? "active" : ""}>
            <Link to="/scan">
              <i className="zmdi zmdi-flip" /> Scan
            </Link>
          </li>
        </ul>
      </aside>
    </Fragment>
  );
};

Navigation.propTypes = {};

export default Navigation;
