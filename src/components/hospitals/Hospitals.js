import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getHospitals } from "../../actions/hospital";
import { deleteHospital } from "../../actions/hospital";

import Spinner from "../layouts/Spinner";
import HospitalItem from "./HospitalItem";
import Alert from "../layouts/Alert";

const Hospitals = ({
  getHospitals,
  hospital: { hospitals, loading },
  deleteHospital
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
    getHospitals();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Hospitals</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Hospitals</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        <Alert />
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col">
                      <h3 className="card-title">Hospitals</h3>
                    </div>

                    <Link to="/hospitals/create">
                      <button className="btn btn-primary">Create New</button>
                    </Link>
                  </div>
                </div>

                {/* /.card-header */}
                <div className="card-body">
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>Hospital ID</th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Division</th>
                        <th>Doctors</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {hospitals.map(hospital => (
                        <HospitalItem
                          key={hospital._id}
                          hospital={hospital}
                          deleteHospital={deleteHospital}
                        />
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Hospital ID</th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Division</th>
                        <th>Doctors</th>
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

Hospitals.propTypes = {
  getHospitals: PropTypes.func.isRequired,
  hospital: PropTypes.object.isRequired,
  deleteHospital: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  hospital: state.hospital
});
export default connect(mapStateToProps, { getHospitals, deleteHospital })(
  Hospitals
);
