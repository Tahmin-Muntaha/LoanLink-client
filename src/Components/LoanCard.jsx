import React from "react";
import { NavLink } from "react-router";

const LoanCard = ({ loan }) => {
  const {
    _id,
    title,
    category,
    interestRate,
    maxLoanLimit,
    image,
    showOnHome,
  } = loan;

  if (!showOnHome) return null;

  return (
    <div className=" bg-white rounded-2xl border border-[#E5E7EB] shadow-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-44 h-48 md:h-52 w-full object-cover"
        />

        <span className="absolute top-3 left-3 bg-[#F4C430] text-[#1F2937] text-xs font-bold px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </div>

      <div className="p-4  space-y-3">
        
        <h3 className=" text-lg md:text-xl font-extrabold text-[#1F2937] group-hover:text-[#1F7A6F] transition">
          {title}
        </h3>

        <div className="flex justify-between gap-2 text-sm ">
          <p className="text-[#6B7280]">
            Interest Rate
            <span className="block font-bold text-[#1F7A6F]">
              {interestRate}%
            </span>
          </p>

          <p className="text-[#6B7280]">
            Max Loan
            <span className="block font-bold text-[#1F7A6F]">
              {maxLoanLimit}
            </span>
          </p>
        </div>

        <NavLink to={`/details/${_id}`}>
          <button className="w-full mt-4 bg-[#1F7A6F] text-white py-2.5 rounded-xl font-bold tracking-wide hover:bg-[#16675E] transition">
            View Details
          </button>
        </NavLink>

      </div>
    </div>
  );
};

export default LoanCard;
