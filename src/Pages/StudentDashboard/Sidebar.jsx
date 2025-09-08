// src/components/Sidebar.jsx

import React, { useState } from "react";
import { sidebarLinks } from "../../data/dashboard-links";
import SidebarLink from "./SidebarLink";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { useAuth } from "../../context/AuthContext";

function Sidebar() {
  const { user, loading } = useAuth();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Show a loading state until the AuthContext is ready
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="md:hidden flex items-center p-3">
        <button onClick={() => setIsMobileSidebarOpen(true)}>
          <TbLayoutSidebarLeftCollapse size={20} />
        </button>
      </div>

      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-30"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      <div
        className={`top-banner-visible:bottom-0 lg:min-h-screen h-full
          top-banner-visible:h-auto fixed z-40 border-e border-gray-600 bg-gray-400
          [view-transition-name:var(--sidebar-popover)] focus:outline-hidden dark:border-gray-800 
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:relative md:translate-x-0 md:flex`}
      >
        <div className="flex flex-col py-10 ">
          <div>
            {sidebarLinks.map((link) => {
              // Only render the link if the user's role matches the link's required type, or if the link has no type
              if (link.type && user?.role !== link.type) {
                return null;
              }
              return (
                <SidebarLink key={link.id} link={link} iconName={link.icon} />
              );
            })}
          </div>

          <div className="mx-auto my-6 h-[1px] w-45 bg-gray-600" />

          <div className="flex flex-col">
            <SidebarLink
              link={{ name: "Settings", path: "/dashboard/settings" }}
              iconName="VscSettingsGear"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;