import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "bg-[#244D3F] text-white" : "text-[#64748B]")}
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
