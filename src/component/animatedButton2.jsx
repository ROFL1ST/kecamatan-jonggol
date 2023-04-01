import React from 'react';

const AnimatedButton2 = ({ styleButton, styleP, label, ...props }) => {
  return (
    <button className={`${styleButton} animatedButton2`} {...props}>
      <span className={`${styleP}`}>{label}</span>
    </button>
  );
};

export default AnimatedButton2;
