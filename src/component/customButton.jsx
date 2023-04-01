import React from 'react';

const CustomButton = ({ stylingButton, label, ...props }) => {
  return (
    <button {...props} className={`${stylingButton} `}>
      {label}
    </button>
  );
};

export default CustomButton;
