import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Modal = ({ modalFade, display, hideModal }) => {
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
                        <input type="text" className="form-control input-sm" />
                        <label className="fg-label">Register Number</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="radio m-b-15">
                      <label>
                        <input type="radio" name="sample" />
                        <i className="input-helper" />
                        Active
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="radio m-b-15">
                      <label>
                        <input type="radio" name="sample" />
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
                        <input type="text" className="form-control input-sm" />
                        <label className="fg-label">Name</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group fg-float m-b-30">
                      <div className="fg-line">
                        <input type="text" className="form-control input-sm" />
                        <label className="fg-label">Designation</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group fg-float m-b-30">
                  <div className="fg-line">
                    <input type="email" className="form-control input-sm" />
                    <label className="fg-label">Email address</label>
                  </div>
                </div>
                <div className="form-group fg-float m-b-30">
                  <div className="fg-line">
                    <input type="password" className="form-control input-sm" />
                    <label className="fg-label">Password</label>
                  </div>
                </div>
                <div className="form-group fg-float m-b-30">
                  <div className="fg-line">
                    <input type="email" className="form-control input-sm" />
                    <label className="fg-label">Contact Number</label>
                  </div>
                </div>
                <div className="form-group fg-float">
                  <div className="fg-line">
                    <textarea
                      className="form-control auto-size input-sm"
                      defaultValue={""}
                    />
                    <label className="fg-label">Address</label>
                  </div>
                </div>
                <div className="form-group fg-float">
                  <div className="fg-line">
                    <input type="file" className="form-control input-sm" />
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
