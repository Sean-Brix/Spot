import React from "react";

function NavBar({ children, className = "" }) {
  return (
    <nav className="fixed top-0 hidden overflow-hidden md:block md:outline-1 px-3 py-4.5 h-lvh md:w-18 lg:w-2/12 outline-[#b6b6b6]">
      {children}
    </nav>
  );
}

export default NavBar;
