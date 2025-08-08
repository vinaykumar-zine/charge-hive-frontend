import React from "react";
import { FaTachometerAlt, FaChargingStation, FaCalendarCheck, FaChartBar, FaCog, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const links = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { label: "Stations", icon: <FaChargingStation />, path: "/stations" },
    { label: "Bookings", icon: <FaCalendarCheck />, path: "/bookings" },
    { label: "Earnings", icon: <FaChartBar />, path: "/earnings" },
    { label: "Settings", icon: <FaCog />, path: "/settings" },
];

function Sidebar() {
    const location = useLocation();

    return (
        <aside className="bg-gradient-to-b from-green-50 to-gray-100 h-screen w-56 p-0 flex flex-col shadow-lg border-r border-green-100">
            {/* Logo/Title */}
            <div className="py-6 px-6 mb-2 flex items-center gap-2 border-b border-green-100">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-extrabold text-xl">
                    EV
                </div>
                <span className="font-bold text-lg text-green-700 tracking-tight">Station Admin</span>
            </div>
            {/* Nav Links */}
            <ul className="flex-1 flex flex-col space-y-2 mt-4 px-3">
                {links.map(({ label, icon, path }) => (
                    <li key={label}>
                        <Link
                            to={path}
                            className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer group font-medium transition
                                ${location.pathname === path
                                    ? 'bg-green-200 text-green-900'
                                    : 'text-gray-700 hover:bg-green-100 hover:text-green-700'
                                }
                                focus:bg-green-200 focus:text-green-900
                                active:bg-green-200`}
                        >
                            <span className={`text-lg group-hover:scale-110 transition ${location.pathname === path ? 'text-green-600' : 'text-green-500'
                                }`}>
                                {icon}
                            </span>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Optional footer or logout zone here */}
        </aside>
    );
}

export default Sidebar;

