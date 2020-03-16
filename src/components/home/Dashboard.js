import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProfileCard from "./ProfileCard";
import Tabs from "./Tabs";
import Spinner from "../layouts/Spinner";

const Dashboard = ({ user, loading }) => {
  let styles = {
    marginLeft: "0px"
  };
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="content-page" style={styles}>
        <div className="content">
          {/* Start Content*/}
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box">
                  <div className="page-title-right">
                    {/* <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item"> Logout</li>
                    </ol> */}
                  </div>
                  <h4 className="page-title">Hi {user.patient.name}</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <ProfileCard
                patient={user.patient}
                records={user.record}
                reports={user.report}
              />
              <Tabs
                patient={user.patient}
                records={user.record}
                reports={user.report}
              />
            </div>
            {/* end row*/}
          </div>{" "}
          {/* container */}
        </div>{" "}
        {/* content */}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {};
const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading
});

export default connect(mapStateToProps)(Dashboard);
