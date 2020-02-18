import React, { Fragment } from "react";

const Header = ({ user, logout }) => {
  return (
    <Fragment>
      <header id="header" className="media">
        <div className="pull-left h-logo">
          <a href="index.html" className="hidden-xs">
            Hospital Repo
            <small>{user.registerNumber}</small>
          </a>
          <div
            className="menu-collapse"
            data-ma-action="sidebar-open"
            data-ma-target="main-menu"
          >
            <div className="mc-wrap">
              <div className="mcw-line top palette-White bg" />
              <div className="mcw-line center palette-White bg" />
              <div className="mcw-line bottom palette-White bg" />
            </div>
          </div>
        </div>
        <ul className="pull-right h-menu">
          <li className="hm-search-trigger">
            <a href="#" data-ma-action="search-open">
              <i className="hm-icon zmdi zmdi-search" />
            </a>
          </li>
          <li
            className="hm-alerts"
            data-user-alert="sua-messages"
            data-ma-action="sidebar-open"
            data-ma-target="user-alerts"
          >
            <a href="#">
              <i className="hm-icon zmdi zmdi-notifications" />
            </a>
          </li>
          <li className="dropdown hm-profile">
            <a data-toggle="dropdown" href="#">
              <img src={`/${user.avatar}`} alt="user" />
            </a>
            <ul className="dropdown-menu pull-right dm-icon">
              <li>
                <a href="profile-about.html">
                  <i className="zmdi zmdi-account" /> View Profile
                </a>
              </li>
              <li>
                <a href="#" onClick={e => logout()}>
                  <i className="zmdi zmdi-time-restore" /> Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="media-body h-search">
          <form className="p-relative">
            <input
              type="text"
              className="hs-input"
              placeholder="Search for people, files & reports"
            />
            <i
              className="zmdi zmdi-search hs-reset"
              data-ma-action="search-clear"
            />
          </form>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
