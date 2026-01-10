const Work = () => {
  return (
    <div className="bg-base-200 py-14 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <h2 className="text-2xl md:text-3xl font-bold text-center text-base-content mb-10">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-base-100 border border-base-300 rounded-xl p-5 space-y-3 shadow-sm">
            <p className="text-[#1F7A6F] font-semibold">Step 1</p>
            <p className="font-bold text-base-content">Explore Loan Options</p>
            <p className="text-sm text-base-content/70">
              Browse different loan plans with clear interest rates, EMI options,
              and maximum loan limits to choose the best option for your needs.
            </p>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-xl p-5 space-y-3 shadow-sm">
            <p className="text-[#1F7A6F] font-semibold">Step 2</p>
            <p className="font-bold text-base-content">View Loan Details</p>
            <p className="text-sm text-base-content/70">
              Click on any loan to see eligibility criteria, repayment plans, and
              required documents before applying.
            </p>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-xl p-5 space-y-3 shadow-sm">
            <p className="text-[#1F7A6F] font-semibold">Step 3</p>
            <p className="font-bold text-base-content">Apply Online</p>
            <p className="text-sm text-base-content/70">
              Fill out a simple online application form with your personal and
              financial details from any device.
            </p>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-xl p-5 space-y-3 shadow-sm">
            <p className="text-[#1F7A6F] font-semibold">Step 4</p>
            <p className="font-bold text-base-content">Application Review</p>
            <p className="text-sm text-base-content/70">
              Your application is reviewed by the loan provider. You may be
              contacted for verification if needed.
            </p>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-xl p-5 space-y-3 shadow-sm">
            <p className="text-[#1F7A6F] font-semibold">Step 5</p>
            <p className="font-bold text-base-content">
              Approval & Disbursement
            </p>
            <p className="text-sm text-base-content/70">
              Once approved, the loan amount is disbursed and repayments are
              managed easily through EMIs.
            </p>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-xl p-5 space-y-3 shadow-sm">
            <p className="text-[#1F7A6F] font-semibold">Step 6</p>
            <p className="font-bold text-base-content">Track Your Loan</p>
            <p className="text-sm text-base-content/70">
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