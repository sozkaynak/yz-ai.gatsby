import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'reactstrap';


const Banner = ({ title }) => (
  <Jumbotron>
    <div className="container">
      <h1 className="display-4">{title}</h1>
    </div>
  </Jumbotron>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Banner;
