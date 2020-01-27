import React, { Fragment, useState } from "react";
import RecordDetails from "./RecordDetails";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const RecordItem = ({ record }) => {
  const [modal, setModal] = useState({
    data: [],
    showModal: false
  });

  const handleShow = record => {
    setModal({ data: record, showModal: true });
  };

  const handleClose = () => {
    setModal({ data: {}, showModal: false });
  };

  return (
    <Fragment>
      <tr key={record._id}>
        <td>
          <Moment format="DD-MM-YYYY">{record.createdAt}</Moment>
        </td>

        <td>{record.cause}</td>
        <td>{record.hospital.name}</td>
        <td>{record.doctor.name}</td>
        <td className="text-right">
          <Link
            to="#!"
            onClick={e => handleShow(record)}
            className="btn btn-link btn-info btn-just-icon"
          >
            <i className="material-icons">info</i>
          </Link>
          {/* <a
                        href="#modal1"
                        className="btn btn-link btn-warning btn-just-icon edit"
                    >
                        <i className="material-icons">dvr</i>
                    </a>
                    <a
                        href="#"
                        className="btn btn-link btn-danger btn-just-icon remove"
                    >
                        <i className="material-icons">close</i>
                    </a> */}
        </td>
        <RecordDetails
          handleClose={handleClose}
          show={modal.showModal}
          record={modal.data}
        />
      </tr>
    </Fragment>
  );
};

export default RecordItem;
