import React, { Fragment, useState, useEffect } from "react";
import { updateUser } from "../../actions/profile";

import { connect } from "react-redux";
const Settings = ({ patient, updateUser }) => {
  const [formData, setFormData] = useState({
    registerNumber: "",
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
    avatar: ""
  });

  useEffect(() => {
    setFormData({
      ...formData,
      registerNumber: patient.registerNumber,
      name: patient.name,
      email: patient.email,
      password: "",
      dob: patient.dob,
      gender: patient.gender,
      phone: patient.phone,
      address: patient.address,
      avatar: ""
    });
  }, []);

  const {
    registerNumber,
    name,
    email,
    password,
    dob,
    gender,
    phone,
    address,
    avatar
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFileChange = e => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };
  const data = new FormData();
  const onSubmit = e => {
    e.preventDefault();
    if (registerNumber !== "") data.append("registerNumber", registerNumber);

    if (name !== "") data.append("name", name);
    if (email !== "") data.append("email", email);
    if (password !== "") data.append("password", password);
    if (dob !== "") data.append("dob", dob);
    if (gender !== "") data.append("gender", gender);
    if (phone !== "") data.append("phone", phone);
    if (address !== "") data.append("address", address);
    if (avatar !== "") data.append("avatar", avatar);

    console.log(data);
    updateUser(data);
  };

  return (
    <Fragment>
      <div className="tab-pane" id="settings">
        <form onSubmit={e => onSubmit(e)}>
          <h5 className="mb-3 text-uppercase bg-light p-2">
            <i className="mdi mdi-account-circle mr-1" /> Personal Info
          </h5>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="registerNumber">Register Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="registernumber"
                  // placeholder="Enter first name"
                  readOnly={true}
                  name="registerNumber"
                  value={registerNumber}
                  // onChange = {(e)=>onChange(e)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name"> Name</label>
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
            </div>{" "}
            {/* end col */}
          </div>{" "}
          {/* end row */}
          {/* end row */}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="dob">Data of Birth</label>
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
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter Phone Number"
                  name="phone"
                  value={phone}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>{" "}
            {/* end col */}
          </div>{" "}
          {/* end row */}
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="Address">Address</label>
                <textarea
                  className="form-control"
                  id="Address"
                  rows={4}
                  placeholder="Write something..."
                  name="address"
                  value={address}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>{" "}
            {/* end col */}
          </div>{" "}
          {/* end row */}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="dob">Gender</label>

                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio1"
                    name="gender"
                    className="custom-control-input"
                    checked={gender === "Male" ? true : false}
                    value="Male"
                    onClick={e => onChange(e)}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio1"
                  >
                    Male
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio2"
                    name="gender"
                    className="custom-control-input"
                    checked={gender === "Female" ? true : false}
                    value="Female"
                    onClick={e => onChange(e)}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio2"
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="avatar">Avatar</label>
                <input
                  type="file"
                  className="form-control"
                  id="avatar"
                  placeholder="Enter avatar Number"
                  name="avatar"
                  // value={avatar}
                  onChange={e => onFileChange(e)}
                />
              </div>
            </div>{" "}
            {/* end col */}
          </div>{" "}
          <h5 className="mb-3 text-uppercase bg-light p-2">
            <i className="mdi mdi-earth mr-1" /> Authentication
          </h5>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="useremail">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="useremail"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="userpassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="userpassword"
                  placeholder="Enter password"
                  name="password"
                  onChange={e => onChange(e)}
                />
                <span className="form-text text-muted">
                  <small>
                    Leave it blank if you dont want to change your password
                  </small>
                </span>
              </div>
            </div>{" "}
            {/* end col */}
          </div>{" "}
          {/* end row */}
          <div className="text-right">
            <button
              type="submit"
              className="btn btn-success waves-effect waves-light mt-2"
            >
              <i className="mdi mdi-content-save" /> Save
            </button>
          </div>
        </form>
      </div>
      {/* end settings content*/}
    </Fragment>
  );
};

// const mapStateToProps = state => ({
//   loading : state.auth.loading
// })
export default connect(null, { updateUser })(Settings);
