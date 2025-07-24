// src/components/Navbar.jsx
// import React from "react";

// function Navbar() {
//     return (
//         <nav className="flex justify-between items-center bg-blue-900 text-white px-6 py-4 shadow">
//             <div className="text-xl font-bold">EVStation Admin</div>
//             <ul className="flex gap-6">
//                 <li className="hover:text-blue-300 cursor-pointer">Dashboard</li>
//                 <li className="hover:text-blue-300 cursor-pointer">Stations</li>
//                 <li className="hover:text-blue-300 cursor-pointer">Bookings</li>
//                 <li className="hover:text-blue-300 cursor-pointer">Earnings</li>
//                 <li className="hover:text-blue-300 cursor-pointer">Account</li>
//             </ul>
//             <div className="rounded-full bg-blue-800 px-3 py-1 cursor-pointer">Profile</div>
//         </nav>
//     );
// }

// export default Navbar;


// import React from "react";
// import { FaUserCircle } from "react-icons/fa";

// function Navbar() {
//     return (
//         <nav className="flex justify-between items-center px-8 py-4 shadow
//       bg-gradient-to-r from-indigo-900 via-indigo-700 to-blue-600 text-white">
//             {/* Logo/Brand */}
//             <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
//                 <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-indigo-300 mr-2">
//                     <circle cx="12" cy="12" r="10" />
//                     <rect x="8" y="4" width="8" height="16" rx="4" className="fill-blue-300 opacity-80" />
//                 </svg>
//                 EVStation Admin
//             </div>
//             {/* Navigation Links */}
//             <ul className="flex gap-8">
//                 <li className="hover:text-blue-200 font-medium transition">Dashboard</li>
//                 <li className="hover:text-blue-200 font-medium transition">Stations</li>
//                 <li className="hover:text-blue-200 font-medium transition">Bookings</li>
//                 <li className="hover:text-blue-200 font-medium transition">Earnings</li>
//                 <li className="hover:text-blue-200 font-medium transition">Account</li>
//             </ul>
//             {/* User/Profile */}
//             <div className="flex items-center gap-2">
//                 <FaUserCircle className="text-3xl text-white/90" />
//                 <span className="text-sm bg-indigo-700 px-3 py-1 rounded-full font-semibold shadow-inner">Admin</span>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 shadow bg-gradient-to-r from-green-900 via-green-700 to-lime-500 text-white">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-lime-200 mr-2">
                    <circle cx="12" cy="12" r="10" />
                    <rect x="8" y="4" width="8" height="16" rx="4" className="fill-green-400 opacity-80" />
                </svg>
                EVStation Admin
            </div>

            {/* Navigation Links */}
            <ul className="flex gap-6">
                {["Dashboard", "Stations", "Bookings", "Earnings", "Account"].map((item) => (
                    <li key={item}>
                        <a
                            href="#"
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
