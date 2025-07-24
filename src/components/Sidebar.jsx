// // src/components/Sidebar.jsx
// import React from "react";

// function Sidebar() {
//     return (
//         <aside className="bg-gray-100 h-screen w-56 p-6 flex flex-col gap-4 shadow">
//             <ul className="space-y-5">
//                 <li className="font-semibold hover:text-green-500-700 cursor-pointer">Overview</li>
//                 <li className="hover:text-green-500 cursor-pointer">Stations</li>
//                 <li className="hover:text-green-500 cursor-pointer">Bookings</li>
//                 <li className="hover:text-green-500 cursor-pointer">Earnings</li>
//                 <li className="hover:text-green-500 cursor-pointer">Settings</li>
//             </ul>
//         </aside>
//     );
// }

// export default Sidebar;


import React from "react";
import { FaTachometerAlt, FaChargingStation, FaCalendarCheck, FaChartBar, FaCog } from "react-icons/fa";

const links = [
    { label: "Overview", icon: <FaTachometerAlt />, path: "#" },
    { label: "Stations", icon: <FaChargingStation />, path: "#" },
    { label: "Bookings", icon: <FaCalendarCheck />, path: "#" },
    { label: "Earnings", icon: <FaChartBar />, path: "#" },
    { label: "Settings", icon: <FaCog />, path: "#" },
];

function Sidebar() {
    return (
        <aside className="sticky top-16 left-0 h-[calc(100vh-4rem)] w-56 bg-gradient-to-b from-green-50 to-lime-100 border-r border-green-200 shadow-xl flex flex-col z-20">
            {/* Logo/Title */}
            <div className="py-6 px-6 mb-2 flex items-center gap-2 border-b border-green-100">
                <div className="w-9 h-9 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-extrabold text-xl shadow">
                    EV
                </div>
                <span className="font-bold text-lg text-green-700 tracking-tight">Station Admin</span>
            </div>
            {/* Nav Links */}
            <ul className="flex-1 flex flex-col space-y-1 mt-4 px-2 overflow-y-auto scrollbar-thin scrollbar-thumb-green-100 scrollbar-track-transparent">
                {links.map(({ label, icon, path }) => (
                    <li key={label}>
                        {/* For real routing, swap <a> for <NavLink> from react-router-dom */}
                        <a
                            href={path}
                            className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer group font-medium text-green-800 transition-all duration-150
                hover:bg-green-200 hover:text-green-900 focus:bg-green-300 focus:text-green-900 active:bg-green-300
                shadow-sm"
                        >
                            <span className="text-green-500 text-lg group-hover:scale-110 transition-transform duration-150">{icon}</span>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
            {/* Optional footer or logout zone here */}
        </aside>
    );
}

export default Sidebar;

