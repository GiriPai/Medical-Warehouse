import React, { Fragment, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import QrReader from "react-qr-reader";

import PropTypes from "prop-types";

const Scan = ({ history }) => {
    const [qr, setQr] = useState({
        delay: 300,
        result: "No result"
    });

    const handleScan = data => {
        if (data) {
            setQr({ ...qr, result: data });
            history.push(`/patient/${data}`);
        }
    };

    const handleError = err => {
        console.error(err);
    };
    return (
        <Fragment>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header-success">
                                    <div className="text-center">
                                        Scan QRCode of a Patient
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="align-content-center">
                                        <QrReader
                                            delay={qr.delay}
                                            onError={handleError}
                                            onScan={handleScan}
                                            style={{
                                                width: "100%"
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="text-center">
                                        {qr.result}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

Scan.propTypes = {};

export default withRouter(Scan);
