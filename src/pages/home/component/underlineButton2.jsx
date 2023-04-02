import React from 'react';
import './index.css';
const UnderlineButton2 = ({ styleButton, styleP, styleSvg, label, ...props }) => {
  return (
    <button className={`${styleButton} underlineButtonn`} {...props}>
      <p className={`${styleP}`}>{label}</p>
      <svg
        strokeWidth={4}
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        className={`${styleSvg} h-6 w-6`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default UnderlineButton2;
