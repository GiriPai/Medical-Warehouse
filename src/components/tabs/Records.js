import React, { Fragment, useState } from "react";
import moment from "moment";
import PrescriptionModal from "./PrescriptionModal";

const Records = ({ records }) => {
  const [modal, setModal] = useState({
    content: "",
    id: "",
    modalFade: "bs-example-modal-sm",
    display: "none"
  });

  const { modalFade, display, id, content } = modal;

  const showModal = (recordContent, recordId) => {
    setModal({
      content: recordContent,
      id: recordId,
      modalFade: "bs-example-modal-center show",
      display: "block"
    });
  };

  const hideModal = e => {
    setModal({
      content: "",
      id: "",
      modalFade: "bs-example-modal-sm",
      display: "none"
    });
  };
  return (
    <Fragment>
      <div className="tab-pane show active" id="records">
        <ul className="list-unstyled timeline-sm">
          {records &&
            records.length > 0 &&
            records.map(record => (
              <Fragment key={record._id}>
                <li className="timeline-sm-item">
                  <span className="timeline-sm-date">
                    {moment(record.createdAt).fromNow()}
                  </span>
                  <h5 className="mt-0 mb-1">
                    Consulted by <i>{record.doctor.name}</i> at{" "}
                    <i>{record.hospital.name}</i>
                  </h5>
                  <p>{}</p>
                  <p className="text-muted mt-2">
                    <b>Findings : </b> {record.findings.map(rec => rec + "; ")}
                    <p>
                      <b>Recommendation : </b>
                      {record.recommendation}
                    </p>
                    <p>
                      <b>Prescription :</b>{" "}
                      {/* <button className="btn btn-xs btn-info">View</button> */}
                      <button
                        type="button"
                        className="btn btn-xs btn-purple waves-effect waves-light"
                        onClick={e => showModal(record, record._id)}
                      >
                        View
                      </button>
                    </p>
                  </p>
                </li>
              </Fragment>
            ))}
        </ul>

        <PrescriptionModal
          // doctor={doctor}
          content={content}
          id={id}
          modalFade={modalFade}
          hideModal={hideModal}
          display={display}
        />
        {/* <h5 className="mb-3 mt-4 text-uppercase">
          <i className="mdi mdi-cards-variant mr-1" />
          Projects
        </h5> */}
        {/* <div className="table-responsive">
          <table className="table table-borderless mb-0">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Project Name</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Clients</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>App design and development</td>
                <td>01/01/2015</td>
                <td>10/15/2018</td>
                <td>
                  <span className="badge badge-info">Work in Progress</span>
                </td>
                <td>Halette Boivin</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Coffee detail page - Main Page</td>
                <td>21/07/2016</td>
                <td>12/05/2018</td>
                <td>
                  <span className="badge badge-success">Pending</span>
                </td>
                <td>Durandana Jolicoeur</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Poster illustation design</td>
                <td>18/03/2018</td>
                <td>28/09/2018</td>
                <td>
                  <span className="badge badge-pink">Done</span>
                </td>
                <td>Lucas Sabourin</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Drinking bottle graphics</td>
                <td>02/10/2017</td>
                <td>07/05/2018</td>
                <td>
                  <span className="badge badge-purple">Work in Progress</span>
                </td>
                <td>Donatien Brunelle</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Landing page design - Home</td>
                <td>17/01/2017</td>
                <td>25/05/2021</td>
                <td>
                  <span className="badge badge-warning">Coming soon</span>
                </td>
                <td>Karel Auberjo</td>
              </tr>
            </tbody>
          </table>
        </div>*/}
      </div>
      {/* end timeline content*/}
    </Fragment>
  );
};

export default Records;
