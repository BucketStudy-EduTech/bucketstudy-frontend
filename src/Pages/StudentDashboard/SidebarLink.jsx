import React from "react";
import { NavLink, useLocation, matchPath } from "react-router-dom";
import * as Icons from "react-icons/vsc";

function SidebarLink({ link, iconName }) {
  const Icon = Icons[iconName] || Icons.VscFile; // Fallback icon
  const location = useLocation();

  const matchRoute = (route) => matchPath({ path: route }, location.pathname);

  return (
    <NavLink
      to={link.path}
      className={`relative px-8 py-2  text-sm font-medium flex items-center gap-x-2 transition-all duration-200 ${
        matchRoute(link.path) ? "bg-yellow-800 text-white" : "text-black"
      }`}
    >
      <span
        className={`absolute left-0 top-0 h-full w-[0.2rem] bg-yellow-50 transition-all duration-200 ${
          matchRoute(link.path) ? "opacity-100" : "opacity-0"
        }`}
      />
      <Icon className="text-lg" />
      <span>{link.name}</span>
    </NavLink>
  );
}

export default SidebarLink;
