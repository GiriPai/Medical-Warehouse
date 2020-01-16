import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout, loadUser } from "../../actions/auth";
// import { getCurrentProfile } from "../../actions/profile";

import Spinner from "./Spinner";

const Navigation = ({ auth, logout }) => {
    return auth.user === null ? (
        <Spinner />
    ) : (
        <Fragment>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link to="index3.html" className="brand-link">
                    <img
                        src="/dist/img/AdminLTELogo.png"
                        alt="Logo"
                        className="brand-image img-circle elevation-3"
                        style={{ opacity: ".8" }}
                    />
                    <span className="brand-text font-weight-light">Admin</span>
                </Link>
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            {!auth ? (
                                <img
                                    src="/dist/img/user2-160x160.jpg"
                                    className="img-circle elevation-2"
                                    alt="User"
                                />
                            ) : (
                                <img
                                    src={`/` + auth.user.avatar}
                                    className="img-circle elevation-2"
                                    alt={auth.user.name}
                                />
                            )}
                        </div>
                        <div className="info">
                            <Link to="#" className="d-block">
                                {auth.user.name}
                            </Link>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            {/* Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library */}
                            {/* <li className="nav-item has-treeview menu-open">
                                <Link to="#" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link
                                            to="./index.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Dashboard v1</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="./index2.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Dashboard v2</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="./index3.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Dashboard v3</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>Dashboard</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/hospitals" className="nav-link">
                                    <i className="nav-icon fas fa-hospital-alt"></i>
                                    <p>Hospitals</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="pages/widgets.html"
                                    className="nav-link"
                                >
                                    <i className=" nav-icon fas fa-user-md"></i>
                                    <p>Doctors</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="pages/widgets.html"
                                    className="nav-link"
                                >
                                    <i className="nav-icon fas fa-procedures" />

                                    <p>Patients</p>
                                </Link>
                            </li>
                            <li className="nav-item has-treeview">
                                <Link to="#" className="nav-link">
                                    <i className="nav-icon fas fa-copy" />
                                    <p>
                                        Layout Options
                                        <i className="fas fa-angle-left right" />
                                        <span className="badge badge-info right">
                                            6
                                        </span>
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link
                                            to="pages/layout/top-nav.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Top Navigation</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/layout/boxed.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Boxed</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/layout/fixed-sidebar.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Fixed Sidebar</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/layout/fixed-topnav.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Fixed Navbar</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/layout/fixed-footer.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Fixed Footer</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/layout/collapsed-sidebar.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Collapsed Sidebar</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-treeview">
                                <Link to="#" className="nav-link">
                                    <i className="nav-icon fas fa-chart-pie" />
                                    <p>
                                        Charts
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link
                                            to="pages/charts/chartjs.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>ChartJS</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/charts/flot.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Flot</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/charts/inline.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Inline</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-treeview">
                                <Link to="#" className="nav-link">
                                    <i className="nav-icon fas fa-tree" />
                                    <p>
                                        UI Elements
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link
                                            to="pages/UI/general.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>General</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/UI/icons.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Icons</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/UI/buttons.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Buttons</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/UI/sliders.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Sliders</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/UI/modals.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Modals &amp; Alerts</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/UI/navbar.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Navbar &amp; Tabs</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-treeview">
                                <Link to="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit" />
                                    <p>
                                        Forms
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link
                                            to="pages/forms/general.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>General Elements</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/forms/advanced.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Advanced Elements</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/forms/editors.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Editors</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-treeview">
                                <Link to="#" className="nav-link">
                                    <i className="nav-icon fas fa-table" />
                                    <p>
                                        Tables
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link
                                            to="pages/tables/simple.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Simple Tables</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/tables/data.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>DataTables</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="pages/tables/jsgrid.html"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>jsGrid</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </Fragment>
    );
};

Navigation.prototypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    loadUser: PropTypes.func.isRequired
    // getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {
    logout,
    loadUser
})(Navigation);
