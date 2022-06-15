import React from 'react';
import { useAppSelector } from '../hooks';

interface PackageSizeSelectProps {
  setMeasurementId: Function
}
export default function PackageSizeSelect({ setMeasurementId }: PackageSizeSelectProps) {
  const measurements = useAppSelector((state) => state.items.measurements);

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
