import React, { Fragment } from "react";
import moment from "moment";

const Reports = ({ reports }) => {
  console.log(reports);
  return reports.length <= 0 ? (
    <Fragment> No Reports Available</Fragment>
  ) : (
    <Fragment>
      <div className="card">
        <div className="action-header palette-Teal-400 bg clearfix">
          <div className="ah-label hidden-xs palette-White text">
            Reports of the patient
          </div>
        </div>
        {reports.map(report => (
          <div key={report._id} className="list-group lg-alt lg-even-black">
            <div className="list-group-item media">
              <div className="checkbox pull-left lgi-checkbox">
                <label>
                  <input type="checkbox" defaultValue />
                  <i className="input-helper" />
                </label>
              </div>
              <div className="pull-left">
                <img
                  className="avatar-img"
                  src={`/${report.hospital.avatar}`}
                  alt="user"
                />
              </div>
              <div className="media-body">
                <div className="lgi-heading">
                  Treated at <b>{report.hospital.name}</b> for
                  <b>{report.type}</b> on{" "}
                  <i>{moment(report.createdAt).format("DD-MM-YYYY")}</i>
                </div>
                <small className="lgi-text">{report.recommendation}</small>
                <ul className="lgi-attrs">
                  <li>
                    Reported on:{moment(report.createdAt).format("DD-MM-YYYY")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Reports;
