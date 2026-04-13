import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>KeenKeeper</div>
      <div className="flex gap-10">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "bg-green-400" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/timeline"}
          className={({ isActive }) => (isActive ? "bg-green-400" : "")}
        >
          TimeLine
        </NavLink>
        <NavLink
          to={"/stats"}
          className={({ isActive }) => (isActive ? "bg-green-400" : "")}
        >
          Stats
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
