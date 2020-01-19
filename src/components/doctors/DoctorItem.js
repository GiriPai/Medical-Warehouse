import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DoctorItem = ({ doctor }) => {
    return (
        <Fragment>
            <tr id={doctor._id}>
                <td>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <img
                                alt="Avatar"
                                className="table-avatar"
                                src={`/${doctor.avatar}`}
                            ></img>
                        </li>
                    </ul>
                </td>
                <td>{doctor.name}</td>

                <td>{doctor.registerNumber}</td>
                <td>{doctor.hospital.name}</td>
                <td>{doctor.hospital.division}</td>
                <td>
                    <Link
                        to={`/doctors/profile/${doctor._id}`}
                        className="btn btn-primary"
                    >
                        <i className="fas fa-info-circle"></i>
                    </Link>
                    {"    "}
                    {"    "}

                    {/* <button
                        className="btn btn-danger"
                        onClick={async e => {
                            await deleteHospital(hospital._id);
                            await getHospitals();
                        }}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button> */}
                </td>
            </tr>
        </Fragment>
    );
};

DoctorItem.propTypes = {};

export default DoctorItem;
