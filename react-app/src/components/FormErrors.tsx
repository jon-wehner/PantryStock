import React from 'react';

interface FormErrorsProps {
  errors: string[] | never[]
}

export default function FormErrors({ errors }: FormErrorsProps) {
  return (
    <div className="errors__container">
      {errors.map((error) => (
        <div className="error" key={error}>{error.split(':')[1]}</div>
      ))}
    </div>

  );
}
