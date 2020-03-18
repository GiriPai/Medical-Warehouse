import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Breadcrumb from "../breadcrumbs/Breadcrumb";
import Alert from "../layouts/Alert";
import Spinner from "../layouts/Spinner";

import { connect } from "react-redux";
import { addPatient } from "../../actions/patient";

const CreatePatient = ({ addPatient, history }) => {
  useEffect(() => {
    console.log("rerender");
  }, []);
  const [formData, setFormData] = useState({
    registerNumber: "",
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    address: "",
    phone: "",
    avatar: "",
    isActive: false
  });

  const {
    registerNumber,
    name,
    email,
    password,
    dob,
    gender,
    address,
    phone,
    avatar,
    isActive
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckClick = () => {
    setFormData({ ...formData, isActive: !isActive });
  };

  const onChangeFileHandler = event => {
    setFormData({
      ...formData,
      avatar: event.target.files[0]
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const data = new FormData();
    data.append("registerNumber", registerNumber);
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("dob", dob);
    data.append("gender", gender);
    data.append("address", address);
    data.append("phone", phone);
    data.append("avatar", avatar);
    data.append("isActive", isActive);

    addPatient(data, history);
  };

  return (
    <Fragment>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        <Breadcrumb
          title="Create A New Patient"
          m1="Home"
          m1url="/home"
          m2="Patients"
          m2url="/patients"
          m3="Register Patient"
        />
        <Alert />
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* left column */}
              <div className="col-md-12">
                {/* general form elements */}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Create Patient</h3>
                  </div>
                  {/* /.card-header */}

                  {/* form start */}
                  <div className="row">
                    <div className="col-md-6">
                      <form
                        name="createForm"
                        action="!#"
                        onSubmit={e => onSubmit(e)}
                      >
                        <div className="card-body">
                          <div className="form-group">
                            <label htmlFor="registerNumber">
                              Register Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="registerNumber"
                              placeholder="Register Number"
                              name="registerNumber"
                              value={registerNumber}
                              onChange={e => onChange(e)}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Name"
                              name="name"
                              value={name}
                              onChange={e => onChange(e)}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
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
                            <label htmlFor="phone">Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              placeholder="Phone"
                              name="phone"
                              value={phone}
                              onChange={e => onChange(e)}
                            />
                          </div>

                          <div className="form-group">
                            <div className="custom-control custom-switch">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customSwitch1"
                                name="isActive"
                                checked={isActive}
                                value={isActive}
                                onChange={e => handleCheckClick(e)}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customSwitch1"
                              >
                                ACTIVE
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="col-md-6">
                      <form
                        name="createForm"
                        action="!#"
                        onSubmit={e => onSubmit(e)}
                      >
                        <div className="card-body">
                          <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select
                              className="form-control"
                              id="gender"
                              name="gender"
                              value={gender}
                              onChange={e => onChange(e)}
                            >
                              <option value="">--- Select ---</option>

                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Others">Others</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="phone">Birth Date</label>
                            <input
                              type="date"
                              className="form-control"
                              id="dob"
                              placeholder="DOB"
                              name="dob"
                              value={dob}
                              onChange={e => onChange(e)}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputFile">File input</label>
                            <div className="input-group">
                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  id="exampleInputFile"
                                  name="avatar"
                                  onChange={e => onChangeFileHandler(e)}
                                />
                                <label
                                  className="custom-file-label"
                                  htmlFor="exampleInputFile"
                                >
                                  Profile Image
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <textarea
                              type="textarea"
                              className="form-control"
                              id="address"
                              placeholder="Enter address"
                              name="address"
                              rows="5"
                              value={address}
                              onChange={e => onChange(e)}
                            />
                          </div>
                        </div>
                        {/* /.card-body */}
                      </form>
                    </div>
                  </div>
                  <form
                    name="createForm"
                    action="!#"
                    onSubmit={e => onSubmit(e)}
                  >
                    <div className="card-footer">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
                {/* /.card */}
              </div>
              {/*/.col (left) */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
      </div>
      {/* /.content-wrapper */}
    </Fragment>
  );
};

CreatePatient.propTypes = {
  addPatient: PropTypes.func.isRequired
};

export default connect(null, { addPatient })(withRouter(CreatePatient));
