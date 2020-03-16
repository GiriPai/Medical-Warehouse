import React, { Fragment } from "react";

const ProfileCard = ({ patient, records, reports }) => {
  return (
    <Fragment>
      <div className="col-lg-4 col-xl-4">
        <div className="card-box text-center">
          <img
            src={`http://localhost:5000/${patient.avatar}`}
            className="rounded-circle avatar-xl img-thumbnail"
            alt="profile-image"
          />
          <h4 className="mb-0">{patient.name}</h4>
          <p className="text-muted">{patient.email}</p>
          <a
            href={`http://localhost:5000/${patient.qrcode}`}
            type="button"
            className="btn btn-success btn-xs waves-effect mb-2 waves-light"
          >
            QR
          </a>
          <a
            href={`http://localhost:5000/${patient.idCard}`}
            type="button"
            className="btn btn-danger btn-xs waves-effect mb-2 waves-light"
          >
            ID
          </a>
          <div className="text-left mt-3">
            <h4 className="font-13 text-uppercase">About Me :</h4>

            <p className="text-muted mb-2 font-13">
              <strong>Full Name :</strong>{" "}
              <span className="ml-2">{patient.name}</span>
            </p>
            <p className="text-muted mb-2 font-13">
              <strong>Mobile :</strong>
              <span className="ml-2">{patient.phone}</span>
            </p>
            <p className="text-muted mb-2 font-13">
              <strong>Email :</strong>{" "}
              <span className="ml-2 ">{patient.email}</span>
            </p>
            <p className="text-muted mb-1 font-13">
              <strong>Location :</strong>{" "}
              <span className="ml-2">{patient.address}</span>
            </p>
          </div>
        </div>{" "}
        {/* end card-box */}
        <div className="card-box">
          <h4 className="header-title">My QR</h4>
          {/* <p className="mb-3">
            Take a picture of your qr if needed
          </p> */}

          <div className="pt-1 text-center">
            <a
              href={`http://localhost:5000/${patient.qrcode}`}
              className="image-popup"
              title="Screenshot-5"
            >
              <img
                src={`http://localhost:5000/${patient.qrcode}`}
                className="img-fluid"
                alt="work-thumbnail"
              />
            </a>

            {/* <img src={`http://localhost:5000/${patient.avatar}`} /> */}
          </div>
        </div>{" "}
        {/* end card-box*/}
      </div>{" "}
      {/* end col*/}
    </Fragment>
  );
};

export default ProfileCard;
