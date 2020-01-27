import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container-fluid">
          <nav className="float-left"></nav>
          <div className="copyright float-right">
            Made with <i className="material-icons">favorite</i> by{" "}
            <Link to="#!">Giri Pai U 15MSS017</Link> for Medical Warehouse
            Porject.
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
