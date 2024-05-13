import React from "react";

const First = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h5>UPDATED DELIVERY</h5>
        <h1>MONDAY</h1>
        <h5>13/05/2024 by end of today</h5>
        <h6>Initially expected: Tuesday, 5/9/2023</h6>
        <h6>Early</h6>
        <h2>DELIVERY STATUS</h2>
        <div className="flex flex-row">
          <h5>In Transit </h5>
          <h5 className="mt-4">TRACKING ID </h5>
          <div className="flex flex-row">
            <h6>785005280643</h6>
          </div>
        </div>
        <div>
          <p>FROM</p>
          <p>LONG BEACH, CA US</p>
          <p>Label Created</p>
          <p>5/3/7073 8•31 AM</p>

          <p>PACKAGE RECEIVED BY FEDEX</p>
          <p>SANTA FE SPRINGS, CA</p>
          <p>5/3/2023 12:00 AM</p>

          <p>IN TransIT</p>
          <p>KANSAS CITY. MO</p>
          <p>5/5/7073 10:05 PM</p>

          <p>OUT FOR DELIVERY</p>
          <p>TO</p>
          <p>SAINTIOUIS MO US</p>
        </div>
      </div>
    </div>
  );
};

export default First;
