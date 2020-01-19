import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { updatePatient } from "../../actions/patient";
import Alert from "../layouts/Alert";

const EditPatient = ({ patient: { patient }, userId, updatePatient }) => {
    const [formData, setFormData] = useState({
        registerNumber: "",
        name: "",
        email: "",
        password: "",
        gender: "",
        dob: "",
        address: "",
        phone: "",
        isActive: ""
    });
    const {
        registerNumber,
        name,
        email,
        password,
        gender,
        dob,
        address,
        phone,
        isActive
    } = formData;

    useEffect(() => {
        setFormData({
            registerNumber: patient.patient.registerNumber,
            name: patient.patient.name,
            email: patient.patient.email,
            password: "",
            gender: patient.patient.gender,
            dob: patient.patient.dob,
            address: patient.patient.address,
            phone: patient.patient.phone,
            isActive: patient.patient.isActive
        });
    }, []);

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const setIsActive = e => {
        setFormData({ ...formData, isActive: !isActive });
    };

    const onSubmit = async e => {
        e.preventDefault();
        const data = new FormData();
        data.registerNumber = formData.registerNumber;
        data.name = formData.name;
        data.email = formData.email;
        if (formData.password != "" && formData.password != null) {
            data.password = formData.password;
        } else {
            data.password = null;
        }
        data.gender = formData.gender;
        data.dob = formData.dob;
        data.address = formData.address;
        data.phone = formData.phone;
        data.isActive = formData.isActive;

        await updatePatient(userId, data);
    };

    return (
        <Fragment>
            <Alert />
            <form
                className="form-horizontal"
                method="post"
                action="!#"
                onSubmit={e => onSubmit(e)}
            >
                <div className="form-group">
                    <label
                        htmlFor="registerNumber"
                        className="col-sm-6 control-label"
                    >
                        Register Number
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="registerNumber"
                            placeholder="Register Number"
                            name="registerNumber"
                            value={registerNumber}
                            readOnly
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label
                        htmlFor="inputName"
                        className="col-sm-10 control-label"
                    >
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={e => onChange(e)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label
                        htmlFor="inputEmail"
                        className="col-sm-10 control-label"
                    >
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label
                        htmlFor="Password"
                        className="col-sm-10 control-label"
                    >
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            className="form-control"
                            id="Password"
                            placeholder="password"
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                        />
                        <small>
                            Note : Password is disabled by default edit this to
                            change the password or leave it blank if you don't
                            want to change.
                        </small>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="gender" className="col-sm-12 control-label">
                        Gender
                    </label>
                    <div className="col-sm-10">
                        <select
                            className="form-control"
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={e => onChange(e)}
                        >
                            <option value=""> --- Select --- </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Others</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="dob" className="col-sm-6 control-label">
                        Date of Birth
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="date"
                            className="form-control"
                            id="dob"
                            name="dob"
                            value={dob}
                            onChange={e => onChange(e)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address" className="col-sm-6 control-label">
                        Address
                    </label>
                    <div className="col-sm-10">
                        <textarea
                            className="form-control"
                            id="address"
                            placeholder="Address"
                            name="address"
                            value={address}
                            onChange={e => onChange(e)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="Phone" className="col-sm-6 control-label">
                        Phone
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="Phone"
                            placeholder="Phone"
                            name="phone"
                            value={phone}
                            onChange={e => onChange(e)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    name="isActive"
                                    checked={isActive ? true : false}
                                    onChange={e => setIsActive(e)}
                                />{" "}
                                <a href="#">Active</a>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <input
                            type="submit"
                            value="submit"
                            className="btn btn-danger"
                        ></input>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

EditPatient.propTypes = {
    patient: PropTypes.object.isRequired,
    updatePatient: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    patient: state.patient
});
export default connect(mapStateToProps, { updatePatient })(EditPatient);
