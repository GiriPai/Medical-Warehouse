import PropTypes from "prop-types";
import { connect } from "react-redux";
import Swal from "sweetalert2";

const ToastAlert = ({ alerts }) =>
    alerts != null &&
    alerts.length > 0 &&
    alerts.map(alert => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000
        });
        Toast.fire({
            type: alert.alertType,
            title: alert.msg
        });
        return null;
    });

ToastAlert.propTypes = {
    alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(ToastAlert);
