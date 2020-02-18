import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Home = props => {
  return (
    <section id="content">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <div className="text-center">
              <h2 className="">Welcome</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Home.propTypes = {};

export default Home;
