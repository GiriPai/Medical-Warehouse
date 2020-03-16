import React, { Fragment } from "react";
import Records from "../tabs/Records";
import Reports from "../tabs/Reports";
import Settings from "../tabs/Settings";

const Tabs = ({ patient, records, reports }) => {
  return (
    <Fragment>
      <div className="col-lg-8 col-xl-8">
        <div className="card-box">
          <ul className="nav nav-pills navtab-bg">
            <li className="nav-item">
              <a
                href="#records"
                data-toggle="tab"
                aria-expanded="true"
                className="nav-link active ml-0"
              >
                <i className="mdi mdi-face-profile mr-1" />
                Records
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#reports"
                data-toggle="tab"
                aria-expanded="true"
                className="nav-link"
              >
                <i className="mdi mdi-cards-variant mr-1" />
                Reports
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#settings"
                data-toggle="tab"
                aria-expanded="false"
                className="nav-link"
              >
                <i className="mdi mdi-settings-outline mr-1" />
                Settings
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <Records records={records} />

            <Reports reports={reports} />

            <Settings patient={patient} />
          </div>{" "}
          {/* end tab-content */}
        </div>{" "}
        {/* end card-box*/}
      </div>{" "}
      {/* end col */}
    </Fragment>
  );
};

export default Tabs;
