import React, { Fragment } from "react";

const SidebarFilter = () => {
  return (
    <Fragment>
      <div className="fixed-plugin">
        <div className="dropdown show-dropdown">
          <a href="#" data-toggle="dropdown">
            <i className="fa fa-cog fa-2x"> </i>
          </a>
          <ul className="dropdown-menu">
            <li className="header-title"> Sidebar Filters</li>
            <li className="adjustments-line">
              <a
                href="javascript:void(0)"
                className="switch-trigger active-color"
              >
                <div className="badge-colors ml-auto mr-auto">
                  <span
                    className="badge filter badge-purple"
                    data-color="purple"
                  />
                  <span
                    className="badge filter badge-azure"
                    data-color="azure"
                  />
                  <span
                    className="badge filter badge-green"
                    data-color="green"
                  />
                  <span
                    className="badge filter badge-warning"
                    data-color="orange"
                  />
                  <span
                    className="badge filter badge-danger"
                    data-color="danger"
                  />
                  <span
                    className="badge filter badge-rose active"
                    data-color="rose"
                  />
                </div>
                <div className="clearfix" />
              </a>
            </li>
            <li className="header-title">Sidebar Background</li>
            <li className="adjustments-line">
              <a
                href="javascript:void(0)"
                className="switch-trigger background-color"
              >
                <div className="ml-auto mr-auto">
                  <span
                    className="badge filter badge-black active"
                    data-background-color="black"
                  />
                  <span
                    className="badge filter badge-white"
                    data-background-color="white"
                  />
                  <span
                    className="badge filter badge-red"
                    data-background-color="red"
                  />
                </div>
                <div className="clearfix" />
              </a>
            </li>
            <li className="adjustments-line">
              <a href="javascript:void(0)" className="switch-trigger">
                <p>Sidebar Mini</p>
                <label className="ml-auto">
                  <div className="togglebutton switch-sidebar-mini">
                    <label>
                      <input type="checkbox" />
                      <span className="toggle" />
                    </label>
                  </div>
                </label>
                <div className="clearfix" />
              </a>
            </li>
            <li className="adjustments-line">
              <a href="javascript:void(0)" className="switch-trigger">
                <p>Sidebar Images</p>
                <label className="switch-mini ml-auto">
                  <div className="togglebutton switch-sidebar-image">
                    <label>
                      <input type="checkbox" defaultChecked />
                      <span className="toggle" />
                    </label>
                  </div>
                </label>
                <div className="clearfix" />
              </a>
            </li>
            <li className="header-title">Images</li>
            <li className="active">
              <a
                className="img-holder switch-trigger"
                href="javascript:void(0)"
              >
                <img src="../assets/img/sidebar-1.jpg" alt="Image" />
              </a>
            </li>
            <li>
              <a
                className="img-holder switch-trigger"
                href="javascript:void(0)"
              >
                <img src="../assets/img/sidebar-2.jpg" alt="Image" />
              </a>
            </li>
            <li>
              <a
                className="img-holder switch-trigger"
                href="javascript:void(0)"
              >
                <img src="../assets/img/sidebar-3.jpg" alt="Image" />
              </a>
            </li>
            <li>
              <a
                className="img-holder switch-trigger"
                href="javascript:void(0)"
              >
                <img src="../assets/img/sidebar-4.jpg" alt="Image" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default SidebarFilter;
