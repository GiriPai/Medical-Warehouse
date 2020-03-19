import React, { useEffect, Fragment } from "react";
import About from "./tabs/About";
import Reports from "./tabs/Reports";
import Records from "./tabs/Records";
import AddReport from "./tabs/AddReport";
import Preloader from "../../layouts/Preloader";
import { connect } from "react-redux";
import { getPatient } from "../../../actions/patient";

const Patient = ({ match, getPatient, loading, records, reports, patient }) => {
  useEffect(() => {
    getPatient(match.params.id);
  }, []);

  return loading ? (
    <Fragment>
      <Preloader />{" "}
    </Fragment>
  ) : (
    <Fragment>
      <section id="content">
        <div className="container">
          <div className="card" id="profile-main">
            <div className="pm-overview c-overflow">
              <div className="pmo-pic">
                <div className="p-relative">
                  <a href="#">
                    <img
                      className="img-responsive"
                      src={`/${patient.avatar}`}
                      // src="/img/profile-pics/profile-pic-2.jpg"
                      alt="user"
                    />
                  </a>
                </div>
              </div>
              <div className="pmo-block pmo-contact hidden-xs">
                <h2>Contact</h2>
                <ul>
                  <li>
                    <i className="zmdi zmdi-phone" /> {patient.phone}
                  </li>
                  <li>
                    <i className="zmdi zmdi-email" /> {patient.email}
                  </li>
                  {/* <li>
                    <i className="zmdi zmdi-facebook-box" /> malinda.hollaway
                  </li>
                  <li>
                    <i className="zmdi zmdi-twitter" /> @malinda
                    (twitter.com/malinda)
                  </li> */}
                  <li>
                    <i className="zmdi zmdi-pin" />
                    <address className="m-b-0 ng-binding">
                      {patient.address}
                    </address>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pm-body clearfix">
              <ul className=" tab-nav tn-justified tn-icon" role="tablist">
                <li className="active waves-effect" role="presentation">
                  <a
                    className="col-sx-4"
                    href="#tab-1"
                    aria-controls="tab-1"
                    role="tab"
                    data-toggle="tab"
                  >
                    About
                  </a>
                </li>
                <li className="waves-effect">
                  <a
                    className="col-sx-4"
                    href="#tab-2"
                    aria-controls="tab-3"
                    role="tab"
                    data-toggle="tab"
                  >
                    Records
                  </a>
                </li>
                <li className="waves-effect">
                  <a
                    className="col-sx-4"
                    href="#tab-3"
                    aria-controls="tab-3"
                    role="tab"
                    data-toggle="tab"
                  >
                    Reports
                  </a>
                </li>
                <li className="waves-effect">
                  <a
                    className="col-sx-4"
                    href="#tab-4"
                    aria-controls="tab-4"
                    role="tab"
                    data-toggle="tab"
                  >
                    Add Reports
                  </a>
                </li>
              </ul>
              {/* .......................... */}
              <div className="tab-content p-20">
                <div
                  role="tabpanel"
                  className="tab-pane animated fadeIn in active"
                  id="tab-1"
                >
                  <About patient={patient} />
                </div>
                <div
                  role="tabpanel"
                  className="tab-pane animated fadeIn"
                  id="tab-2"
                >
                  <Records records={records} />
                </div>
                <div
                  role="tabpanel"
                  className="tab-pane animated fadeIn"
                  id="tab-3"
                >
                  <Reports reports={reports} />
                </div>
                <div
                  role="tabpanel"
                  className="tab-pane animated fadeIn"
                  id="tab-4"
                >
                  <AddReport id={match.params.id} history />
                </div>
              </div>

              {/* ..................... */}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  loading: state.patient.loading,
  patient: state.patient.patient.patient,
  records: state.patient.patient.record,
  reports: state.patient.patient.report
});

export default connect(mapStateToProps, { getPatient })(Patient);
