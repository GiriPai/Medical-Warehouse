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
        // <Fragment>
        //     <div className="card card-purple">
        //         <div className={`text-center purple-text`}>{alert.msg}</div>
        //     </div>
        // </Fragment>

        <div className={`alert alert-${alert.alertType}`}>
            <span className="text text-center">{alert.msg}</span>
        </div>
    ));

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
