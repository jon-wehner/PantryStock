import React from 'react';
import PropTypes from 'prop-types';

export default function FormErrors({ errors }) {
  return (
    <div className="errors__container">
      {errors.map((error) => (
        <div className="error" key={error}>{error.split(':')[1]}</div>
      ))}
    </div>

  );
}

FormErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
