import React, { useState, useEffect, Fragment } from "react";
import Alert from "../../../layouts/Alert";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addReport } from "../../../../actions/patient";

const AddReport = ({ id, addReport, history }) => {
  const [formData, setFormData] = useState({
    patientId: id,
    reportType: "",
    findings: "",
    recommendation: "",
    document: ""
  });
  const fd = new FormData();
  const {
    reportType,
    findings,
    recommendation,
    patientId,
    document
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = e => {
    setFormData({ ...formData, document: e.target.files[0] });
  };

  const onSubmit = e => {
    e.preventDefault();

    fd.append("patientId", patientId);
    fd.append("reportType", reportType);
    fd.append("findings", findings);
    fd.append("recommendation", recommendation);
    fd.append("document", document);

    addReport(id, history, fd);
  };

  return (
    <Fragment>
      <div className="card">
        <Alert />
        <form onSubmit={e => onSubmit(e)}>
          <div className="card-header ch-alt">
            <h2>
              Report Form <small>Add Patient's Report</small>
            </h2>
          </div>
          <div className="card-body card-padding">
            <div className="form-group fg-float m-b-30">
              <div className="fg-line">
                <input
                  type="text"
                  className="form-control input-sm"
                  name="reportType"
                  value={reportType}
                  onChange={e => onChange(e)}
                />
                <label className="fg-label">Report Type</label>
              </div>
            </div>
            <div className="form-group fg-float m-b-30">
              <div className="fg-line">
                <input
                  type="test"
                  className="form-control input-sm"
                  name="findings"
                  value={findings}
                  onChange={e => onChange(e)}
                />
                <label className="fg-label">Findings</label>
              </div>
            </div>
            <div className="form-group fg-float m-b-30">
              <div className="fg-line">
                <input
                  type="text"
                  className="form-control input-sm"
                  name="recommendation"
                  value={recommendation}
                  onChange={e => onChange(e)}
                />
                <label className="fg-label">Recommendations</label>
              </div>
            </div>
            <div className="form-group fg-float m-b-30">
              <div className="fg-line">
                <input
                  type="file"
                  name="document"
                  className="form-control input-sm"
                  onChange={e => handleFileChange(e)}
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
        </form>
      </div>
    </Fragment>
  );
};

AddReport.propTypes = {};

export default connect(null, { addReport })(AddReport);
