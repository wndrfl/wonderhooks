import React from 'react'
import PropTypes from 'prop-types';

const ExampleHolder = ({ title, description, Example }) => (
  <div className="example-holder">
    <div className="example-left">
      <h1>{title}</h1>
      <div>{description}</div>
    </div>
    <div className="example-right">
      <Example />
    </div>
  </div>
);

ExampleHolder.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  Example: PropTypes.object
};

export default ExampleHolder;
