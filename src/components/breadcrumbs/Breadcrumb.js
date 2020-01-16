import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Breadcrumb = props => {
    return (
        <Fragment>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">{props.title}</h1>
                        </div>
                        {/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link to={props.m1url}>{props.m1}</Link>
                                </li>

                                {props.m3 ? (
                                    <Fragment>
                                        <li className="breadcrumb-item">
                                            <Link to={props.m2url}>
                                                {props.m2}
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            {props.m3}
                                        </li>
                                    </Fragment>
                                ) : (
                                    <li className="breadcrumb-item active">
                                        {props.m2}
                                    </li>
                                )}
                            </ol>
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container-fluid */}
            </div>
        </Fragment>
    );
};

export default Breadcrumb;
