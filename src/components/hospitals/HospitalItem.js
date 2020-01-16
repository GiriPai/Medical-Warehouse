import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getHospitals } from "../../actions/hospital";
// import Moment from "react-moment";

import { connect } from "react-redux";

const HospitalItem = ({ auth, hospital, deleteHospital, getHospitals }) => {
    return (
        <Fragment>
            <tr id={hospital._id}>
                <td>{hospital.registerNumber}</td>
                <td>{hospital.name}</td>
                <td>{hospital.branch}</td>
                <td>{hospital.division}</td>
                <td>{hospital.doctors.length}</td>
                <td>
                    <Link
                        to={`/hospital/${hospital._id}`}
                        className="btn btn-primary"
                    >
                        <i className="fas fa-info-circle"></i>
                    </Link>
                    {"    "}
                    {"    "}

                    <button
                        className="btn btn-danger"
                        onClick={async e => {
                            await deleteHospital(hospital._id);
                            await getHospitals();
                        }}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        </Fragment>
    );
};

HospitalItem.propTypes = {
    hospital: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteHospital: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    getHospitals: PropTypes.func.isRequired
});
export default connect(mapStateToProps, { getHospitals })(HospitalItem);
