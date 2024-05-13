import React from "react";
import { MdExposureZero } from "react-icons/md";
import Menu from "./Menu";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-[#1f3f71] p-4 flex justify-between items-center">
      {/* Left content */}
      {/* Dropdown */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* Right content */}
      <Image
        src="/bank.png"
        alt="phone image"
        width={145}
        height={225}
        className="object-center object-cover"
      />

      <MdAccountCircle className="text-white" size={25}/>
    </nav>
  );
};

export default Navbar;
