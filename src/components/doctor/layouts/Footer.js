import React, { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <div className="container-fluid">
                    <nav className="float-left"></nav>
                    <div className="copyright float-right">
                        Made with <i className="material-icons">favorite</i> by{" "}
                        <a href="https://www.creative-tim.com/" target="_blank">
                            Giri Pai U 15MSS017
                        </a>{" "}
                        for Medical Warehouse Porject.
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
