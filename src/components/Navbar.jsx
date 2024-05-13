import React from "react";
import { MdExposureZero } from "react-icons/md";
import Menu from "./Menu";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-[#4D148C] h-20 p-4 flex justify-between items-center text-white">
      {/* Left content */}

      {/* Right content */}
      <Image
        src="/fedd.png"
        alt="fedex image"
        width={95}
        height={95}
        className="object-center object-cover"
      />
      <p>Sign up or Login</p>

      <MdAccountCircle className="text-white" size={25} />
      {/* Dropdown */}
      <div className="md:hidden">
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
