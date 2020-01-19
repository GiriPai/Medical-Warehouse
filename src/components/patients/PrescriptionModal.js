import React from "react";
import { Modal, Button } from "react-bootstrap";
const PrescriptionModal = ({ show, handleClose, prescriptions }) => {
    let content = (
        <tr>
            <td colSpan={4}>No prescriptions available</td>
        </tr>
    );

    if (prescriptions) {
        content = prescriptions.map(item => (
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.interval}</td>
                <td>{item.days}</td>
                <td>{item.description}</td>
            </tr>
        ));
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Prescriptions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th> Medicine</th>
                                <th> Interval</th>
                                <th> Period</th>
                                <th> Description</th>
                            </tr>
                        </thead>
                        <tbody>{content}</tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default PrescriptionModal;
