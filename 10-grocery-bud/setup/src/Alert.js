import React, { useEffect } from 'react';

const Alert = ({ text, success }) => {
  return (
    <>
      {text.length > 0 && (
        <p className={`alert ${success ? 'alert-success' : 'alert-danger'}`}>
          {text}
        </p>
      )}
    </>
  );
};

export default Alert;
