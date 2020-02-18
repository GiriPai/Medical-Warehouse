import React, { useEffect, Fragment } from "react";
import About from "./tabs/About";
import Reports from "./tabs/Reports";
import Records from "./tabs/Records";
import AddReport from "./tabs/AddReport";

const Patient = ({ match }) => {
  return (
    <Fragment>
      <section id="content">
        <div className="container">
          <div className="card" id="profile-main">
            <div className="pm-overview c-overflow">
              <div className="pmo-pic">
                <div className="p-relative">
                  <a href="#">
                    <img
                      className="img-responsive"
                      src="/img/profile-pics/profile-pic-2.jpg"
                      alt="user"
                    />
                  </a>
                  <div className="dropdown pmop-message">
                    <a
                      data-toggle="dropdown"
                      href="#"
                      className="btn palette-White bg btn-float z-depth-1"
                    >
                      <i className="zmdi zmdi-comment-text-alt" />
                    </a>
                    <div className="dropdown-menu">
                      <textarea
                        placeholder="Write something..."
                        defaultValue={""}
                      />
                      <button className="btn bgm-green btn-float">
                        <i className="zmdi zmdi-mail-send" />
                      </button>
                    </div>
                  </div>
                  <a href="#" className="pmop-edit">
                    <i className="zmdi zmdi-camera" />{" "}
                    <span className="hidden-xs">Update Profile Picture</span>
                  </a>
                </div>
                <div className="pmo-stat">
                  <h2 className="m-0 c-white">1562</h2>
                  Total Connections
                </div>
              </div>
              <div className="pmo-block pmo-contact hidden-xs">
                <h2>Contact</h2>
                <ul>
                  <li>
                    <i className="zmdi zmdi-phone" /> 00971 12345678 9
                  </li>
                  <li>
                    <i className="zmdi zmdi-email" /> malinda-h@gmail.com
                  </li>
                  <li>
                    <i className="zmdi zmdi-facebook-box" /> malinda.hollaway
                  </li>
                  <li>
                    <i className="zmdi zmdi-twitter" /> @malinda
                    (twitter.com/malinda)
                  </li>
                  <li>
                    <i className="zmdi zmdi-pin" />
                    <address className="m-b-0 ng-binding">
                      44-46 Morningside Road,
                      <br />
                      Edinburgh,
                      <br />
                      Scotland
                    </address>
                  </li>
                </ul>
              </div>
              <div className="pmo-block pmo-items hidden-xs">
                <h2>Connections</h2>
                <div className="pmob-body">
                  <div className="row">
                    <a href="#" className="col-xs-2">
                      <img
                        className="img-circle"
                        src="/img/profile-pics/1.jpg"
                        alt="user"
                      />
                    </a>
                    <a href="#" className="col-xs-2">
                      <img
                        className="img-circle"
                        src="/img/profile-pics/2.jpg"
                        alt="user"
                      />
                    </a>
                    <a href="#" className="col-xs-2">
                      <img
                        className="img-circle"
                        src="/img/profile-pics/3.jpg"
                        alt="user"
                      />
                    </a>
                    <a href="#" className="col-xs-2">
                      <img
                        className="img-circle"
                        src="/img/profile-pics/4.jpg"
                        alt="user"
                      />
                    </a>
                    <a href="#" className="col-xs-2">
                      <img
                        className="img-circle"
                        src="/img/profile-pics/5.jpg"
                        alt="user"
                      />
                    </a>
                    <a href="#" className="col-xs-2">
                      <img
                        className="img-circle"
                        src="/img/profile-pics/6.jpg"
                        alt="user"
                      />
                    </a>
                    <a href="#" className="col-xs-2">
                      <img
                        className="img-circle"
                        src="/img/profile-pics/7.jpg"
                        alt="user"
                      />
                    </a>
                    <a href="#" className="col-xs-2">
                      <img
                        className="img-circle"
                        src="/img/profile-pics/8.jpg"
                        alt="user"
                      />
                    </a>
                    <a href="#" className="col-xs-2">
                      <img
                        className="img-circle"
                        src="/img/profile-pics/1.jpg"
                        alt="user"
                      />
                    </a>
                    <a href="#" className="col-xs-2">
                      <img
                        className="img-circle"
                        src="/img/profile-pics/2.jpg"
                        alt="user"
                      />
                    </a>
                    <a href="#" className="col-xs-2">
                      <img
                        className="img-circle"
                        src="/img/profile-pics/3.jpg"
                        alt="user"
                      />
                    </a>
                    <a href="#" className="col-xs-2">
                      <img
                        className="img-circle"
                        src="/img/profile-pics/4.jpg"
                        alt="user"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pm-body clearfix">
              <ul className=" tab-nav tn-justified tn-icon" role="tablist">
                <li className="active waves-effect" role="presentation">
                  <a
                    className="col-sx-4"
                    href="#tab-1"
                    aria-controls="tab-1"
                    role="tab"
                    data-toggle="tab"
                  >
                    About
                  </a>
                </li>
                <li className="waves-effect">
                  <a
                    className="col-sx-4"
                    href="#tab-2"
                    aria-controls="tab-3"
                    role="tab"
                    data-toggle="tab"
                  >
                    Records
                  </a>
                </li>
                <li className="waves-effect">
                  <a
                    className="col-sx-4"
                    href="#tab-3"
                    aria-controls="tab-3"
                    role="tab"
                    data-toggle="tab"
                  >
                    Reports
                  </a>
                </li>
                <li className="waves-effect">
                  <a
                    className="col-sx-4"
                    href="#tab-4"
                    aria-controls="tab-4"
                    role="tab"
                    data-toggle="tab"
                  >
                    Add Reports
                  </a>
                </li>
              </ul>
              {/* .......................... */}
              <div className="tab-content p-20">
                <div
                  role="tabpanel"
                  className="tab-pane animated fadeIn in active"
                  id="tab-1"
                >
                  <About />
                </div>
                <div
                  role="tabpanel"
                  className="tab-pane animated fadeIn"
                  id="tab-2"
                >
                  <Records />
                </div>
                <div
                  role="tabpanel"
                  className="tab-pane animated fadeIn"
                  id="tab-3"
                >
                  <Reports />
                </div>
                <div
                  role="tabpanel"
                  className="tab-pane animated fadeIn"
                  id="tab-4"
                >
                  <AddReport />
                </div>
              </div>

              {/* ..................... */}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Patient;
