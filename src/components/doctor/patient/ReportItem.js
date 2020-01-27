import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import ReportDetails from "./ReportDetails";
import Moment from "react-moment";

const ReportItem = ({ report }) => {
    const [modal, setModal] = useState({
        data: [],
        showModal: false
    });

    const handleShow = report => {
        setModal({ data: report, showModal: true });
    };

    const handleClose = () => {
        setModal({ data: {}, showModal: false });
    };

    return (
        <Fragment>
            <tr key={report._id}>
                <td>
                    <Moment format="DD-MM-YYYY">{report.createdAt}</Moment>
                </td>

                <td>{report.reportType}</td>
                <td>{report.hospital.name}</td>
                <td>
                    {" "}
                    <a
                        onClick={e => handleShow(report)}
                        className="btn btn-link btn-info btn-just-icon like"
                    >
                        <i className="material-icons">assignment</i>
                    </a>
                </td>
                <td className="text-right">
                    <a
                        href={`http://localhost:5000/${report.document}`}
                        className="btn btn-link btn-danger btn-just-icon remove"
                        download
                    >
                        <i className="material-icons">get_app</i>
                    </a>
                </td>
                <ReportDetails
                    handleClose={handleClose}
                    show={modal.showModal}
                    report={modal.data}
                />
            </tr>
        </Fragment>
    );
};

ReportItem.propTypes = {};

export default ReportItem;
