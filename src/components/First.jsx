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
          <em>Initially expected: Sunday, 12/05/2024</em>
        </h6>
        <h6 className="border-solid border-2 border-[#4D148C] rounded-full my-4 w-20 px-5">
          Early
        </h6>
        <h2 className="text-base font-medium">DELIVERY STATUS</h2>
        <div className="flex flex-row space-x-2">
          <h5>In Transit </h5>
          <FaArrowRight className="text-[#4D148C]" size={25} />
        </div>
        <h5 className="mt-4 text-base font-medium">TRACKING ID </h5>
        <div className="flex flex-row mb-4">
          <h6>785005280643</h6>
        </div>
        <div>
          <p className="text-base font-medium">FROM</p>
          <p>FORT PIERCE FL, US</p>
          <p className="font-sans">
            <em>Label Created</em>
          </p>
          <p>12/05/2024 11:31 AM</p>

          <p className="text-base mt-3 font-medium">
            PACKAGE RECEIVED BY FEDEX
          </p>
          <p>20020 CORTEZ BLVD, BROOKSVILLE, FL</p>
          <p>12/05/2023 4:30:00 PM</p>
          <div className="w-70 bg-slate-300 px-3 py-2">
            <p className="text-base mt-3 font-medium">IN TRANSIT</p>
            <p>20020 CORTEZ BLVD, BROOKSVILLE, FL</p>
            <p>13/05/2023</p>
          </div>

          <p className="text-base mt-3 font-medium">OUT FOR DELIVERY TO</p>
          <p>19063, YONTZ ROAD BROOKSVILLE, FL, US</p>
        </div>
      </div>
    </div>
  );
};

export default First;
