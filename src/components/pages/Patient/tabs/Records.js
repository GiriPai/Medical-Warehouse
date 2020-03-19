import React, { Fragment } from "react";
import moment from "moment";

const Records = ({ records }) => {
  return records.length <= 0 ? (
    <Fragment> No Records Available</Fragment>
  ) : (
    <Fragment>
      <div className="card">
        <div className="action-header palette-Teal-400 bg clearfix">
          <div className="ah-label hidden-xs palette-White text">
            Records of the patient
          </div>
        </div>
        {records.map(record => (
          <div key={record._id} className="list-group lg-alt lg-even-black">
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
                  src={`/${record.doctor.avatar}`}
                  alt="user"
                />
              </div>
              <div className="media-body">
                <div className="lgi-heading">
                  Treated at <b>{record.hospital.name}</b> by{" "}
                  <b>{record.doctor.name}</b> on{" "}
                  <i>{moment(record.createdAt).format("DD-MM-YYYY")}</i>
                </div>
                <small className="lgi-text">{record.description}</small>
                <ul className="lgi-attrs">
                  <li>Cause: {record.cause}</li>
                  <li>
                    Reported on:{moment(record.createdAt).format("DD-MM-YYYY")}
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

export default Records;
