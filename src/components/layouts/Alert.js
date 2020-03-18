import React, { Fragment } from "react";

import PropTypes from "prop-types";
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

    <div key={alert.id} className={`callout callout-${alert.alertType}`}>
      {/* <h4>Reminder!</h4> */}
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
