import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="pmb-block">
        <div className="pmbb-header">
          <h2>
            <i className="zmdi zmdi-equalizer m-r-5" /> Summary
          </h2>
          <ul className="actions">
            <li className="dropdown">
              <a href="#" data-toggle="dropdown">
                <i className="zmdi zmdi-more-vert" />
              </a>
              <ul className="dropdown-menu dropdown-menu-right">
                <li>
                  <a data-pmb-action="edit" href="#">
                    Edit
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="pmbb-body p-l-30">
          <div className="pmbb-view">
            Sed eu est vulputate, fringilla ligula ac, maximus arcu. Donec sed
            felis vel magna mattis ornare ut non turpis. Sed id arcu elit. Sed
            nec sagittis tortor. Mauris ante urna, ornare sit amet mollis eu,
            aliquet ac ligula. Nullam dolor metus, suscipit ac imperdiet nec,
            consectetur sed ex. Sed cursus porttitor leo.
          </div>
          <div className="pmbb-edit">
            <div className="fg-line">
              <textarea
                className="form-control"
                rows={5}
                placeholder="Summary..."
                defaultValue={
                  "Sed eu est vulputate, fringilla ligula ac, maximus arcu. Donec sed felis vel magna mattis ornare ut non turpis. Sed id arcu elit. Sed nec sagittis tortor. Mauris ante urna, ornare sit amet mollis eu, aliquet ac ligula. Nullam dolor metus, suscipit ac imperdiet nec, consectetur sed ex. Sed cursus porttitor leo."
                }
              />
            </div>
            <div className="m-t-10">
              <button className="btn btn-primary btn-sm">Save</button>
              <button data-pmb-action="reset" className="btn btn-link btn-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pmb-block">
        <div className="pmbb-header">
          <h2>
            <i className="zmdi zmdi-account m-r-5" /> Basic Information
          </h2>
          <ul className="actions">
            <li className="dropdown">
              <a href="#" data-toggle="dropdown">
                <i className="zmdi zmdi-more-vert" />
              </a>
              <ul className="dropdown-menu dropdown-menu-right">
                <li>
                  <a data-pmb-action="edit" href="#">
                    Edit
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="pmbb-body p-l-30">
          <div className="pmbb-view">
            <dl className="dl-horizontal">
              <dt>Full Name</dt>
              <dd>Mallinda Hollaway</dd>
            </dl>
            <dl className="dl-horizontal">
              <dt>Gender</dt>
              <dd>Female</dd>
            </dl>
            <dl className="dl-horizontal">
              <dt>Birthday</dt>
              <dd>June 23, 1990</dd>
            </dl>
            <dl className="dl-horizontal">
              <dt>Martial Status</dt>
              <dd>Single</dd>
            </dl>
          </div>
          <div className="pmbb-edit">
            <dl className="dl-horizontal">
              <dt className="p-t-10">Full Name</dt>
              <dd>
                <div className="fg-line">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. Mallinda Hollaway"
                  />
                </div>
              </dd>
            </dl>
            <dl className="dl-horizontal">
              <dt className="p-t-10">Gender</dt>
              <dd>
                <div className="fg-line">
                  <select className="form-control">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </dd>
            </dl>
            <dl className="dl-horizontal">
              <dt className="p-t-10">Birthday</dt>
              <dd>
                <div className="dtp-container dropdown fg-line">
                  <input
                    type="text"
                    className="form-control date-picker"
                    data-toggle="dropdown"
                    placeholder="Click here..."
                  />
                </div>
              </dd>
            </dl>
            <dl className="dl-horizontal">
              <dt className="p-t-10">Martial Status</dt>
              <dd>
                <div className="fg-line">
                  <select className="form-control">
                    <option>Single</option>
                    <option>Married</option>
                    <option>Other</option>
                  </select>
                </div>
              </dd>
            </dl>
            <div className="m-t-30">
              <button className="btn btn-primary btn-sm">Save</button>
              <button data-pmb-action="reset" className="btn btn-link btn-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pmb-block">
        <div className="pmbb-header">
          <h2>
            <i className="zmdi zmdi-phone m-r-5" /> Contact Information
          </h2>
          <ul className="actions">
            <li className="dropdown">
              <a href="#" data-toggle="dropdown">
                <i className="zmdi zmdi-more-vert" />
              </a>
              <ul className="dropdown-menu dropdown-menu-right">
                <li>
                  <a data-pmb-action="edit" href="#">
                    Edit
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="pmbb-body p-l-30">
          <div className="pmbb-view">
            <dl className="dl-horizontal">
              <dt>Mobile Phone</dt>
              <dd>00971 12345678 9</dd>
            </dl>
            <dl className="dl-horizontal">
              <dt>Email Address</dt>
              <dd>malinda.h@gmail.com</dd>
            </dl>
            <dl className="dl-horizontal">
              <dt>Twitter</dt>
              <dd>@malinda</dd>
            </dl>
            <dl className="dl-horizontal">
              <dt>Skype</dt>
              <dd>malinda.hollaway</dd>
            </dl>
          </div>
          <div className="pmbb-edit">
            <dl className="dl-horizontal">
              <dt className="p-t-10">Mobile Phone</dt>
              <dd>
                <div className="fg-line">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. 00971 12345678 9"
                  />
                </div>
              </dd>
            </dl>
            <dl className="dl-horizontal">
              <dt className="p-t-10">Email Address</dt>
              <dd>
                <div className="fg-line">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="eg. malinda.h@gmail.com"
                  />
                </div>
              </dd>
            </dl>
            <dl className="dl-horizontal">
              <dt className="p-t-10">Twitter</dt>
              <dd>
                <div className="fg-line">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. @malinda"
                  />
                </div>
              </dd>
            </dl>
            <dl className="dl-horizontal">
              <dt className="p-t-10">Skype</dt>
              <dd>
                <div className="fg-line">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. malinda.hollaway"
                  />
                </div>
              </dd>
            </dl>
            <div className="m-t-30">
              <button className="btn btn-primary btn-sm">Save</button>
              <button data-pmb-action="reset" className="btn btn-link btn-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
