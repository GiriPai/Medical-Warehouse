import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Spinner from "../layouts/Spinner";
import Breadcrumb from "../breadcrumbs/Breadcrumb";
import Alert from "../layouts/Alert";

import PatientItem from "./PatientItem";

import { connect } from "react-redux";
import { getPatients, deletePatient } from "../../actions/patient";

const Patients = ({
  patient: { patients, loading },

  deletePatient,
  getPatients
}) => {
  useEffect(() => {
    // datatable initializing
    const script = document.createElement("script");
    script.src = "/js_config/datatable.js";
    script.async = true;
    document.body.appendChild(script);
    // end datatable initializing
  }, []);
  useEffect(() => {
    getPatients();
  }, []);

  return loading ? (
    <Fragment>
      <Spinner />
    </Fragment>
  ) : (
    <Fragment>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        <Breadcrumb title="Patients" m1="Home" m1url="/home" m2="Patients" />
        <Alert />
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col">
                      <h3 className="card-title">Patients</h3>
                    </div>

                    <Link to="/patients/create">
                      <button className="btn btn-primary">Create New</button>
                    </Link>
                  </div>
                </div>

                {/* /.card-header */}
                <div className="card-body">
                  <table
                    id="example1"
                    className="table table-bordered table-striped projects"
                  >
                    <thead>
                      <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Reg. No.</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {patients.map(patient => (
                        <PatientItem
                          key={patient._id}
                          patient={patient}
                          deletePatient={deletePatient}
                        />
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Reg. No.</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
    </Fragment>
  );
};

Patients.propTypes = {
  getPatients: PropTypes.func.isRequired,
  deletePatient: PropTypes.func.isRequired,
  patient: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  patient: state.patient
});

export default connect(mapStateToProps, { getPatients, deletePatient })(
  Patients
);
