import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Alert from "../layouts/Alert";
import { updateProfile } from "../../../actions/profile";

const Profile = ({ profile, updateProfile, history }) => {
  const data = new FormData();

  const [formData, setFormData] = useState({
    registerNumber: profile.registerNumber,
    password: "",
    avatar: "",
    designation: profile.designation,
    phone: profile.phone,
    address: profile.address
  });

  const {
    password,
    designation,
    phone,
    address,
    avatar,
    registerNumber
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onChangeFileHandler = e => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };

  const onSubmit = e => {
    e.preventDefault(e);

    data.append("registerNumber", registerNumber);
    if (password !== "" || password !== null) data.append("password", password);
    if (designation !== "" || designation !== null)
      data.append("designation", designation);
    if (phone !== "" || phone !== null) data.append("phone", phone);
    if (address !== "" || address !== null) data.append("address", address);
    if (avatar !== "" || avatar !== null) data.append("avatar", avatar);

    console.log(data);
    updateProfile(data, history);
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header card-header-icon card-header-rose">
                <div className="card-icon">
                  <i className="material-icons">perm_identity</i>
                </div>
                <h4 className="card-title">
                  Your Profile -
                  <small className="category">Complete your profile</small>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={e => onSubmit(e)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">
                          Register Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          disabled={true}
                          value={registerNumber}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled={true}
                          value={profile.name}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">E-mail</label>
                        <input
                          type="text"
                          className="form-control"
                          value={profile.email}
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">
                          Password (Don't edit unless needed)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="password"
                          value={password}
                          onChange={e => onChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">
                          Designation
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="designation"
                          value={designation}
                          onChange={e => onChange(e)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={phone}
                          name="phone"
                          onChange={e => onChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="bmd-label-floating">Adress</label>
                        <input
                          type="text"
                          className="form-control"
                          value={address}
                          name="address"
                          onChange={e => onChange(e)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
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
                        <div className="text-primary">
                          Upload Profile Picture (if required)
                        </div>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-rose pull-right">
                    Update Profile
                  </button>
                  <div className="clearfix" />
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-profile">
              <div className="card-avatar">
                <a href="#pablo">
                  <img className="img" src={`/${profile.avatar}`} />
                </a>
              </div>
              <div className="card-body">
                <h6 className="card-category text-gray">
                  {profile.designation}
                </h6>
                <h4 className="card-title">{profile.name}</h4>
                <p className="card-description">{profile.registerNumber}</p>
                <p className="card-description">
                  {profile.hospital.name}, {profile.hospital.division}
                </p>
                <br />
                {/* <a href="#pablo" className="btn btn-rose btn-round">
                  Follow
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Profile.propTypes = {};

const mapStateToProps = state => ({
  profile: state.profile.profile
});
export default connect(mapStateToProps, { updateProfile })(Profile);
