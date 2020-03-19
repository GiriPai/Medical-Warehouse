import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Modal = ({ content, id, modalFade, display, hideModal }) => {
  const [formData, setFormData] = useState({
    registerNumber: "",
    name: "",
    designation: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    avatar: "",
    isActive: false
  });

  useEffect(() => {
    setFormData({
      registerNumber: content.registerNumber,
      name: content.name,
      designation: content.designation,
      email: content.email,
      password: content.password,
      phone: content.phone,
      address: content.address,
      avatar: content.avatar,
      isActive: content.isActive
    });
  }, [content]);

  const {
    registerNumber,
    name,
    designation,
    email,
    password,
    phone,
    address,
    isActive,
    avatar
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onChangeFileHandler = e => {
    console.log(e);
    setFormData({ ...formData, avatar: e.target.files[0] });
    console.log(formData);
  };

  return (
    <Fragment>
      <div
        className={`modal fade ${modalFade}`}
        id="modalDefault"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        style={{ display: display, paddingRight: "17px" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Doctor</h4>
            </div>
            <div className="modal-body">
              <form>
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
                          name="isActive"
                          checked={isActive === true ? true : false}
                          onClick={e =>
                            setFormData({ ...formData, isActive: true })
                          }
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
                          name="isActive"
                          checked={isActive === false ? true : false}
                          onClick={e =>
                            setFormData({ ...formData, isActive: false })
                          }
                        />
                        <i className="input-helper" />
                        InActive
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
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
                  </div>
                  <div className="col-sm-6">
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
                      type="email"
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
                      onChange={e => onChangeFileHandler(e)}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-link">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-link"
                onClick={e => hideModal(e)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
