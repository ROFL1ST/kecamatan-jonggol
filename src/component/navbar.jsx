import {
  ArrowDown2,
  ArrowUp2,
  CloseCircle,
  HambergerMenu,
} from "iconsax-react";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo/Logo.png";
import { Menu, Transition } from "@headlessui/react";

export default function Navbar() {
  const activePage =
    "bg-white px-5 py-1 rounded-full text-[#547153] font-bold transition-all";
  const normalPages = "transition-all";
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <div className="fixed w-screen z-20">
        {/* Dekstop */}
        <div className="lg:flex hidden bg-[#547153] h-6"></div>
        <div className="w-full h-20 lg:bg-[#7D8F69] bg-[#547153]   lg:bg-opacity-20 lg:backdrop-blur-lg lg:drop-shadow-lg flex items-center justify-between px-5 2xl:px-16 lg:px-10">
          <NavLink to={"/"}>
            <img src={Logo} className="lg:w-full w-4/5" alt="" />
          </NavLink>
          <button onClick={() => setNavbarOpen(!navbarOpen)}>
            {navbarOpen ? (
              <CloseCircle
                className="h-8 w-8 xl:hidden lg:hidden transition-all"
                color="#ffffff"
              />
            ) : (
              <HambergerMenu
                className="h-8 w-8 xl:hidden lg:hidden transition-all"
                color="#ffffff"
              />
            )}
          </button>
          <nav className="lg:flex hidden space-x-7 items-center font-bold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? activePage : normalPages
              }
            >
              Home
            </NavLink>
            <div>
              <DropProfile />
            </div>
            <NavLink>Program</NavLink>
            <div className="w-1/4 text-center flex items-center justify-center my-auto">
              <DropMedia />
            </div>
            <NavLink
              to={"/agenda"}
              className={({ isActive }) =>
                isActive ? activePage : normalPages
              }
            >
              Agenda
            </NavLink>
          </nav>
        </div>
        {/* Dekstop */}
        {/* Mobile */}
        <div
          className={`${
            navbarOpen ? "flex transition-all" : "hidden transition-all"
          } top-0 fixed flex-col z-30 bg-[#547153] w-full  mt-[78px] px-10 py-10 pb-10 overflow-y-auto rounded-b-2xl  `}
        >
          <ul className="flex flex-col gap-y-5 font-bold text-white">
            <NavLink to={"/"}>
              <li className="cursor-pointer">Home</li>
            </NavLink>
            <li className="cursor-pointer flex items-center gap-x-5">
              Profile
              <ArrowDown2 className="h-4 w-4" color="#ffffff" />
            </li>
            <li className="cursor-pointer flex items-center gap-x-5">
              Program
              <ArrowDown2 className="h-4 w-4" color="#ffffff" />
            </li>
            <li className="cursor-pointer flex items-center gap-x-5">
              <DropMobileMedia />
            </li>
          </ul>
        </div>
        {/* Mobile */}
      </div>
    </>
  );
}

function DropMobileMedia() {
  return (
    <>
      <Menu as={"div"} className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button className={"flex flex-col w-full  "}>
              <div className="flex gap-x-3 justify-center items-center">
                Media & Informasi
                {open ? (
                  <>
                    <ArrowDown2 className="h-6 w-6" color="#ffffff" />
                  </>
                ) : (
                  <>
                    <ArrowUp2 className="h-6 w-6" color="#ffffff" />
                  </>
                )}
              </div>
            </Menu.Button>
            <Transition
              show={open}
              as={React.Fragment}
              enter="transition-all ease-in duration-100"
              enterFrom="transform opacity-0 scale-95 translate-y-1"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95 -translate-y-1"
            >
              <div
                className={`mt-3 ${
                  open ? "flex-col gap-y-5 list-disc px-5" : "hidden"
                }`}
              >
                <button
                  className={`text-white group flex justify-start w-full items-center rounded-md px-2 py-1 text-sm    `}
                >
                  Berita
                </button>

                <button
                  className={`text-white group flex justify-start w-full items-center rounded-md px-2 py-1 text-sm    `}
                >
                  <NavLink to={"/foto"}>Foto</NavLink>
                </button>
                <button className=" group flex w-full items-center rounded-md px-2 py-2 text-sm ">
                  <NavLink to={"/video"}>Video</NavLink>
                </button>
              </div>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
}

function DropMedia() {
  const activeDrop = "text-[#547153] font-bold transition-all";
  const normalDrop = "transition-all";
  return (
    <>
      <Menu as={"div"} className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button
              className={` inline-flex w-full justify-center items-center text-sm transition-all  ${
                open &&
                "bg-white px-5 py-1 rounded-full text-[#547153] font-bold transition-all"
              }`}
            >
              Media & Informasi
              {open ? (
                <>
                  <ArrowDown2 className="h-6 w-6" color="#000000" />
                </>
              ) : (
                <>
                  <ArrowUp2 className="h-6 w-6" color="#000000" />
                </>
              )}
            </Menu.Button>
            <Transition
              show={open}
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-full rounded-xl origin-top-right divide-y divide-[#547153]  bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button className=" group flex w-full items-center rounded-md px-2 py-2 text-sm ">
                        Berita
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button className=" group flex w-full items-center rounded-md px-2 py-2 text-sm ">
                        <NavLink
                          to={"/foto"}
                          className={({ active }) =>
                            active ? activeDrop : normalDrop
                          }
                        >
                          Foto
                        </NavLink>
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button className=" group flex w-full items-center rounded-md px-2 py-2 text-sm ">
                        <NavLink
                          to={"/video"}
                          className={({ active }) =>
                            active ? activeDrop : normalDrop
                          }
                        >
                          Video
                        </NavLink>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
}

function DropProfile() {
  const activeDrop = "text-[#547153] font-bold transition-all";
  const normalDrop = "transition-all";
  return (
    <>
      <Menu as={"div"} className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button
              className={` inline-flex gap-x-3 w-full justify-center items-center text-sm transition-all  ${
                open &&
                "bg-white px-5 py-1 rounded-full text-[#547153] font-bold transition-all"
              }`}
            >
              <p className="text-base">Profile</p>
              {open ? (
                <>
                  <ArrowDown2 className="h-4 w-4" color="#000000" />
                </>
              ) : (
                <>
                  <ArrowUp2 className="h-4 w-4" color="#000000" />
                </>
              )}
            </Menu.Button>
            <Transition
              show={open}
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute text-left right-0 mt-2 w-full rounded-xl origin-top-right divide-y divide-[#547153]  bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink to={"/profile"}>
                        <button className=" group flex w-full items-center rounded-md px-2 py-2 text-sm ">
                          Profile
                        </button>
                      </NavLink>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button className=" group flex w-full items-center rounded-md px-2 py-2 text-sm ">
                        Struktur
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button className=" group flex w-full items-center rounded-md px-2 py-2 text-sm ">
                        <NavLink
                          to={"/"}
                          className={({ active }) =>
                            active ? activeDrop : normalDrop
                          }
                        >
                          Sejarah
                        </NavLink>
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button className=" group flex w-full items-center rounded-md px-2 py-2 text-sm ">
                        <NavLink
                          to={"/"}
                          className={({ active }) =>
                            active ? activeDrop : normalDrop
                          }
                        >
                          Visi Dan Misi
                        </NavLink>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
}
