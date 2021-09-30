import React from 'react';

const renderField = ({
  input,
  disableCell,
  label,
  type,

  meta: { touched, error, initial }
}) => {
  return (
    <input
      className={disableCell ? 'Shade' : ''}
      {...input}
      type={type}
      disabled={disableCell ? true : false}
    />
  );
};
export default renderField;
