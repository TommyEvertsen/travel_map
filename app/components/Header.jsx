"use client";

import { FaBars } from "react-icons/fa";

const Header = ({ openSidebar, setIsOpenSidebar }) => {
  return (
    <div className="headerWrapper">
      <div className="header flex bg-[#6a89a7]">
        <div className="headerButton justify-baseline items-center px-4 py-2 text-white hover:text-[#88bdf2]">
          <button
            className="cursor-pointer"
            onClick={() => setIsOpenSidebar(!openSidebar)}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
