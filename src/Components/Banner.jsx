import React from "react";
import { NavLink } from "react-router";

const Banner = () => {
  return (
    <div className="bg-linear-to-b from-[#F9FAFB] to-[#E6F2F1] px-8 py-14">
      <div className="md:grid grid-cols-2 gap-8 items-center">

        <div className="space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold text-[#1F2937]">
            Smart Loans for Your Real-Life Needs
          </h1>

          <h2 className="text-lg md:text-xl font-semibold text-[#1F7A6F]">
            Fast approval • Flexible EMI • Trusted support
          </h2>

          <p className="text-[#374151] ">
            Get fast, secure, and flexible loan options designed to support your goals —
            whether it's personal needs, education, or business growth.
          </p>

          <p className="text-[#4B5563] text-sm ">
            LoanLink helps you explore verified loan plans with transparent interest rates,
            easy EMI calculations, and a smooth online application process you can trust.
          </p>

          <div className="pt-2">
            <NavLink to="/all">
              <button className="bg-[#1F7A6F] text-white px-6 py-2 rounded hover:bg-[#16675E]">
                Explore Loans
              </button>
            </NavLink>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/051/138/small/applying-for-loan-at-the-bank-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg"
            className="w-110"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;
