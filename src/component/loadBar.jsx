import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useSelector } from "react-redux";

const TopBarLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const state = useSelector((state) => state.data);

  useEffect(() => {
    let timeoutId;

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      setIsLoading(true);
      timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    const unlisten = () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearTimeout(timeoutId);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return unlisten;
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const tl = gsap.timeline();
    tl.to(".top-bar", {
      width: "0%",
      height: "3px",
      duration: 0.3,
      top: "0",
      background: "#fff012",
    })
      .to(".top-bar", {
        width: "50%",
        duration: 0.5,
        top: "0",
        background: "#fff012",
        position: "fixed",
        zIndex: "50",
      })
      .to(".top-bar", {
        width: "100%",
        duration: 0.5,
        top: "0",
        background: "#fff012",
        position: "fixed",
        zIndex: "50",
      })
      .to(".top-bar", {
        height: "0px",
        duration: 0.3,
        onComplete: () => setIsLoading(false),
      });
  }, [location.key]);
  //   console.log(location.key);

  return <div className="top-bar" />;
};

export default TopBarLoading;
