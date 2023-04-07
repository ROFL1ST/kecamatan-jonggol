import React from 'react';
import './index.css';
import { ArrowCircleRight2 } from 'iconsax-react';

const UnderButton3 = () => {
  return (
    <button class="cta flex items-center transition-all ease-in-out underline3">
      <span class="hover-underline-animation text-[14px] mr-3 underline3">Lihat Semua Agenda</span>
      <ArrowCircleRight2 className="svg"/>
    </button>
  );
};

export default UnderButton3;
