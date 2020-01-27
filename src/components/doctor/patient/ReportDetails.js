import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import Moment from "react-moment";
const ReportDetails = ({ show, handleClose, report }) => {
    let content = (
        <tr>
            <td colSpan={4}>No Reports available</td>
        </tr>
    );

    if (report) {
        content = (
            <Fragment>
                {/* <div className="simple-text purple-color">
                    {item.description}
                </div>
                <div className="simple-text purple-color">{item.cause}</div>{" "}
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.interval}</td>
                    <td>{item.days}</td>
                    <td>{item.description}</td>{" "}
                </tr> */}

                <div className="modal-body">
                    <div className="row">
                        <div
                            className="col-md-4 text-primary"
                            variant="primary"
                        >
                            Date
                        </div>
                        <div className="col-md-8 simple-text">
                            :{" "}
                            <Moment format="DD-MM-YYYY">
                                {report.createdAt}
                            </Moment>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-4 text-primary"
                            variant="primary"
                        >
                            Time
                        </div>
                        <div className="col-md-8 simple-text">
                            : <Moment format="HH:mm">{report.createdAt}</Moment>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-4 text-primary"
                            variant="primary"
                        >
                            Report Type
                        </div>
                        <div className="col-md-8 simple-text">
                            : {report.reportType}
                        </div>
                    </div>

                    {report.findings && (
                        <Fragment>
                            <div className="text-primary" variant="primary">
                                Findings :
                            </div>
                            <ul>
                                {report.findings.map((item, index) => {
                                    return <li key={index}>{item}</li>;
                                })}
                            </ul>{" "}
                        </Fragment>
                    )}
                    <div className="text-primary">Recommendations :</div>
                    <div className="simple-text">{report.recommendation}</div>

                    {report.hospital && (
                        <Fragment>
                            <hr />
                            <div className="text-info">Consulted By</div>
                            <div className="simple-text">
                                <div className="text-dark">
                                    {report.hospital.name},
                                </div>
                                {report.hospital.address},{" "}
                                {report.hospital.division},{" "}
                                {report.hospital.branch},
                            </div>
                            <div className="simple-text">
                                <i className="material-icons">mail</i>{" "}
                                {report.hospital.email}
                            </div>
                            <div className="simple-text">
                                <i className="material-icons">phone</i>{" "}
                                {report.hospital.phone}
                            </div>
                        </Fragment>
                    )}
                </div>
            </Fragment>
        );
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Additional Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ReportDetails;
