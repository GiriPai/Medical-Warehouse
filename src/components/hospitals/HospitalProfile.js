import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import Breadcrumb from "../breadcrumbs/Breadcrumb";

import { getHospital } from "../../actions/hospital";
import Spinner from "../layouts/Spinner";
import DoctorProfileItem from "./DoctorProfileItem";
import EditHospital from "./EditHospital";

const HospitalProfile = ({
  hospital: { hospital, loading },
  getHospital,
  match
}) => {
  // console.log(match.params.id);
  useEffect(() => {
    getHospital(match.params.id);
  }, []);

  useEffect(() => {
    // datatable initializing
    const script = document.createElement("script");
    script.src = "/js_config/datatable.js";
    script.async = true;
    document.body.appendChild(script);
    // end datatable initializing
  });

  const img = "../../dist/img/user4-128x128.jpg";

  let content = "";

  if (hospital !== null) {
    content = (
      <Fragment>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <Breadcrumb
            title={hospital.name}
            m1url="/home"
            m1="Home"
            m2url="/hospitals"
            m2="Hospital"
            m3={hospital.name}
          />
          {hospital === null ? (
            <Fragment>Empty</Fragment>
          ) : (
            <Fragment>
              {/* Main content */}
              <section className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-3">
                      {/* Profile Image */}
                      <div className="card card-primary card-outline">
                        <div className="card-body box-profile">
                          <div className="text-center">
                            {hospital.avatar ? (
                              <img
                                className="profile-user-img img-fluid img-circle"
                                src={`/${hospital.avatar}`}
                                alt="User"
                              />
                            ) : (
                              <img
                                className="profile-user-img img-fluid img-circle"
                                src={img}
                                alt="User"
                              />
                            )}
                          </div>
                          <h3 className="profile-username text-center">
                            {hospital.name}
                          </h3>
                          <p className="text-muted text-center">
                            {hospital.branch}
                          </p>
                          <p className="text-muted text-center">
                            {hospital.division}
                          </p>

                          <ul className="list-group list-group-unbordered mb-3">
                            <li className="list-group-item">
                              <b>Doctors</b>{" "}
                              <a href="!#" className="float-right">
                                {hospital.doctors.length}
                              </a>
                            </li>
                            <li className="list-group-item">
                              <b>Register No</b>{" "}
                              <a href="!#" className="float-right">
                                {hospital.registerNumber}
                              </a>
                            </li>
                            <li className="list-group-item">
                              <b>Status</b>{" "}
                              <a href="!#" className="float-right">
                                {hospital.isActive === true
                                  ? "Active"
                                  : "Inactive"}
                              </a>
                            </li>
                          </ul>
                          {/* <a
                                            href="#"
                                            className="btn btn-primary btn-block"
                                        >
                                            <b>Follow</b>
                                        </a> */}
                        </div>
                        {/* /.card-body */}
                      </div>
                      {/* /.card */}
                      {/* Contact Box */}
                      <div className="card card-primary">
                        <div className="card-header">
                          <h3 className="card-title">Contact</h3>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                          <strong>
                            <i className="fas fa-book mr-1" /> Phone Number
                          </strong>
                          <p className="text-muted">{hospital.phone}</p>
                          <hr />
                          <strong>
                            <i className="fas fa-pencil-alt mr-1" /> Email
                          </strong>
                          <p className="text-muted">
                            <span className="tag tag-danger">
                              {hospital.email}
                            </span>
                          </p>
                          <hr />
                          <strong>
                            <i className="fas fa-map-marker-alt mr-1" />{" "}
                            Location
                          </strong>
                          <p className="text-muted">{hospital.address}</p>
                          <hr />
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
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                href="#doctors"
                                data-toggle="tab"
                              >
                                Doctors
                              </a>
                            </li>
                            {/* <li className="nav-item">
                              <a
                                className="nav-link"
                                href="#timeline"
                                data-toggle="tab"
                              >
                                Profile
                              </a>
                            </li> */}
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="#settings"
                                data-toggle="tab"
                              >
                                Settings
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                          <div className="tab-content">
                            <div className="active tab-pane" id="doctors">
                              <table
                                id="example1"
                                className="table table-bordered table-striped projects"
                              >
                                <thead>
                                  <tr>
                                    <th>Avatar</th>
                                    <th>Name</th>
                                    <th>Register Number</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>

                                <tbody>
                                  {hospital.doctors.map(doc => (
                                    <DoctorProfileItem
                                      key={doc._id}
                                      data={doc}
                                    />
                                  ))}
                                </tbody>
                                <tfoot>
                                  <tr>
                                    <th>Avatar</th>
                                    <th>Name</th>
                                    <th>Register Number</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Status</th>
                                  </tr>
                                </tfoot>
                              </table>
                            </div>
                            {/* /.tab-pane */}
                            {/* <div className="tab-pane" id="timeline"></div> */}
                            {/* /.tab-pane */}
                            <div className="tab-pane" id="settings">
                              <EditHospital
                                hospital={hospital}
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
            </Fragment>
          )}
        </div>
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

HospitalProfile.propTypes = {
  getHospital: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  hospital: state.hospital
});

export default connect(mapStateToProps, { getHospital })(HospitalProfile);
