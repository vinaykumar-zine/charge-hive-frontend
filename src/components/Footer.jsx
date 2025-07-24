import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-green-900 via-green-700 to-lime-500 text-white py-4 px-8 flex items-center justify-between shadow-inner mt-auto">
      <div className="text-sm">&copy; {new Date().getFullYear()} EVStation Admin. All rights reserved.</div>
      <div className="flex gap-4 text-xs">
        <a href="#" className="hover:underline hover:text-lime-200 transition">Privacy Policy</a>
        <a href="#" className="hover:underline hover:text-lime-200 transition">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer; 