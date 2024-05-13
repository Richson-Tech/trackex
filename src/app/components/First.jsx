import React from "react";
import { PiHandWithdrawFill } from "react-icons/pi";
import { GiProfit } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";

const First = () => {
  return (
    <div>
      <div className="bg-[#21437a] min-h-full mt-2">
        <p className="text-[#6EC1E4] text-center pt-7">Welcome back!</p>
        <div className="text-white pl-5">
          <p className="text-4xl font-serif">$500</p>
          <p className="text-sm font-sans">INITIAL INVESTMENT</p>
          <BsGraphUpArrow className="text-white my-2 ml-10" size={25} />
          {/* investment icon space ....... */}
          <p className="text-4xl font-serif">$12,600</p>
          <p className="text-sm font-sans">CURRENT INVESTMENT</p>

          {/* two icons side  */}
          <div className="flex flex-row items-center justify-between mt-7 px-5">
            <div className="flex flex-col items-center">
              <div className=" bg-white h-32 w-32 px-3 py-3 rounded-lg ">
                <PiHandWithdrawFill
                  className="text-[#21437a] px-auto mx-7"
                  size={45}
                />
                <p className="text-[#21437a] pt-10">WITHDRAW</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className=" bg-white h-32 w-32 px-3 py-3 rounded-lg ">
                <GiProfit className="text-[#21437a] mx-7" size={45} />
                <p className="text-[#21437a] pt-10 ">BONUSES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-full">
        <p className="text-[#264E4E] pl-5 text-lg font-semibold pt-7 font-sans">
          Account Details
        </p>
        <h4 className="text-[#21437a] pl-5 text-xl font-semibold">
          Account Status: <span className="text-red-500">INACTIVE</span>
        </h4>
        <h4 className="text-[#21437a] pl-5 text-xl font-semibold">
          Account Holder: Thomas Holder
        </h4>
        <h4 className="text-[#21437a] pl-5 text-xl font-semibold">
          Activation Fee:$1,000
        </h4>
      </div>
      <div className="mt-5">
        <p className="text-[#264E4E] pl-5 text-lg font-semibold pt-7 font-sans">
          Activities
        </p>
        <p className="text-[#264E4E] text-center text-lg font-serif mt-5">
          Zero history to show
        </p>
      </div>
    </div>
  );
};

export default First;
