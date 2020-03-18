import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { updateHospital } from "../../actions/hospital";
import Alert from "../layouts/Alert";

const EditHospital = ({ hospital: { hospital }, userId, updateHospital }) => {
  console.log(hospital);
  const [formData, setFormData] = useState({
    registerNumber: "",
    name: "",
    email: "",
    password: "",
    branch: "",
    address: "",
    phone: "",
    isActive: ""
  });
  const {
    registerNumber,
    name,
    email,
    password,
    branch,
    address,
    phone,
    isActive
  } = formData;

  useEffect(() => {
    setFormData({
      registerNumber: hospital.registerNumber,
      name: hospital.name,
      email: hospital.email,
      password: "",
      branch: hospital.branch,
      address: hospital.address,
      phone: hospital.phone,
      isActive: hospital.isActive
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
    data.registerNumber = registerNumber;
    data.name = name;
    data.email = email;
    if (password != "" && password != null) {
      data.password = password;
    } else {
      data.password = null;
    }
    data.branch = branch;
    data.address = address;
    data.phone = phone;
    data.isActive = isActive;

    await updateHospital(userId, data);
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
          <label htmlFor="registerNumber" className="col-sm-6 control-label">
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
          <label htmlFor="inputName" className="col-sm-10 control-label">
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
          <label htmlFor="inputEmail" className="col-sm-10 control-label">
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
          <label htmlFor="Password" className="col-sm-10 control-label">
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
              Note : Password is disabled by default edit this to change the
              password or leave it blank if you don't want to change.
            </small>
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
          <label htmlFor="Branch" className="col-sm-6 control-label">
            Branch
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="Branch"
              placeholder="Branch"
              name="branch"
              value={branch}
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

EditHospital.propTypes = {
  hospital: PropTypes.object.isRequired,
  updateHospital: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  hospital: state.hospital
});
export default connect(mapStateToProps, { updateHospital })(EditHospital);
