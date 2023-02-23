import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo/Logo.png";
export default function Navbar() {
  const activePage = "bg-white px-5 py-1 rounded-full text-[#547153] font-bold";
  const normalPages = "";
  return (
    <>
      <div className="fixed w-screen z-20">
        <div className="bg-[#547153] h-6"></div>
        <div className="w-full h-20 bg-[#7D8F69]   bg-opacity-20 backdrop-blur-lg drop-shadow-lg flex items-center justify-between px-4 lg:px-16">
          <NavLink to={"/"}>
            <img src={Logo} alt="" />
          </NavLink>
          <nav className="flex space-x-7 items-center font-bold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? activePage : normalPages
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/profile"}
              className={({ isActive }) =>
                isActive ? activePage : normalPages
              }
            >
              Profile
            </NavLink>
            <NavLink>Program</NavLink>
            <div className="w-1/4 text-center">
              <NavLink>Media & Informasi</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
