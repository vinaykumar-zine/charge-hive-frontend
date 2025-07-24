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
                        {/* For real routing, swap <a> for <NavLink> from react-router-dom */}
                        <a
                            href={path}
                            className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer group font-medium text-gray-700
                hover:bg-green-100 hover:text-green-700 transition
                focus:bg-green-200 focus:text-green-900
                active:bg-green-200"
                        >
                            <span className="text-green-500 text-lg group-hover:scale-110 transition">{icon}</span>
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

