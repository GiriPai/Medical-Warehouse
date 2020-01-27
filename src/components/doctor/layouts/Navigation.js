import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../actions/auth";

const Navigation = ({ profile: { profile }, logout }) => {
  const { avatar, name } = profile;
  return (
    <Fragment>
      <div
        className="sidebar"
        data-color="rose"
        data-background-color="black"
        data-image="../assets/img/sidebar-1.jpg"
      >
        <div className="logo">
          <Link to="/home" className="simple-text text-center logo-normal">
            Medical WareHouse
          </Link>
        </div>
        <div className="sidebar-wrapper">
          <div className="user">
            <div className="photo">
              <img src={`/${avatar}`} />
            </div>
            <div className="user-info">
              <a
                data-toggle="collapse"
                href="#collapseExample"
                className="username"
              >
                <span>
                  {name}
                  <b className="caret" />
                </span>
              </a>
              <div className="collapse" id="collapseExample">
                <ul className="nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      <span className="sidebar-mini"> MP </span>
                      <span className="sidebar-normal"> My Profile </span>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span className="sidebar-mini">
                                                {" "}
                                                EP{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Edit Profile{" "}
                                            </span>
                                        </a>
                                    </li> */}
                  <li className="nav-item">
                    <a href="#!" className="nav-link" onClick={e => logout()}>
                      <span className="sidebar-mini"> L </span>
                      <span className="sidebar-normal"> Logout </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="nav">
            <li className="nav-item ">
              <Link className="nav-link" to="/home">
                <i className="material-icons">dashboard</i>
                <p> Dashboard </p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/scan">
                <i className="material-icons">flip</i>
                <p> Scan </p>
              </Link>
            </li>
            {/* <li className="nav-item ">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                // href="#pagesExamples"
                            >
                                <i className="material-icons">apps</i>
                                <p>
                                    {" "}
                                    Scan
                                    <b className="caret" />
                                </p>
                            </a>
                            <div className="collapse" id="pagesExamples">
                                <ul className="nav">
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="pages/pricing.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                P{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Pricing{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="pages/rtl.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                RS{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                RTL Support{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="pages/timeline.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                T{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Timeline{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="pages/login.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                LP{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Login Page{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="pages/register.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                RP{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Register Page{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="pages/lock.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                LSP{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Lock Screen Page{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="pages/user.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                UP{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                User Profile{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="pages/error.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                E{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Error Page{" "}
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item ">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                href="#componentsExamples"
                            >
                                <i className="material-icons">apps</i>
                                <p>
                                    {" "}
                                    Components
                                    <b className="caret" />
                                </p>
                            </a>
                            <div className="collapse" id="componentsExamples">
                                <ul className="nav">
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            data-toggle="collapse"
                                            href="#componentsCollapse"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                MLT{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Multi Level Collapse
                                                <b className="caret" />
                                            </span>
                                        </a>
                                        <div
                                            className="collapse"
                                            id="componentsCollapse"
                                        >
                                            <ul className="nav">
                                                <li className="nav-item ">
                                                    <a
                                                        className="nav-link"
                                                        href="#0"
                                                    >
                                                        <span className="sidebar-mini">
                                                            {" "}
                                                            E{" "}
                                                        </span>
                                                        <span className="sidebar-normal">
                                                            {" "}
                                                            Example{" "}
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="components/buttons.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                B{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Buttons{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="components/grid.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                GS{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Grid System{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="components/panels.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                P{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Panels{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="components/sweet-alert.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                SA{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Sweet Alert{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="components/notifications.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                N{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Notifications{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="components/icons.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                I{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Icons{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="components/typography.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                T{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Typography{" "}
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item ">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                href="#formsExamples"
                            >
                                <i className="material-icons">content_paste</i>
                                <p>
                                    {" "}
                                    Forms
                                    <b className="caret" />
                                </p>
                            </a>
                            <div className="collapse" id="formsExamples">
                                <ul className="nav">
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="forms/regular.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                RF{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Regular Forms{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="forms/extended.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                EF{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Extended Forms{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="forms/validation.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                VF{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Validation Forms{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="forms/wizard.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                W{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Wizard{" "}
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item ">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                href="#tablesExamples"
                            >
                                <i className="material-icons">grid_on</i>
                                <p>
                                    {" "}
                                    Tables
                                    <b className="caret" />
                                </p>
                            </a>
                            <div className="collapse" id="tablesExamples">
                                <ul className="nav">
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="tables/regular.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                RT{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Regular Tables{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="tables/extended.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                ET{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Extended Tables{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="tables/datatables.net.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                DT{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                DataTables.net{" "}
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item ">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                href="#mapsExamples"
                            >
                                <i className="material-icons">place</i>
                                <p>
                                    {" "}
                                    Maps
                                    <b className="caret" />
                                </p>
                            </a>
                            <div className="collapse" id="mapsExamples">
                                <ul className="nav">
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="maps/google.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                GM{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Google Maps{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="maps/fullscreen.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                FSM{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Full Screen Map{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a
                                            className="nav-link"
                                            href="maps/vector.html"
                                        >
                                            <span className="sidebar-mini">
                                                {" "}
                                                VM{" "}
                                            </span>
                                            <span className="sidebar-normal">
                                                {" "}
                                                Vector Map{" "}
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="#">
                                <i className="material-icons">widgets</i>
                                <p> Widgets </p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="charts.html">
                                <i className="material-icons">timeline</i>
                                <p> Charts </p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="calendar.html">
                                <i className="material-icons">date_range</i>
                                <p> Calendar </p>
                            </a>
                        </li> */}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

Navigation.prototype = {
  profile: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { logout })(Navigation);
