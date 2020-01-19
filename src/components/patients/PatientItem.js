import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import Moment from "react-moment";

import { getPatients, deletePatient } from "../../actions/patient";

import { connect } from "react-redux";

const PatientItem = ({ patient, deletePatient, getPatients }) => {
    return (
        <Fragment>
            <tr key={patient._id}>
                <td>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <img
                                alt="Avatar"
                                className="table-avatar"
                                src={`/${patient.avatar}`}
                            ></img>
                        </li>
                    </ul>
                </td>

                <td>{patient.name}</td>
                <td>{patient.registerNumber}</td>

                <td>{patient.email}</td>
                <td>{patient.isActive ? "Active" : "Inactive"}</td>
                <td>
                    <Link
                        to={`/patients/profile/${patient._id}`}
                        className="btn btn-primary"
                    >
                        <i className="fas fa-info-circle"></i>
                    </Link>

                    {"    "}
                    {"    "}

                    <button
                        className="btn btn-danger"
                        onClick={async e => {
                            await deletePatient(patient._id);
                            await getPatients();
                        }}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        </Fragment>
    );
};

PatientItem.propTypes = {
    patient: PropTypes.object.isRequired,
    deletePatient: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({

// });
export default connect(null, { getPatients, deletePatient })(PatientItem);
