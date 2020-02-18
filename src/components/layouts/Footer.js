import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer">
        Copyright © 2015 Material Admin
        <ul className="f-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Reports</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </footer>
    </Fragment>
  );
};

export default Footer;
