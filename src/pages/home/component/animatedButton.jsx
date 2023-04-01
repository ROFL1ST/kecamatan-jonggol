import React from 'react';

const AnimatedButton = ({ styleButton, label, ...props }) => {
  return (
    <button {...props} className={`${styleButton} animatedButton`}>
      {label}
    </button>
  );
};

export default AnimatedButton;
