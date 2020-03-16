import React, { Fragment } from "react";
import moment from "moment";
const Reports = ({ reports }) => {
  return (
    <Fragment>
      <div className="tab-pane" id="reports">
        <h5 className="mb-3 mt-4 text-uppercase">
          <i className="mdi mdi-cards-variant mr-1" />
          My Reports
        </h5>
        <div className="table-responsive">
          <table className="table table-borderless mb-0">
            <thead className="thead-light">
              <tr>
                <th>Report Type</th>
                <th>Date</th>
                <th>Findings</th>
                <th>Recommendation</th>
                <th>Hospital</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {reports && reports.length <= 0 ? (
                <Fragment>
                  <tr>
                    <td colSpan="5"> No Data Available </td>
                  </tr>
                </Fragment>
              ) : (
                reports &&
                reports.length > 0 &&
                reports.map(report => (
                  <tr key={report._id}>
                    <td>{report.reportType}</td>
                    <td>{moment(report.createdAt).format("DD-MM-YYYY")}</td>
                    <td>{report.findings.map(finding => finding)}</td>
                    <td>{report.recommendation}</td>
                    <td>{report.hospital.name}</td>
                    <td>
                      <span className="badge badge-info">
                        <a
                          href={`http://localhost:5000/${report.document}`}
                          download
                        >
                          Download
                        </a>
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* end timeline content*/}
    </Fragment>
  );
};

export default Reports;
