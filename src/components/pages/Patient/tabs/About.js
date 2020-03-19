import React, { Fragment } from "react";

const About = ({ patient }) => {
  return (
    <Fragment>
      <div className="pmb-block">
        <div className="pmbb-header">
          <h2>
            <i className="zmdi zmdi-account m-r-5" /> Basic Information
          </h2>
        </div>
        <div className="pmbb-body p-l-30">
          <div className="pmbb-view">
            <dl className="dl-horizontal">
              <dt>Full Name</dt>
              <dd>{patient.name}</dd>
            </dl>
            <dl className="dl-horizontal">
              <dt>Gender</dt>
              <dd>{patient.gender}</dd>
            </dl>
            <dl className="dl-horizontal">
              <dt>Birthday</dt>
              <dd>{patient.dob}</dd>
            </dl>
            <dl className="dl-horizontal">
              <dt>Register Number</dt>
              <dd>{patient.registerNumber}</dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="pmb-block">
        <div className="pmbb-header">
          <h2>
            <i className="zmdi zmdi-phone m-r-5" /> Contact Information
          </h2>
        </div>
        <div className="pmbb-body p-l-30">
          <div className="pmbb-view">
            <dl className="dl-horizontal">
              <dt>Mobile Phone</dt>
              <dd>{patient.phone}</dd>
            </dl>
            <dl className="dl-horizontal">
              <dt>Email Address</dt>
              <dd>{patient.email}</dd>
            </dl>
            <dl className="dl-horizontal">
              <dt>Address</dt>
              <dd>{patient.address}</dd>
            </dl>
            {/* <dl className="dl-horizontal">
              <dt>Skype</dt>
              <dd>malinda.hollaway</dd>
            </dl> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
