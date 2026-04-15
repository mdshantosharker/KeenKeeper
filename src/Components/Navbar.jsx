import React from "react";
import { NavLink } from "react-router";
import MyNavLink from "./Shared/MyNavLink";
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  const links = (
    <div className="flex gap-2 lg:gap-10 text-xl font-semibold">
      <li> 
        <MyNavLink to={"/"}>
          <RiHome2Line />
          Home
        </MyNavLink>
      </li>

      <li>
        <MyNavLink to={"/timeline"}>
          <IoTimeOutline />
          TimeLine
        </MyNavLink>
      </li>

      <li>
        <MyNavLink to={"/stats"}>
          <ImStatsDots />
          Stats
        </MyNavLink>
      </li>
    </div>
  );
  return (
    <>
      <div className="shadow-sm">
        <div className="navbar justify-between w-11/12 mx-auto p-0 bg-base-100 ">
          <div className="navbar-start">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost gap-0  font-bold text-3xl">
              Keen<span className="text-[#244D3F]">Keeper</span>
            </a>
          </div>

          <div className="hidden lg:block">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
