import React, { Fragment, useEffect } from "react";

import { connect } from "react-redux";
import { getActivity } from "../../../../actions/doctor";
import Preloader from "../../../layouts/Preloader";
import moment from "moment";

const Activity = ({ id, getActivity, loading, activity }) => {
  useEffect(() => {
    console.log(id);
    getActivity(id);
  }, []);

  return loading ? (
    <Fragment>
      <Preloader />
    </Fragment>
  ) : activity && activity.length <= 0 ? (
    <Fragment>
      {" "}
      <div className="card card-header text-center">No Activities yet</div>{" "}
    </Fragment>
  ) : (
    <Fragment>
      <div className="card">
        <div className="action-header palette-Teal-400 bg clearfix">
          <div className="ah-label hidden-xs palette-White text">
            Activities of the doctor
          </div>
        </div>
        {activity !== null &&
          activity.map((act, index) => (
            <div key={act._id} className="list-group lg-alt lg-even-black">
              <div className="list-group-item media">
                <div className="pull-left">
                  <img
                    className="avatar-img"
                    src={`/${act.patient.avatar}`}
                    alt="user"
                  />
                </div>

                <div className="media-body">
                  <div className="lgi-heading">
                    Treated {act.patient.name} - {act.patient.regsterNumber}
                  </div>
                  <small className="lgi-text">{act.description}</small>
                  <ul className="lgi-attrs">
                    <li>
                      Date Created :{" "}
                      {moment(act.createdAt).format("DD-MM-YYYY")}
                      {/* <Moment format="dd-MM-yyyy">{act.createdAt}</Moment> */}
                    </li>
                    {/* <li>Members: 78954</li>
                    <li>Published: No</li> */}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  loading: state.doctor.loading,
  activity: state.doctor.activity
});
export default connect(mapStateToProps, { getActivity })(Activity);
