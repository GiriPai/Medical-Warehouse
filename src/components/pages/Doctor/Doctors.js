import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { getDoctors } from "../../../actions/doctor";
import Alert from "../../layouts/Alert";
import Preloader from "../../layouts/Preloader";
import Modal from "./components/Modal";

const Doctors = ({ getDoctors, doctors, loading }) => {
  useEffect(() => {
    getDoctors();
  }, []);

  const [modal, setModal] = useState({
    content: "",
    id: "",
    modalFade: "",
    display: "none"
  });

  const { modalFade, display, id, content } = modal;

  const showModal = (doctorContent, doctorId) => {
    setModal({
      content: doctorContent,
      id: doctorId,
      modalFade: "in",
      display: "block"
    });
  };

  const hideModal = e => {
    setModal({
      content: "",
      id: "",
      modalFade: "",
      display: "none"
    });
  };

  return loading ? (
    <Fragment>
      <Preloader />
    </Fragment>
  ) : (
    <Fragment>
      <section id="content">
        <div className="container">
          <Alert />
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-sm-6">
                  {" "}
                  <h2>Hospitals</h2>
                </div>
                <div className="col-sm-6">
                  <div className="pull-right">
                    <Link to="/doctor/add" className="btn btn-primary">
                      Add a New Doctor
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table
                // id="data-table-command"
                className="table table-striped table-vmiddle"
              >
                <thead>
                  <tr>
                    <th>Reg. No.</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.length <= 0 ? (
                    <Fragment>
                      <tr>
                        <td colSpan="4">No Data found</td>
                      </tr>
                    </Fragment>
                  ) : doctors ? (
                    doctors.map(doctor => (
                      <Fragment key={doctor.registerNumber}>
                        <tr>
                          <td>{doctor.registerNumber}</td>
                          <td>{doctor.name}</td>
                          <td>{doctor.designation}</td>
                          <td>
                            <Link
                              to={`/doctor/${doctor._id}`}
                              className="btn btn-sm btn-info"
                            >
                              View
                            </Link>{" "}
                            <button
                              onClick={e => showModal(doctor, doctor._id)}
                              className="btn btn-sm btn-success"
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                        {/* <Modal
                          doctor={doctor}
                          modalFade={modalFade}
                          hideModal={hideModal}
                          display={display}
                        /> */}
                      </Fragment>
                    ))
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Modal
        // doctor={doctor}
        content={content}
        id={id}
        modalFade={modalFade}
        hideModal={hideModal}
        display={display}
      />
    </Fragment>
  );
};

Doctors.prototype = {
  getDoctors: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  doctors: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  loading: state.doctor.loading,
  doctors: state.doctor.doctors
});
export default connect(mapStateToProps, { getDoctors })(Doctors);
