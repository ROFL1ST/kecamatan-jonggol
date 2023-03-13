import React from "react";

export default function Sejarah() {
  return (
    <>
      <div className="w-screen pt-[100px]">
        <div className="2xl:px-16 lg:px-6 px-0">
          {/* Section */}
          <div className="mt-20 flex justify-center lg:px-0 px-10">
            <div className=" rounded-full px-10 py-3 bg-[#3C903C] cursor-default">
              <h1 className="font-bold 2xl:text-4xl lg:text-xl text-center text-white">
                SEJARAH JONGGOL
              </h1>
            </div>
          </div>
          {/* Section */}
          <div className="mt-20 flex justify-between gap-x-10 w-full">
            <div className="left w-1/4"></div>
            <div className="right w-1/2"><h1></h1></div>
          </div>
        </div>
      </div>
    </>
  );
}
