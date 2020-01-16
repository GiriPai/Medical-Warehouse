import React, { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <footer className="main-footer">
                <strong>
                    Copyright © 2014-2019
                    <a href="http://adminlte.io">AdminLTE.io</a>.
                </strong>
                All rights reserved.
                <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 3.0.0-beta.2
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
