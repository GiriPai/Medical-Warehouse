import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
const RecordDetails = ({ show, handleClose, record }) => {
    let content = (
        <tr>
            <td colSpan={4}>No Reports available</td>
        </tr>
    );

    if (record) {
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
                    <div className="text-primary" variant="primary">
                        Description
                    </div>
                    <p>{record.description}</p>
                    <div className="text-primary" variant="primary">
                        Cause
                    </div>
                    <p>{record.cause}</p>
                    {record.findings && (
                        <Fragment>
                            <div className="text-primary" variant="primary">
                                Findings
                            </div>
                            <ul>
                                {record.findings.map((item, index) => {
                                    return <li key={index}>{item}</li>;
                                })}
                            </ul>{" "}
                        </Fragment>
                    )}
                    {record.prescription && (
                        <Fragment>
                            <div className="text-primary" variant="primary">
                                Prescriptions
                            </div>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className="text-info">
                                        <td>Name</td>
                                        <td>Interval</td>
                                        <td>Days</td>
                                        <td>Description</td>
                                    </thead>
                                    <tbody>
                                        {record.prescription.map(
                                            (item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="simple-text">
                                                            {item.name}
                                                        </td>
                                                        <td className="simple-text">
                                                            {item.interval}
                                                        </td>
                                                        <td className="simple-text">
                                                            {item.name}
                                                        </td>
                                                        <td className="simple-text">
                                                            {item.description}
                                                        </td>
                                                    </tr>
                                                );
                                            }
                                        )}
                                    </tbody>
                                </table>
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

export default RecordDetails;
