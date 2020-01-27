import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { addReport } from "../../../actions/patient";

const AddReport = ({ patientId, history, addReport }) => {
  console.log(history);
  const [findings, setFindings] = useState([{ value: null }]);
  const [formData, setFormData] = useState({
    reportType: "",
    recommendation: "",
    document: null
  });

  const { reportType, recommendation, document } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onChangeFileHandler = event => {
    console.log(event.target.files[0]);
    setFormData({
      ...formData,
      document: event.target.files[0]
    });
  };

  function handleFindingsChange(i, event) {
    const values = [...findings];
    values[i].value = event.target.value;
    setFindings(values);
  }

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

  const data = new FormData();

  const onSubmit = (e, id) => {
    e.preventDefault();
    const findingsArray = [];
    findings.forEach(obj => {
      findingsArray.push(obj);
    });
    console.log(document);

    data.findings = findingsArray;
    data.recommendation = recommendation;
    data.reportType = reportType;
    data.document = document;
    console.log(data);
    // console.log(JSON.parse(data));

    addReport(patientId, data, history);
  };

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <div className="card-body ">
          <div className="form-group">
            {findings.map((field, idx) => {
              return (
                <div key={`${field}-${idx}`}>
                  <div className="input-group">
                    <input
                      placeholder="Findings"
                      type="text"
                      className="form-control col-lg-10 col-md-11 abcde"
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

            <input
              type="button"
              className="form-control btn btn-primary"
              value="Add More"
              onClick={e => handleFindingsAdd(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reportType" className="bmd-label-floating">
              {" "}
              Report Type
            </label>
            <input
              type="text"
              className="form-control"
              id="reportType"
              required="true"
              name="reportType"
              value={reportType}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="recommend" className="bmd-label-floating">
              {" "}
              Recommendation
            </label>
            <input
              type="text"
              className="form-control"
              id="recommend"
              required="true"
              name="recommendation"
              value={recommendation}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputFile">Upload Document</label>
            <div className="input-group">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="exampleInputFile"
                  name="avatar"
                  onChange={e => onChangeFileHandler(e)}
                />
                <label className="custom-file-label" htmlFor="exampleInputFile">
                  <div className="text-primary">Upload Here</div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="card-footer text-right">
          <button type="submit" className="btn btn-rose">
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default connect(null, { addReport })(AddReport);
