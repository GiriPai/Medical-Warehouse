import React, { Fragment } from "react";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="content">
        <div className="card">
          <div className="card-header card-header-rose">Welcome Doctor</div>
          <div className="card-body">This is a Medical Warehouse project.</div>
        </div>
      </div>
      {/* <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card ">
                                <div className="card-header card-header-success card-header-icon">
                                    <div className="card-icon">
                                        <i className="material-icons"></i>
                                    </div>
                                    <h4 className="card-title">
                                        Global Sales by Top Locations
                                    </h4>
                                </div>
                                <div className="card-body ">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="table-responsive table-sales">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img src="../assets/img/flags/US.png" />
                                                                    <div />
                                                                </div>
                                                            </td>
                                                            <td>USA</td>
                                                            <td className="text-right">
                                                                2.920
                                                            </td>
                                                            <td className="text-right">
                                                                53.23%
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img src="../assets/img/flags/DE.png" />
                                                                </div>
                                                            </td>
                                                            <td>Germany</td>
                                                            <td className="text-right">
                                                                1.300
                                                            </td>
                                                            <td className="text-right">
                                                                20.43%
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img src="../assets/img/flags/AU.png" />
                                                                </div>
                                                            </td>
                                                            <td>Australia</td>
                                                            <td className="text-right">
                                                                760
                                                            </td>
                                                            <td className="text-right">
                                                                10.35%
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img src="../assets/img/flags/GB.png" />{" "}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                United Kingdom
                                                            </td>
                                                            <td className="text-right">
                                                                690
                                                            </td>
                                                            <td className="text-right">
                                                                7.87%
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img src="../assets/img/flags/RO.png" />
                                                                </div>
                                                            </td>
                                                            <td>Romania</td>
                                                            <td className="text-right">
                                                                600
                                                            </td>
                                                            <td className="text-right">
                                                                5.94%
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flag">
                                                                    <img src="../assets/img/flags/BR.png" />
                                                                </div>
                                                            </td>
                                                            <td>Brasil</td>
                                                            <td className="text-right">
                                                                550
                                                            </td>
                                                            <td className="text-right">
                                                                4.34%
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-md-6 ml-auto mr-auto">
                                            <div
                                                id="worldMap"
                                                style={{
                                                    height: 300
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-chart">
                                <div
                                    className="card-header card-header-rose"
                                    data-header-animation="true"
                                >
                                    <div
                                        className="ct-chart"
                                        id="websiteViewsChart"
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="card-actions">
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-link fix-broken-card"
                                        >
                                            <i className="material-icons">
                                                build
                                            </i>{" "}
                                            Fix Header!
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info btn-link"
                                            rel="tooltip"
                                            data-placement="bottom"
                                            title="Refresh"
                                        >
                                            <i className="material-icons">
                                                refresh
                                            </i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-default btn-link"
                                            rel="tooltip"
                                            data-placement="bottom"
                                            title="Change Date"
                                        >
                                            <i className="material-icons">
                                                edit
                                            </i>
                                        </button>
                                    </div>
                                    <h4 className="card-title">
                                        Website Views
                                    </h4>
                                    <p className="card-category">
                                        Last Campaign Performance
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">
                                            access_time
                                        </i>{" "}
                                        campaign sent 2 days ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-chart">
                                <div
                                    className="card-header card-header-success"
                                    data-header-animation="true"
                                >
                                    <div
                                        className="ct-chart"
                                        id="dailySalesChart"
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="card-actions">
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-link fix-broken-card"
                                        >
                                            <i className="material-icons">
                                                build
                                            </i>{" "}
                                            Fix Header!
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info btn-link"
                                            rel="tooltip"
                                            data-placement="bottom"
                                            title="Refresh"
                                        >
                                            <i className="material-icons">
                                                refresh
                                            </i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-default btn-link"
                                            rel="tooltip"
                                            data-placement="bottom"
                                            title="Change Date"
                                        >
                                            <i className="material-icons">
                                                edit
                                            </i>
                                        </button>
                                    </div>
                                    <h4 className="card-title">Daily Sales</h4>
                                    <p className="card-category">
                                        <span className="text-success">
                                            <i className="fa fa-long-arrow-up" />{" "}
                                            55%{" "}
                                        </span>{" "}
                                        increase in today sales.
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">
                                            access_time
                                        </i>{" "}
                                        updated 4 minutes ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-chart">
                                <div
                                    className="card-header card-header-info"
                                    data-header-animation="true"
                                >
                                    <div
                                        className="ct-chart"
                                        id="completedTasksChart"
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="card-actions">
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-link fix-broken-card"
                                        >
                                            <i className="material-icons">
                                                build
                                            </i>{" "}
                                            Fix Header!
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info btn-link"
                                            rel="tooltip"
                                            data-placement="bottom"
                                            title="Refresh"
                                        >
                                            <i className="material-icons">
                                                refresh
                                            </i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-default btn-link"
                                            rel="tooltip"
                                            data-placement="bottom"
                                            title="Change Date"
                                        >
                                            <i className="material-icons">
                                                edit
                                            </i>
                                        </button>
                                    </div>
                                    <h4 className="card-title">
                                        Completed Tasks
                                    </h4>
                                    <p className="card-category">
                                        Last Campaign Performance
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">
                                            access_time
                                        </i>{" "}
                                        campaign sent 2 days ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-warning card-header-icon">
                                    <div className="card-icon">
                                        <i className="material-icons">
                                            weekend
                                        </i>
                                    </div>
                                    <p className="card-category">Bookings</p>
                                    <h3 className="card-title">184</h3>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons text-danger">
                                            warning
                                        </i>
                                        <a href="#pablo">Get More Space...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-rose card-header-icon">
                                    <div className="card-icon">
                                        <i className="material-icons">
                                            equalizer
                                        </i>
                                    </div>
                                    <p className="card-category">
                                        Website Visits
                                    </p>
                                    <h3 className="card-title">75.521</h3>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">
                                            local_offer
                                        </i>{" "}
                                        Tracked from Google Analytics
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-success card-header-icon">
                                    <div className="card-icon">
                                        <i className="material-icons">store</i>
                                    </div>
                                    <p className="card-category">Revenue</p>
                                    <h3 className="card-title">$34,245</h3>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">
                                            date_range
                                        </i>{" "}
                                        Last 24 Hours
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-info card-header-icon">
                                    <div className="card-icon">
                                        <i className="fa fa-twitter" />
                                    </div>
                                    <p className="card-category">Followers</p>
                                    <h3 className="card-title">+245</h3>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">update</i>{" "}
                                        Just Updated
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Manage Listings</h3>
                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-product">
                                <div
                                    className="card-header card-header-image"
                                    data-header-animation="true"
                                >
                                    <a href="#pablo">
                                        <img
                                            className="img"
                                            src="../assets/img/card-2.jpg"
                                        />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="card-actions text-center">
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-link fix-broken-card"
                                        >
                                            <i className="material-icons">
                                                build
                                            </i>{" "}
                                            Fix Header!
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-default btn-link"
                                            rel="tooltip"
                                            data-placement="bottom"
                                            title="View"
                                        >
                                            <i className="material-icons">
                                                art_track
                                            </i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-success btn-link"
                                            rel="tooltip"
                                            data-placement="bottom"
                                            title="Edit"
                                        >
                                            <i className="material-icons">
                                                edit
                                            </i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-link"
                                            rel="tooltip"
                                            data-placement="bottom"
                                            title="Remove"
                                        >
                                            <i className="material-icons">
                                                close
                                            </i>
                                        </button>
                                    </div>
                                    <h4 className="card-title">
                                        <a href="#pablo">
                                            Cozy 5 Stars Apartment
                                        </a>
                                    </h4>
                                    <div className="card-description">
                                        The place is close to Barceloneta Beach
                                        and bus stop just 2 min by walk and near
                                        to "Naviglio" where you can enjoy the
                                        main night life in Barcelona.
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="price">
                                        <h4>$899/night</h4>
                                    </div>
                                    <div className="stats">
                                        <p className="card-category">
                                            <i className="material-icons">
                                                place
                                            </i>{" "}
                                            Barcelona, Spain
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-product">
                                <div
                                    className="card-header card-header-image"
                                    data-header-animation="true"
                                >
                                    <a href="#pablo">
                                        <img
                                            className="img"
                                            src="../assets/img/card-3.jpg"
                                        />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="card-actions text-center">
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-link fix-broken-card"
                                        >
                                            <i className="material-icons">
                                                build
                                            </i>{" "}
                                            Fix Header!
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-default btn-link"
                                            rel="tooltip"
                                            data-placement="bottom"
                                            title="View"
                                        >
                                            <i className="material-icons">
                                                art_track
                                            </i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-success btn-link"
                                            rel="tooltip"
                                            data-placement="bottom"
                                            title="Edit"
                                        >
                                            <i className="material-icons">
                                                edit
                                            </i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-link"
                                            rel="tooltip"
                                            data-placement="bottom"
                                            title="Remove"
                                        >
                                            <i className="material-icons">
                                                close
                                            </i>
                                        </button>
                                    </div>
                                    <h4 className="card-title">
                                        <a href="#pablo">Office Studio</a>
                                    </h4>
                                    <div className="card-description">
                                        The place is close to Metro Station and
                                        bus stop just 2 min by walk and near to
                                        "Naviglio" where you can enjoy the night
                                        life in London, UK.
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="price">
                                        <h4>$1.119/night</h4>
                                    </div>
                                    <div className="stats">
                                        <p className="card-category">
                                            <i className="material-icons">
                                                place
                                            </i>{" "}
                                            London, UK
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-product">
                                <div
                                    className="card-header card-header-image"
                                    data-header-animation="true"
                                >
                                    <a href="#pablo">
                                        <img
                                            className="img"
                                            src="../assets/img/card-1.jpg"
                                        />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="card-actions text-center">
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-link fix-broken-card"
                                        >
                                            <i className="material-icons">
                                                build
                                            </i>{" "}
                                            Fix Header!
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-default btn-link"
                                            rel="tooltip"
                                            data-placement="bottom"
                                            title="View"
                                        >
                                            <i className="material-icons">
                                                art_track
                                            </i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-success btn-link"
                                            rel="tooltip"
                                            data-placement="bottom"
                                            title="Edit"
                                        >
                                            <i className="material-icons">
                                                edit
                                            </i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-link"
                                            rel="tooltip"
                                            data-placement="bottom"
                                            title="Remove"
                                        >
                                            <i className="material-icons">
                                                close
                                            </i>
                                        </button>
                                    </div>
                                    <h4 className="card-title">
                                        <a href="#pablo">Beautiful Castle</a>
                                    </h4>
                                    <div className="card-description">
                                        The place is close to Metro Station and
                                        bus stop just 2 min by walk and near to
                                        "Naviglio" where you can enjoy the main
                                        night life in Milan.
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="price">
                                        <h4>$459/night</h4>
                                    </div>
                                    <div className="stats">
                                        <p className="card-category">
                                            <i className="material-icons">
                                                place
                                            </i>{" "}
                                            Milan, Italy
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
    </Fragment>
  );
};

export default Dashboard;
