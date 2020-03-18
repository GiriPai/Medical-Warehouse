import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Breadcrumb from "../breadcrumbs/Breadcrumb";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addHospital, getHospitals } from "../../actions/hospital";
import Alert from "../layouts/Alert";

const CreateHospital = ({ addHospital, history }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        registerNumber: "",
        branch: "",
        name: "",
        address: "",
        phone: "",
        avatar: null,
        isActive: false
    });

    let {
        email,
        password,
        registerNumber,
        branch,
        name,
        address,
        phone,
        avatar,
        isActive
    } = formData;

    const data = new FormData();

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onChangeFileHandler = event => {
        // console.log(event.target.files[0]);
        setFormData({ ...formData, avatar: event.target.files[0] });
    };

    const handleCheckClick = e => {
        setFormData({ ...formData, isActive: !isActive });
    };
    const onSubmit = e => {
        e.preventDefault();
        data.append("registerNumber", registerNumber);

        data.append("name", name);
        data.append("email", email);
        data.append("password", password);

        data.append("branch", branch);
        data.append("address", address);
        data.append("phone", phone);
        data.append("isActive", isActive);

        data.append("avatar", avatar);

        addHospital(data, history);
    };

    return (
        <Fragment>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                <Breadcrumb
                    title="Create A New Hospital"
                    m1="Home"
                    m1url="/home"
                    m2="Hospitals"
                    m2url="/hospitals"
                    m3="Create Hospital"
                />
                <Alert />
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            {/* left column */}
                            <div className="col-md-12">
                                {/* general form elements */}
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            Create Hospital
                                        </h3>
                                    </div>
                                    {/* /.card-header */}

                                    {/* form start */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <form
                                                name="createForm"
                                                action="!#"
                                                onSubmit={e => onSubmit(e)}
                                            >
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">
                                                            Email address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="exampleInputEmail1"
                                                            placeholder="Enter email"
                                                            name="email"
                                                            value={email}
                                                            onChange={e =>
                                                                onChange(e)
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="exampleInputPassword1"
                                                            placeholder="Password"
                                                            name="password"
                                                            value={password}
                                                            onChange={e =>
                                                                onChange(e)
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="registerNumber">
                                                            Register Number
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="registerNumber"
                                                            placeholder="Register Number"
                                                            name="registerNumber"
                                                            value={
                                                                registerNumber
                                                            }
                                                            onChange={e =>
                                                                onChange(e)
                                                            }
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="branch">
                                                            Branch
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="branch"
                                                            placeholder="Branch"
                                                            name="branch"
                                                            value={branch}
                                                            onChange={e =>
                                                                onChange(e)
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-switch">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customSwitch1"
                                                                name="isActive"
                                                                checked={
                                                                    isActive
                                                                }
                                                                value={isActive}
                                                                onChange={e =>
                                                                    handleCheckClick(
                                                                        e
                                                                    )
                                                                }
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="customSwitch1"
                                                            >
                                                                ACTIVE
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="col-md-6">
                                            <form
                                                name="createForm"
                                                action="!#"
                                                onSubmit={e => onSubmit(e)}
                                            >
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <label htmlFor="name">
                                                            Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            placeholder="Name"
                                                            name="name"
                                                            value={name}
                                                            onChange={e =>
                                                                onChange(e)
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="phone">
                                                            Phone
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="phone"
                                                            placeholder="Phone"
                                                            name="phone"
                                                            value={phone}
                                                            onChange={e =>
                                                                onChange(e)
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="address">
                                                            Address
                                                        </label>
                                                        <textarea
                                                            type="textarea"
                                                            className="form-control"
                                                            id="address"
                                                            placeholder="Enter address"
                                                            name="address"
                                                            value={address}
                                                            onChange={e =>
                                                                onChange(e)
                                                            }
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputFile">
                                                            File input
                                                        </label>
                                                        <div className="input-group">
                                                            <div className="custom-file">
                                                                <input
                                                                    type="file"
                                                                    className="custom-file-input"
                                                                    id="exampleInputFile"
                                                                    name="avatar"
                                                                    onChange={e =>
                                                                        onChangeFileHandler(
                                                                            e
                                                                        )
                                                                    }
                                                                />
                                                                <label
                                                                    className="custom-file-label"
                                                                    htmlFor="exampleInputFile"
                                                                >
                                                                    Choose file
                                                                </label>
                                                            </div>
                                                            {/* <div className="input-group-append">
                                                                <span
                                                                    className="input-group-text"
                                                                    id
                                                                >
                                                                    Upload
                                                                </span>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /.card-body */}
                                            </form>
                                        </div>
                                    </div>
                                    <form
                                        name="createForm"
                                        action="!#"
                                        onSubmit={e => onSubmit(e)}
                                    >
                                        <div className="card-footer">
                                            <input
                                                type="submit"
                                                className="btn btn-primary"
                                                value="Submit"
                                            />
                                        </div>
                                    </form>
                                </div>
                                {/* /.card */}
                            </div>
                            {/*/.col (left) */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </section>
            </div>
            {/* /.content-wrapper */}
        </Fragment>
    );
};

CreateHospital.propTypes = {
    addHospital: PropTypes.func.isRequired
};

export default connect(null, { addHospital })(withRouter(CreateHospital));
