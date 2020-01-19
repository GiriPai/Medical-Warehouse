import React, { Fragment } from "react";

const DoctorProfileItem = ({ data }) => {
    return (
        <Fragment>
            <Fragment>
                <tr id={data._id}>
                    <td>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <img
                                    alt="Avatar"
                                    className="table-avatar"
                                    src={`/${data.avatar}`}
                                ></img>
                            </li>
                        </ul>
                    </td>
                    <td>{data.name}</td>
                    <td>{data.registerNumber}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.isActive ? "Active" : "Inactive"}</td>
                </tr>
            </Fragment>
        </Fragment>
    );
};

export default DoctorProfileItem;
