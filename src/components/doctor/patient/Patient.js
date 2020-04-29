import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPatient } from "../../../actions/patient";
import Spinner from "../layouts/Spinner";
import RecordItem from "./RecordItem";
import RecordDetails from "./RecordDetails";
import ReportItem from "./ReportItem";
import ReportDetails from "./ReportDetails";
import AddRecord from "./AddRecord";
import Alert from "../layouts/Alert";

const Patient = ({ match, patient, loading, getPatient, history }) => {
  useEffect(() => {
    getPatient(match.params.id);
  }, []);

  useEffect(() => {
    // datatable initializing
    const script = document.createElement("script");
    script.src = "/js_config/datatable.js";
    script.async = true;
    document.body.appendChild(script);
    // end datatable initializing
  }, []);

  useEffect(() => {
    // Wizard initializing
    const card = document.createElement("script");
    card.src = "/js_config/cardWizard.js";
    card.async = true;
    document.body.appendChild(card);
    // Wizard initializing
  });

  return loading && patient === null ? (
    <Fragment>
      <Spinner />
    </Fragment>
  ) : loading === false && patient === null ? (
    <Fragment>
      <div className="content">
        <div className="container-fluid">
          <div className="card card-danger">
            <div className="simple-text text-center">
              No Patient's Record Available for this ID
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div className="content">
    
        <div className="container-fluid">
          <div className="col-md-12 col-12 mr-auto ml-auto">
            {/*      Wizard container        */}
            <div className="wizard-container">
              <div
                className="card card-wizard active"
                data-color="rose"
                id="wizardProfile"
              >
                {/*        You can switch " data-color="primary" "  with one of the next bright colors: "green", "orange", "red", "blue"       */}
                <div className="card-header text-center">
                  <h3 className="card-title text-primary">
                    {patient.patient.name}
                  </h3>
                  <h5 className="card-description">{patient.patient.email}</h5>
                </div>
                <div className="wizard-navigation">
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#about"
                        data-toggle="tab"
                        role="tab"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#records"
                        data-toggle="tab"
                        role="tab"
                      >
                        Records
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#reports"
                        data-toggle="tab"
                        role="tab"
                      >
                        Reports
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#addRecord"
                        data-toggle="tab"
                        role="tab"
                      >
                        Add Record
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#addReport"
                        data-toggle="tab"
                        role="tab"
                      >
                        Add Report
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active" id="about">
                      <h5 className="info-text"> Profile Informations</h5>
                      <div className="row justify-content-center">
                        <div className="col-sm-4">
                          <div className="picture-container">
                            <div className="picture">
                              <img
                                alt="user-avatar"
                                src={`/${patient.patient.avatar}`}
                                className="picture-src"
                                id="wizardPicturePreview"
                                title="picture"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-group form-control-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">face</i>
                              </span>
                            </div>
                            <div className="form-group">
                              <div className="simple-text">
                                {patient.patient.registerNumber}
                              </div>
                            </div>
                          </div>
                          <div className="input-group form-control-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">
                                  record_voice_over
                                </i>
                              </span>
                            </div>
                            <div className="form-group">
                              <div className="simple-text">
                                {patient.patient.phone}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-10 mt-3">
                          <div className="input-group form-control-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">email</i>
                              </span>
                            </div>
                            <div className="form-group">
                              <div className="simple-text">
                                {patient.patient.address}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="records">
                      <div className="card-body">
                        <div className="toolbar">
                          {/*        Here you can write extra buttons/actions for the toolbar              */}
                        </div>
                        <div className="material-datatables">
                          <table
                            id="datatables1"
                            className="table table-striped table-no-bordered table-hover"
                            cellSpacing={0}
                            width="100%"
                            style={{
                              width: "100%"
                            }}
                          >
                            <thead>
                              <tr>
                                <th>Date</th>
                                <th>Cause</th>

                                <th>Hospital</th>
                                <th>Doctor</th>
                                <th className="disabled-sorting text-right">
                                  Actions
                                </th>
                              </tr>
                            </thead>
                            <tfoot>
                              <tr>
                                <th>Date</th>
                                <th>Cause</th>

                                <th>Hospital</th>
                                <th>Doctor</th>
                                <th className=" text-right">Actions</th>
                              </tr>
                            </tfoot>
                            <tbody>
                              {patient.record.map(rec => (
                                <RecordItem key={rec._id} record={rec} />
                              ))}
                            </tbody>
                          </table>
                          <RecordDetails />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="reports">
                      <div className="row justify-content-center">
                        <div className="card-body">
                          <div className="material-datatables">
                            <table
                              id="datatables"
                              className="table table-striped table-no-bordered table-hover"
                              cellSpacing={0}
                              width="100%"
                              style={{
                                width: "100%"
                              }}
                            >
                              <thead>
                                <tr>
                                  <th>Date</th>
                                  <th>Type</th>
                                  <th>Hospital</th>

                                  <th>Info</th>

                                  <th className="disabled-sorting text-right">
                                    Actions
                                  </th>
                                </tr>
                              </thead>
                              <tfoot>
                                <tr>
                                  <th>Date</th>
                                  <th>Type</th>
                                  <th>Info</th>
                                  <th>Hospital</th>
                                  <th className="text-right">Actions</th>
                                </tr>
                              </tfoot>
                              <tbody>
                                {patient.report.map(rec => (
                                  <ReportItem key={rec._id} report={rec} />
                                ))}
                              </tbody>
                            </table>
                            <ReportDetails />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="addRecord">
                      <div className="row justify-content-center">
                        <div className="card ">
                          <AddRecord patientId={match.params.id} />
                        </div>
                      </div>
                    </div>
                    {/* <div className="tab-pane" id="addReport">
                      <div className="row justify-content-center">
                        <div className="card ">
                          <AddReport
                            patientId={match.params.id}
                            history={history}
                          />
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* wizard container */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Patient.propTypes = {
  patient: PropTypes.object,
  loding: PropTypes.bool,
  getPatient: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  patient: state.patient.patient,
  loading: state.patient.loading
});

export default connect(mapStateToProps, { getPatient })(Patient);
