import React, { Fragment } from "react";

const PrescriptionModal = ({ content, id, modalFade, display, hideModal }) => {
  console.log(content);

  return (
    <Fragment>
      <div
        className={`modal fade ${modalFade}`}
        id="modalDefault"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        style={{ display: display, paddingRight: "17px" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Prescription</h4>
            </div>
            <div className="modal-body">
              <table className="table table-bordered table-centered">
                <thead>
                  <td>Medicine</td>
                  <td>Days</td>
                  <td>Interval</td>
                  <td>Description</td>
                </thead>
                <tbody>
                  {content &&
                    content.prescription.map(pres => (
                      <tr>
                        <td>{pres.name}</td>
                        <td>{pres.days}</td>
                        <td>{pres.interval}</td>
                        <td>{pres.description}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-link"
                onClick={e => hideModal(e)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PrescriptionModal;
