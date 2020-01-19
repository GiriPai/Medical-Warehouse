import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { connect } from "react-redux";

import { getDoctors } from "../../actions/doctor";
import Spinner from "../layouts/Spinner";
import DoctorItem from "./DoctorItem";
import Alert from "../layouts/Alert";

const Doctors = ({ doctor, getDoctors }) => {
    useEffect(() => {
        getDoctors();
    }, []);

    return doctor.loading ? (
        <Fragment>
            <Spinner />
        </Fragment>
    ) : (
        <Fragment>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Doctors</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Doctors
                                    </li>
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
                                            <h3 className="card-title">
                                                Doctors
                                            </h3>
                                        </div>

                                        {/* <Link to="/doctors/create">
                                            <button className="btn btn-primary">
                                                Create New
                                            </button>
                                        </Link> */}
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
                                                <th>Register Number</th>
                                                <th>Hospital</th>
                                                <th>Division</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {doctor.doctors.map(doc => (
                                                <DoctorItem
                                                    key={doc._id}
                                                    doctor={doc}
                                                    // deleteDoctor={deleteDoctor}
                                                />
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Avatar</th>
                                                <th>Name</th>
                                                <th>Register Number</th>
                                                <th>Hospital</th>
                                                <th>Division</th>
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

Doctors.propTypes = {
    doctor: PropTypes.object.isRequired,
    getDoctors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    doctor: state.doctor
});

export default connect(mapStateToProps, { getDoctors })(Doctors);
