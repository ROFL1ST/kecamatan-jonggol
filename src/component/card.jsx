import React, { useState, useEffect, useRef } from "react";

export default function Card() {
    const stickyRef = useRef(null);

    useEffect(() => {
      const sectionHeight = window.innerHeight;
      const stickyHeight = stickyRef.current.offsetHeight;
      const bottomPosition = sectionHeight * 2 - stickyHeight;
  
      const handleScroll = () => {
        if (window.pageYOffset < sectionHeight) {
          stickyRef.current.style.position = "sticky";
          stickyRef.current.style.top = "0";
        } else if (window.pageYOffset < bottomPosition) {
          stickyRef.current.style.position = "fixed";
          stickyRef.current.style.top = "50%";
          stickyRef.current.style.transform = "translateY(-50%)";
        } else {
          stickyRef.current.style.position = "static";
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div
      ref={stickyRef}
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md cursor-pointer"
    >
      <span className="text-lg font-bold">Click me</span>
    </div>
  );
}
