import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addDoctor } from "../../../actions/doctor";
import Alert from "../../layouts/Alert";

const AddDoctor = ({ history, addDoctor }) => {
  const [formData, setFormData] = useState({
    registerNumber: "",
    name: "",
    designation: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    status: "",
    avatar: ""
  });

  const {
    name,
    registerNumber,
    designation,
    email,
    password,
    phone,
    address,
    status,
    avatar
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const data = new FormData();
  const onSubmit = e => {
    e.preventDefault();
    data.append("registerNumber", registerNumber);
    data.append("name", name);
    data.append("designation", designation);
    data.append("email", email);
    data.append("password", password);
    data.append("phone", phone);
    data.append("avatar", avatar);
    data.append("address", address);
    data.append("isActive", status);
    addDoctor(history, data);
    console.log(formData);
  };
  return (
    <Fragment>
      <div className="card">
        <Alert />
        <div className="card-header ch-alt">
          <h2>
            Hospital Form <small>Add a Hospital</small>
          </h2>
        </div>
        <div className="card-body card-padding">
          <form onSubmit={e => onSubmit(e)}>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group fg-float m-b-30">
                  <div className="fg-line">
                    <input
                      type="text"
                      className="form-control input-sm"
                      name="registerNumber"
                      value={registerNumber}
                      onChange={e => onChange(e)}
                    />
                    <label className="fg-label">Register Number</label>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="radio m-b-15">
                  <label>
                    <input
                      type="radio"
                      name="status"
                      onClick={e => setFormData({ ...formData, status: true })}
                    />
                    <i className="input-helper" />
                    Active
                  </label>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="radio m-b-15">
                  <label>
                    <input
                      type="radio"
                      name="status"
                      onClick={e => setFormData({ ...formData, status: false })}
                    />
                    <i className="input-helper" />
                    InActive
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group fg-float m-b-30">
              <div className="fg-line">
                <input
                  type="text"
                  className="form-control input-sm"
                  name="name"
                  value={name}
                  onChange={e => onChange(e)}
                />
                <label className="fg-label">Name</label>
              </div>
            </div>
            <div className="form-group fg-float m-b-30">
              <div className="fg-line">
                <input
                  type="text"
                  className="form-control input-sm"
                  name="designation"
                  value={designation}
                  onChange={e => onChange(e)}
                />
                <label className="fg-label">Designation</label>
              </div>
            </div>
            <div className="form-group fg-float m-b-30">
              <div className="fg-line">
                <input
                  type="email"
                  className="form-control input-sm"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                />
                <label className="fg-label">Email address</label>
              </div>
            </div>
            <div className="form-group fg-float m-b-30">
              <div className="fg-line">
                <input
                  type="password"
                  className="form-control input-sm"
                  name="password"
                  value={password}
                  onChange={e => onChange(e)}
                />
                <label className="fg-label">Password</label>
              </div>
            </div>
            <div className="form-group fg-float m-b-30">
              <div className="fg-line">
                <input
                  type="phone"
                  className="form-control input-sm"
                  name="phone"
                  value={phone}
                  onChange={e => onChange(e)}
                />
                <label className="fg-label">Contact Number</label>
              </div>
            </div>
            <div className="form-group fg-float">
              <div className="fg-line">
                <textarea
                  className="form-control auto-size input-sm"
                  name="address"
                  value={address}
                  onChange={e => onChange(e)}
                />
                <label className="fg-label">Address</label>
              </div>
            </div>
            <div className="form-group fg-float">
              <div className="fg-line">
                <input
                  type="file"
                  className="form-control input-sm"
                  name="avatar"
                  onChange={e =>
                    setFormData({ ...formData, avatar: e.target.files[0] })
                  }
                />
              </div>
            </div>

            <div className="clearfix" />
            <div className="m-t-20">
              <button type="submit" className="btn btn-info">
                Submit
              </button>
              <Link to="/doctors">
                <button className="pull-right btn btn-danger">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
AddDoctor.propType = {
  addDoctor: PropTypes.func.isRequired
};

export default connect(null, { addDoctor })(AddDoctor);
