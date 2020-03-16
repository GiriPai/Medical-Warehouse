import React, { Fragment } from "react";

import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts != null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    // const Toast = Swal.mixin({
    //     toast: true,
    //     position: "top-end",
    //     showConfirmButton: false,
    //     timer: 3000
    // });
    // Toast.fire({
    //     type: alert.alertType,
    //     title: alert.msg
    // });

    // <div className="card card-purple">
    //   <div className={`text-center purple-text`}>{alert.msg}</div>
    // </div>
    // <div className="alert alert-primary" role="alert">
    //                                     This is a <strong>primary</strong> alert—check it out!
    //                                 </div>
    <div
      className={`alert alert-${alert.alertType}`}
      role="alert"
      key={alert.id}
    >
      {alert.msg}
    </div>
  ));

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
