import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Breadcrumb from "../breadcrumbs/Breadcrumb";
import { getCurrentProfile } from "../../actions/profile";
import { getAllDetails } from "../../actions/admin";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";

const Dashboard = ({
  getCurrentProfile,
  getAllDetails,
  auth,
  profile: { profile, loading },
  details
}) => {
  useEffect(() => {
    getCurrentProfile();
    getAllDetails();
  }, []);
  return loading && profile === null ? (
    <Spinner />
  ) : details.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <Breadcrumb title="Dashboard" m1url="/home" m1="Home" m2="Dashboard" />
        {/* /.content-header */}

        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{details.allDetails.hospitals.length}</h3>
                    <p>Total Hospitals</p>
                  </div>
                  <div className="icon">
                    {/* <i className="ion ion-bag" /> */}
                    <i className="fas fa-hospital-alt" />
                  </div>
                  <Link to="/hospitals" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>{details.allDetails.doctors.length}</h3>
                    <p>Total Doctors</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-user-md" />
                  </div>
                  <Link to="/doctors" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>{details.allDetails.patients.length}</h3>
                    <p>Total Patients</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                  <Link to="/patients" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>65</h3>
                    <p>Unique Visitors</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph" />
                  </div>
                  <Link to="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getAllDetails: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  details: state.admin
});

export default connect(mapStateToProps, { getCurrentProfile, getAllDetails })(
  Dashboard
);
