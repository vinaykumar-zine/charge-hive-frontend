
import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Navbar({ logoText }) {
    return (
        <nav className="flex items-center justify-between px-8 py-4 shadow bg-gradient-to-r from-green-900 via-green-700 to-lime-500 text-white">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-lime-200 mr-2">
                    <circle cx="12" cy="12" r="10" />
                    <rect x="8" y="4" width="8" height="16" rx="4" className="fill-green-400 opacity-80" />
                </svg >
                {logoText || "EVStation Admin"}
            </div>

            {/* Navigation Links */}
            <ul className="flex gap-6">
                {["Dashboard", "Stations", "Bookings", "Earnings", "Account"].map((item) => (
                    <li key={item}>
                        <a
                            href={item}
                            className="font-medium block px-3 py-1.5 rounded-md transition 
                hover:bg-white/10 hover:text-lime-200 
                focus:outline-none focus:ring-2 focus:ring-lime-200"
                            tabIndex={0}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            {/* User/Profile */}
            <div className="flex items-center gap-3">
                <FaUserCircle className="text-3xl text-lime-50" />
                <span className="text-sm bg-green-800 px-3 py-1 rounded-full font-semibold shadow-inner">
                    Admin
                </span>
            </div>
        </nav>
    );
}

export default Navbar;
