import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import Breadcrumb from "../breadcrumbs/Breadcrumb";

import { getDoctor } from "../../actions/doctor";
import Spinner from "../layouts/Spinner";

const DoctorProfile = ({ doctor: { doctor, loading }, getDoctor, match }) => {
    useEffect(() => {
        getDoctor(match.params.id);
    }, []);

    const img = "../../dist/img/user4-128x128.jpg";

    let content = "";

    if (doctor !== null) {
        content = (
            <Fragment>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <Breadcrumb
                        title={doctor.name}
                        m1url="/home"
                        m1="Home"
                        m2url="/doctors"
                        m2="Doctors"
                        m3={doctor.name}
                    />
                    {doctor === null ? (
                        <Fragment>Empty</Fragment>
                    ) : (
                        <Fragment>
                            {/* Main content */}
                            <section className="content">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-12">
                                            {/* Profile Image */}
                                            <div className="card card-primary card-outline">
                                                <div className="card-body box-profile">
                                                    <div className="text-center">
                                                        {doctor.avatar ? (
                                                            <img
                                                                className="profile-user-img img-fluid img-circle"
                                                                src={`/${doctor.avatar}`}
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
                                                        {doctor.name}
                                                    </h3>
                                                    <p className="text-muted text-center">
                                                        {doctor.designation}
                                                    </p>

                                                    <ul className="list-group list-group-unbordered mb-3">
                                                        <li className="list-group-item">
                                                            <b>Hospital</b>{" "}
                                                            <a
                                                                href="!#"
                                                                className="float-right"
                                                            >
                                                                {
                                                                    doctor
                                                                        .hospital
                                                                        .name
                                                                }
                                                            </a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <b>Register No</b>{" "}
                                                            <a
                                                                href="!#"
                                                                className="float-right"
                                                            >
                                                                {
                                                                    doctor.registerNumber
                                                                }
                                                            </a>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <b>Status</b>{" "}
                                                            <a
                                                                href="!#"
                                                                className="float-right"
                                                            >
                                                                {doctor.isActive ===
                                                                true
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
                                                    <h3 className="card-title">
                                                        Contact
                                                    </h3>
                                                </div>
                                                {/* /.card-header */}
                                                <div className="card-body">
                                                    <strong>
                                                        <i className="fas fa-book mr-1" />{" "}
                                                        Phone Number
                                                    </strong>
                                                    <p className="text-muted">
                                                        {doctor.phone}
                                                    </p>
                                                    <hr />
                                                    <strong>
                                                        <i className="fas fa-pencil-alt mr-1" />{" "}
                                                        Email
                                                    </strong>
                                                    <p className="text-muted">
                                                        <span className="tag tag-danger">
                                                            {doctor.email}
                                                        </span>
                                                    </p>
                                                    <hr />
                                                    <strong>
                                                        <i className="fas fa-map-marker-alt mr-1" />{" "}
                                                        Location
                                                    </strong>
                                                    <p className="text-muted">
                                                        {doctor.address}
                                                    </p>
                                                    <hr />
                                                </div>
                                                {/* /.card-body */}
                                            </div>
                                            {/* /.card */}
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

DoctorProfile.propTypes = {
    getDoctor: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    doctor: state.doctor
});

export default connect(mapStateToProps, { getDoctor })(DoctorProfile);
