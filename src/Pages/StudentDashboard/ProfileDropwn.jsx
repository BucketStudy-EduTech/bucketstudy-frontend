import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { VscDashboard, VscSignOut } from 'react-icons/vsc'; 
import profile from '../../assets/profile.png'; 
import {toast} from 'react-hot-toast';

function ProfileDropdown() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    // This effect handles closing the dropdown when clicking outside
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

    const handleLogout = () => {
        // This is where you would handle logout logic
        console.log("Logging out...");
        setOpen(false);
        toast.success("Logged out successfully!");
        navigate('/'); 
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button className='flex items-center gap-x-1 border-2 rounded-full border-gray-400' onClick={() => setOpen(!open)}>
                <img
                    src={profile}
                    alt="profile_Img"
                    className='aspect-square w-[35px] rounded-full object-cover'
                />
            </button>

            {open && (
                <div className="absolute top-[115%] -right-7 z-[1000] divide-y-[1px] overflow-hidden rounded-md border-[1px] border-r-blue-100 bg-amber-50">
                    <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
                        <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:bg-gray-200 ">
                            <VscDashboard className="text-lg" />
                            Dashboard
                        </div>
                    </Link>

                    <div
                        onClick={handleLogout}
                        className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm hover:bg-richblack-700 hover:bg-gray-200 cursor-pointer"
                    >
                        <VscSignOut className="text-lg" />
                        Logout
                    </div>

                </div>
            )}
        </div>
    );
}

export default ProfileDropdown;