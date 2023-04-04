import React, { useState, useEffect } from 'react';
import './index.css';

function Coba() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const sectionHeight = window.innerHeight;
    const stickyDiv = document.getElementById('stickyDiv');

    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const stopPosition = sectionHeight * 2;

      if (currentPosition >= sectionHeight && currentPosition < stopPosition) {
        setIsSticky(true);
        stickyDiv.style.top = '0';
      } else {
        setIsSticky(false);
        stickyDiv.style.top = `${sectionHeight}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <section className="red" />
      <section className="green" />
      <section className="blue" />
      <div id="stickyDiv" className={`sticky-div ${isSticky ? 'sticky' : ''}`}>
        <h2>Click me</h2>
      </div>
    </div>
  );
}

export default Coba;