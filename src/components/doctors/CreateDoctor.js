import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Breadcrumb from "../breadcrumbs/Breadcrumb";
import Alert from "../layouts/Alert";

import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { getHospitals } from "../../actions/hospital";
import { addDoctor } from "../../actions/doctor";

import Spinner from "../layouts/Spinner";

const CreateDoctor = ({ getHospitals, addDoctor, hospital, history }) => {
    useEffect(() => {
        getHospitals();
    }, []);

    const [formData, setFormData] = useState({
        hospitalID: "",
        registerNumber: "",
        name: "",
        email: "",
        password: "",
        designation: "",
        phone: "",
        address: "",
        avatar: "",
        isActive: false
    });

    const {
        hospitalID,
        registerNumber,
        name,
        email,
        password,
        designation,
        phone,
        address,
        isActive,
        avatar
    } = formData;

    const data = new FormData();
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onAvatarChange = e => {
        setFormData({ ...formData, avatar: e.target.files[0] });
    };
    const onCheckBoxChange = e => {
        setFormData({ ...formData, isActive: !isActive });
    };
    const onSubmit = e => {
        e.preventDefault();

        data.append("registerNumber", registerNumber);
        data.append("hospital", hospitalID);

        data.append("name", name);
        data.append("email", email);
        data.append("designation", designation);
        data.append("password", password);

        data.append("address", address);
        data.append("phone", phone);
        data.append("isActive", isActive);

        data.append("avatar", avatar);

        addDoctor(data, history);
    };

    return hospital.loading ? (
        <Fragment>
            <Spinner />
        </Fragment>
    ) : (
        <Fragment>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                <Breadcrumb
                    title="Create A New Doctor"
                    m1="Home"
                    m1url="/home"
                    m2="Doctors"
                    m2url="/doctors"
                    m3="Register Doctor"
                />
                <Alert />
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            {/* left column */}
                            <div className="col-md-12">
                                {/* general form elements */}
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            Create a Doctor
                                        </h3>
                                    </div>
                                    {/* /.card-header */}
                                    {/* form start */}
                                    <form
                                        name="createForm"
                                        action="!#"
                                        onSubmit={e => onSubmit(e)}
                                    >
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label>Hospital</label>
                                                <select
                                                    className="form-control"
                                                    name="hospitalID"
                                                    onChange={e => onChange(e)}
                                                    value={hospitalID}
                                                >
                                                    <option value="">
                                                        {" "}
                                                        --- Select ---{" "}
                                                    </option>

                                                    {hospital.hospitals.map(
                                                        hospital => (
                                                            <option
                                                                key={
                                                                    hospital._id
                                                                }
                                                                value={
                                                                    hospital._id
                                                                }
                                                            >
                                                                {
                                                                    hospital.registerNumber
                                                                }
                                                                {hospital.name}{" "}
                                                                -{" "}
                                                                {
                                                                    hospital.branch
                                                                }{" "}
                                                                -{" "}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="registernumber">
                                                    Register Number
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="registernumber"
                                                    placeholder="Enter register number"
                                                    name="registerNumber"
                                                    value={registerNumber}
                                                    onChange={e => onChange(e)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Enter name"
                                                    name="name"
                                                    value={name}
                                                    onChange={e => onChange(e)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">
                                                    Email address
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    placeholder="Enter email"
                                                    name="email"
                                                    value={email}
                                                    onChange={e => onChange(e)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    placeholder="Password"
                                                    name="password"
                                                    value={password}
                                                    onChange={e => onChange(e)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="designation">
                                                    Designation
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="designation"
                                                    placeholder="Enter email"
                                                    name="designation"
                                                    value={designation}
                                                    onChange={e => onChange(e)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="Phone">
                                                    Phone
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Phone"
                                                    placeholder="Enter phone number"
                                                    name="phone"
                                                    value={phone}
                                                    onChange={e => onChange(e)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="Address">
                                                    Address
                                                </label>
                                                <textarea
                                                    type="textarea"
                                                    className="form-control"
                                                    id="Address"
                                                    placeholder="Enter Address"
                                                    name="address"
                                                    value={address}
                                                    onChange={e => onChange(e)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">
                                                    File input
                                                </label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input
                                                            type="file"
                                                            className="custom-file-input"
                                                            id="exampleInputFile"
                                                            name="avatar"
                                                            onChange={e =>
                                                                onAvatarChange(
                                                                    e
                                                                )
                                                            }
                                                        />
                                                        <label
                                                            className="custom-file-label"
                                                            htmlFor="exampleInputFile"
                                                        >
                                                            Choose file
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="exampleCheck1"
                                                    name="isActive"
                                                    checked={isActive}
                                                    onChange={e =>
                                                        onCheckBoxChange(e)
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="exampleCheck1"
                                                >
                                                    Set Active
                                                </label>
                                            </div>
                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <div className="row ">
                                                <div className="col-lg-11 col-md-10">
                                                    <input
                                                        type="submit"
                                                        className="btn btn-primary"
                                                        value="Submit"
                                                    />
                                                </div>
                                                <div className="col-md-1">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-default"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/*/.col (left) */}
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
};

CreateDoctor.propTypes = {
    getHospitals: PropTypes.func.isRequired,
    hospital: PropTypes.object.isRequired,
    addDoctor: PropTypes.func.isRequired
};

const mapStateToprops = state => ({
    hospital: state.hospital
});

export default connect(mapStateToprops, { getHospitals, addDoctor })(
    withRouter(CreateDoctor)
);
