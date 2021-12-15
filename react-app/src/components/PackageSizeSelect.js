import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function PackageSizeSelect({ setMeasurementId }) {
  const measurements = useSelector((state) => state.items.measurements);
  return (
    <select onChange={(e) => setMeasurementId(e.target.value)}>
      <option value="">Select Package Size</option>
      {measurements && measurements.map((measurement) => (
        <option
          value={measurement.id}
          key={measurement.id}
        >
          {measurement.unit}
        </option>
      ))}
    </select>
  );
}

PackageSizeSelect.propTypes = {
  setMeasurementId: PropTypes.func.isRequired,
};
