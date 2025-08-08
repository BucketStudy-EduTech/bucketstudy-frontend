import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { VscDashboard, VscSignOut } from 'react-icons/vsc';
import profile from '../../assets/profile.png';
import toast from 'react-hot-toast';
import ConfirmationModel from '../../components/ConfirmationModel';

function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const isLoggedIn = false;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Logout logic
  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user
    toast.success("Logout Successfully ! ");
    setShowConfirm(false);
    setOpen(false);
    navigate('/');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {isLoggedIn ? (
        <>
          <button
            className="flex items-center gap-x-1 border-2 rounded-full border-gray-400"
            onClick={() => setOpen(!open)}
          >
            <img
              src={profile}
              alt="profile_Img"
              className="aspect-square w-[35px] rounded-full object-cover"
            />
          </button>

          {open && (
            <div className="absolute top-[115%] -right-7 z-[1000] divide-y-[1px] overflow-hidden rounded-md border border-blue-100 bg-amber-50">
              <Link
                to="/dashboard/my-profile"
                onClick={() => setOpen(false)}
              >
                <div className="flex items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-gray-200">
                  <VscDashboard className="text-lg" />
                  Dashboard
                </div>
              </Link>

              <div
                onClick={() => setShowConfirm(true)}
                className="flex items-center gap-x-1 py-[10px] px-[12px] text-sm hover:bg-gray-200 cursor-pointer"
              >
                <VscSignOut className="text-lg" />
                Logout
              </div>
            </div>
          )}

          {showConfirm && (
            <ConfirmationModel
              modalData={{
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: handleLogout,
                btn2Handler: () => {
                  setShowConfirm(false);
                  setOpen(false);
                },
              }}
            />
          )}
        </>
      ) : (
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-3 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-100"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
