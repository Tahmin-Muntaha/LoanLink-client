import React from "react";

const Work = () => {
  return (
    <div className="bg-[#F9FAFB]  py-14">
      <div className="">
        
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1F2937] mb-10">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 space-y-3">
            <p className="text-[#1F7A6F] font-semibold">Step 1</p>
            <p className="font-bold text-[#1F2937]">Explore Loan Options</p>
            <p className="text-sm text-[#6B7280]">
              Browse different loan plans with clear interest rates, EMI options,
              and maximum loan limits to choose the best option for your needs.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 space-y-3">
            <p className="text-[#1F7A6F] font-semibold">Step 2</p>
            <p className="font-bold text-[#1F2937]">View Loan Details</p>
            <p className="text-sm text-[#6B7280]">
              Click on any loan to see eligibility criteria, repayment plans, and
              required documents before applying.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 space-y-3">
            <p className="text-[#1F7A6F] font-semibold">Step 3</p>
            <p className="font-bold text-[#1F2937]">Apply Online</p>
            <p className="text-sm text-[#6B7280]">
              Fill out a simple online application form with your personal and
              financial details from any device.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 space-y-3">
            <p className="text-[#1F7A6F] font-semibold">Step 4</p>
            <p className="font-bold text-[#1F2937]">Application Review</p>
            <p className="text-sm text-[#6B7280]">
              Your application is reviewed by the loan provider. You may be
              contacted for verification if needed.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 space-y-3">
            <p className="text-[#1F7A6F] font-semibold">Step 5</p>
            <p className="font-bold text-[#1F2937]">
              Approval & Disbursement
            </p>
            <p className="text-sm text-[#6B7280]">
              Once approved, the loan amount is disbursed and repayments are
              managed easily through EMIs.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 space-y-3">
            <p className="text-[#1F7A6F] font-semibold">Step 6</p>
            <p className="font-bold text-[#1F2937]">Track Your Loan</p>
            <p className="text-sm text-[#6B7280]">
              Monitor your loan status, view EMI schedules, and receive alerts
              to stay on top of repayments for a smooth experience.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
