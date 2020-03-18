import React, { Fragment, useEffect, useState } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import Spinner from "../layouts/Spinner";
import Breadcrumb from "../breadcrumbs/Breadcrumb";
import { getPatient } from "../../actions/patient";
import PrescriptionModal from "./PrescriptionModal";
import EditPatient from "./EditPatient";
const PatientProfile = ({
  match,
  getPatient,
  patient: { patient, loading }
}) => {
  const [modal, setModal] = useState({
    data: [],
    showModal: false
  });

  const handleShow = prescriptions => {
    setModal({ data: prescriptions, showModal: true });
  };

  const handleClose = () => {
    setModal({ data: {}, showModal: false });
  };

  useEffect(() => {
    getPatient(match.params.id);
    console.log("here");
  }, []);

  let content = "";

  if (patient !== null) {
    content = (
      <Fragment>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          <Breadcrumb
            title="Profile"
            m1="Home"
            m1url="/home"
            m2="Patient"
            m2url="/patients"
            m3={patient.patient.name}
          />
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  {/* Profile Image */}
                  <div className="card card-primary card-outline">
                    <div className="card-body box-profile">
                      <div className="text-center">
                        <img
                          className="profile-user-img img-fluid img-circle"
                          src={`/${patient.patient.avatar}`}
                          alt="User profile picture"
                        />
                      </div>
                      <h3 className="profile-username text-center">
                        {patient.patient.name}
                      </h3>
                      <p className="text-muted text-center">
                        {patient.patient.email}
                      </p>
                      <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                          <b>Reg. No.</b>{" "}
                          <a className="float-right">
                            {patient.patient.registerNumber}
                          </a>
                        </li>
                        <li className="list-group-item">
                          <b>DOB</b>{" "}
                          <a className="float-right">{patient.patient.dob}</a>
                        </li>
                        <li className="list-group-item">
                          <b>Phone</b>{" "}
                          <a className="float-right">{patient.patient.phone}</a>
                        </li>
                        <li className="list-group-item">
                          <b>Gender</b>{" "}
                          <a className="float-right">
                            {patient.patient.gender}
                          </a>
                        </li>
                        <li className="list-group-item">
                          <b>Address</b>{" "}
                          <div>
                            <a className="float-right">
                              {patient.patient.address}
                            </a>
                          </div>
                        </li>
                      </ul>
                      <a
                        href={`http://localhost:5000/${patient.patient.idCard}`}
                        className="btn btn-primary btn-block"
                        download
                      >
                        <b>Download ID</b>
                      </a>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                  {/* About Me Box */}
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title">QR Code</h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src={`/${patient.patient.qrcode}`}
                          alt="User profile picture"
                        />
                      </div>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.col */}
                <div className="col-md-9">
                  <div className="card">
                    <div className="card-header p-2">
                      <ul className="nav nav-pills">
                        {/* <li className="nav-item">
                                                    <a
                                                        className="nav-link active"
                                                        href="#activity"
                                                        data-toggle="tab"
                                                    >
                                                        Activity
                                                    </a>
                                                </li> */}
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#timeline"
                            data-toggle="tab"
                          >
                            Timeline
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#edit"
                            data-toggle="tab"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="tab-content">
                        {/* /.tab-pane */}
                        <div className="active tab-pane" id="timeline">
                          {/* The timeline */}
                          <ul className="timeline timeline-inverse">
                            {/* timeline time label */}
                            {patient.record.map(rec => (
                              <Fragment key={rec._id}>
                                <li className="time-label">
                                  <span className="bg-success">
                                    <Moment fromNow>{rec.createdAt}</Moment>
                                  </span>
                                </li>

                                <li>
                                  <i className="fas fa-clock bg-primary" />
                                  <div className="timeline-item">
                                    <span className="time">
                                      <i className="far fa-clock" />{" "}
                                      <Moment format="DD-MM-YYYY">
                                        {rec.createdAt}
                                      </Moment>
                                    </span>
                                    <h3 className="timeline-header">
                                      <a href="#">{rec.doctor.name}</a>
                                      {"  "}
                                      of {"  "}
                                      <a href="#">{rec.hospital.name}</a>
                                      {"  "}
                                      checked you.
                                    </h3>
                                    <div className="timeline-body">
                                      <p>
                                        <b>CAUSE</b> <i>{rec.cause}</i>
                                      </p>
                                      <p>
                                        <b>DESCRIPTION</b>{" "}
                                        <i>{rec.description}</i>
                                      </p>
                                      <div>
                                        <b>FINDINGS</b>{" "}
                                        <i>
                                          {rec.findings.map(
                                            (finding, index) => (
                                              <Fragment key={index}>
                                                <p>
                                                  <b>
                                                    # {"  "}
                                                    {index + 1} {"  "}
                                                  </b>

                                                  {finding}
                                                </p>
                                              </Fragment>
                                            )
                                          )}
                                        </i>
                                      </div>
                                      <div>
                                        <b>RECOMMENDATION</b> {"  "}{" "}
                                        {rec.recommendation}
                                      </div>
                                    </div>

                                    <div className="timeline-footer">
                                      <button
                                        onClick={e =>
                                          handleShow(rec.prescription)
                                        }
                                        className="btn btn-primary btn-sm"
                                      >
                                        View Prescriptions
                                      </button>
                                      {/* <a
                                                                                    href="#"
                                                                                    className="btn btn-danger btn-sm"
                                                                                >
                                                                                    Delete
                                                                                </a> */}
                                    </div>
                                  </div>
                                </li>

                                <PrescriptionModal
                                  handleClose={handleClose}
                                  prescriptions={modal.data}
                                  show={modal.showModal}
                                />
                              </Fragment>
                            ))}

                            <li>
                              <i className="far fa-clock bg-gray" />
                            </li>
                          </ul>
                        </div>
                        {/* /.tab-pane */}
                        <div className="tab-pane" id="edit">
                          <EditPatient
                            patient={patient}
                            userId={match.params.id}
                          />
                        </div>
                        {/* /.tab-pane */}
                      </div>
                      {/* /.tab-content */}
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.nav-tabs-custom */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
      </Fragment>
    );
  }

  return loading ? (
    <Fragment>
      <Spinner />
    </Fragment>
  ) : (
    content
  );
};

PatientProfile.propTypes = {
  history: PropTypes.object.isRequired,
  patient: PropTypes.object.isRequired,
  getPatient: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  patient: state.patient
});
export default connect(mapStateToProps, { getPatient })(PatientProfile);
