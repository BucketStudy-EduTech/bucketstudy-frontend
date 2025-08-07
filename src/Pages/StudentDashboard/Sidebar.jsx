import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sidebarLinks } from "../../data/dashboard-links";
import SidebarLink from "./SidebarLink";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

function Sidebar() {
  const [user, setUser] = useState({
    accountType: "Student", 
  });
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null); 
  const navigate = useNavigate();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);


  if (loading) return <div className="mt-10 text-center">Loading...</div>;

  return (
    <div className="h-full ">
      <div className="md:hidden flex items-center p-3 ">
        <button onClick={() => setIsMobileSidebarOpen(true)}>
          <TbLayoutSidebarLeftCollapse size={20} />
        </button>
        
      </div>

    {/* Sidebar Overlay for Mobile */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-30" onClick={() => setIsMobileSidebarOpen(false)} />
      )}
      
       <div
        className={` top-banner-visible:bottom-0  lg:h-svw h-full
          top-banner-visible:h-auto fixed   z-40   border-e border-gray-600 bg-gray-400
          [view-transition-name:var(--sidebar-popover)] focus:outline-hidden dark:border-gray-800 
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:relative md:translate-x-0 md:flex `}
      >
      <div className="flex flex-col py-10 ">
        {/* Sidebar Links */}
        <div className="" >
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null;
            return (
              <SidebarLink
                key={link.id}
                link={link}
                iconName={link.icon}
            
              />
            );
          })}
        </div>

        {/* Divider */}
        <div className="mx-auto my-6 h-[1px] w-10/12 "></div>

        {/* Settings Link */}
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
