import React, { Fragment } from "react";
import PropTypes from "prop-types";

const AddReport = props => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header ch-alt">
          <h2>
            Report Form <small>Add Patient's Report</small>
          </h2>
        </div>
        <div className="card-body card-padding">
          <div className="form-group fg-float m-b-30">
            <div className="fg-line">
              <input type="text" className="form-control input-sm" />
              <label className="fg-label">Report Type</label>
            </div>
          </div>
          <div className="form-group fg-float m-b-30">
            <div className="fg-line">
              <input type="test" className="form-control input-sm" />
              <label className="fg-label">Findings</label>
            </div>
          </div>
          <div className="form-group fg-float m-b-30">
            <div className="fg-line">
              <input type="text" className="form-control input-sm" />
              <label className="fg-label">Recommendations</label>
            </div>
          </div>
          <div className="form-group fg-float m-b-30">
            <div className="fg-line">
              <input
                type="file"
                name="file"
                className="form-control input-sm "
              />
              {/* <label className="fg-label">Upload document</label> */}
            </div>
          </div>
          <div className="clearfix" />
          <div className="m-t-20">
            <button className="btn btn-info">Submit</button>
            <button className="btn btn-link">Cancel</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AddReport.propTypes = {};

export default AddReport;
