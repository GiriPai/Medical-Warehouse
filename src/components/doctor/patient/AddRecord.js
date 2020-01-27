import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addRecord } from "../../../actions/patient";
import Alert from "../layouts/Alert";

const AddRecord = ({ addRecord, patientId }) => {
  const [findings, setFindings] = useState([{ value: null }]);
  const [prescriptions, setPrescriptions] = useState([
    { name: "", interval: "", days: "", description: "" }
  ]);

  const [formData, setFormData] = useState({
    cause: "",
    description: "",
    recommendation: ""
  });

  const { cause, description, recommendation } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleFindingsChange(i, event) {
    const values = [...findings];
    values[i].value = event.target.value;
    setFindings(values);
  }

  const handlePrescriptionChange = (i, event) => {
    const values = [...prescriptions];
    switch (event.target.name) {
      case "name":
        values[i].name = event.target.value;
        break;
      case "interval":
        values[i].interval = event.target.value;
        break;
      case "days":
        values[i].days = event.target.value;
        break;
      case "description":
        values[i].description = event.target.value;
        break;
      default:
        values = [...prescriptions];
        break;
    }
    setPrescriptions(values);
  };

  const handlePrescriptionAdd = e => {
    e.preventDefault();
    const values = [...prescriptions];
    values.push({ name: "", interval: "", days: "", description: "" });
    setPrescriptions(values);
  };

  function handleFindingsAdd(e) {
    e.preventDefault();
    const values = [...findings];
    values.push({ value: null });
    setFindings(values);
  }

  function handleFindingsRemove(i) {
    const values = [...findings];
    values.splice(i, 1);
    setFindings(values);
  }

  function handlePrescriptionRemove(i) {
    const values = [...prescriptions];
    values.splice(i, 1);
    setPrescriptions(values);
  }

  const onSubmit = e => {
    e.preventDefault();
    let finding = [];
    findings.forEach(item => {
      finding.push(item.value);
    });

    const data = new FormData();
    data.findings = finding;
    data.cause = formData.cause;
    data.description = formData.description;
    data.prescription = prescriptions;
    data.recommendation = formData.recommendation;

    addRecord(patientId, data);

    setFindings([{ value: null }]);
    setPrescriptions([{ name: "", interval: "", days: "", description: "" }]);
    setFormData({ cause: "", description: "", recommendation: "" });
  };

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className=" text-primary">
                <h5>Findings</h5>
              </div>
            </div>
            <div className="col-md-3">
              <button
                onClick={e => handleFindingsAdd(e)}
                className="btn btn-sm btn-primary"
              >
                AddMore
              </button>
            </div>
          </div>
          {findings.map((field, idx) => {
            return (
              <div key={`${field}-${idx}`}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control col-lg-10 col-md-11"
                    placeholder="Enter Findings"
                    onChange={e => handleFindingsChange(idx, e)}
                  />
                  <button
                    className="form-control  col-lg-2 col-md-1"
                    type="button"
                    onClick={() => handleFindingsRemove(idx)}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}

          <div className="form-group">
            <label htmlFor="cause" className="bmd-label-floating">
              Cause
            </label>
            <input
              type="text"
              className="form-control"
              id="cause"
              name="cause"
              value={cause}
              onChange={e => onChange(e)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="bmd-label-floating">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={description}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="recommendation" className="bmd-label-floating">
              Recommendation
            </label>
            <input
              type="text"
              className="form-control"
              id="recommendation"
              name="recommendation"
              value={recommendation}
              onChange={e => onChange(e)}
            />
          </div>
          <br />
          <br />

          <div className="row">
            <div className="col-md-9">
              <div className=" text-primary">
                <h5>Prescriptions</h5>
              </div>
            </div>
            <div className="col-md-3">
              <button
                onClick={e => handlePrescriptionAdd(e)}
                className="btn btn-sm btn-primary"
              >
                Add More
              </button>
            </div>
          </div>

          {/* ------- */}
          {prescriptions.map((prescription, idx) => {
            return (
              <div key={`${prescription}-${idx}`}>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={prescription.name}
                            onChange={e => handlePrescriptionChange(idx, e)}
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">Interval</label>
                          <input
                            type="text"
                            className="form-control"
                            name="interval"
                            value={prescription.interval}
                            onChange={e => handlePrescriptionChange(idx, e)}
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">
                            No of Days
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="days"
                            value={prescription.days}
                            onChange={e => handlePrescriptionChange(idx, e)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control col-lg-10 col-md-11"
                        placeholder="Description"
                        name="description"
                        value={prescription.description}
                        onChange={e => handlePrescriptionChange(idx, e)}
                      />
                      <button
                        className="form-control  col-lg-2 col-md-1"
                        type="button"
                        onClick={e => handlePrescriptionRemove(idx)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* -------- */}
        </div>
        <div className="card-footer ">
          <button type="submit" className="btn btn-fill btn-rose">
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

AddRecord.propTypes = {
  addRecord: PropTypes.func.isRequired
};

export default connect(null, { addRecord })(AddRecord);
