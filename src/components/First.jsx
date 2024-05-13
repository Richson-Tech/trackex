import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const First = () => {
  return (
    <div>
      <div className="flex flex-col ml-4">
        <p className="mt-3 text-base font-medium">UPDATED DELIVERY</p>
        <h1 className="text-3xl tracking-normal mt-3 font-medium font-sans">
          MONDAY
        </h1>
        <h5 className="mt-3 text-base">13/05/2024 by end of today</h5>
        <h6>
          <em>Initially expected: Tuesday, 5/9/2023</em>
        </h6>
        <h6 className="border-solid border-2 border-[#4D148C] rounded-full my-4 w-20 px-5">
          Early
        </h6>
        <h2 className="text-base font-medium">DELIVERY STATUS</h2>
        <div className="flex flex-row space-x-2">
          <h5>In Transit </h5>
          <FaArrowRight size={25} />
        </div>
        <h5 className="mt-4 text-base font-medium">TRACKING ID </h5>
        <div className="flex flex-row mb-4">
          <h6>785005280643</h6>
        </div>
        <div>
          <p className="text-base font-medium">FROM</p>
          <p>LONG BEACH, CA US</p>
          <p>Label Created</p>
          <p>5/3/7073 8•31 AM</p>

          <p className="text-base font-medium">PACKAGE RECEIVED BY FEDEX</p>
          <p>SANTA FE SPRINGS, CA</p>
          <p>5/3/2023 12:00 AM</p>

          <p className="text-base font-medium">IN TransIT</p>
          <p>KANSAS CITY. MO</p>
          <p>5/5/7073 10:05 PM</p>

          <p className="text-base font-medium">OUT FOR DELIVERY</p>
          <p>TO</p>
          <p>SAINTIOUIS MO US</p>
        </div>
      </div>
    </div>
  );
};

export default First;
