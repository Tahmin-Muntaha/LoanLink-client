const Work = () => {
  return (
    <div className="bg-base-200 py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-base-content mb-4">
            How It Works
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-[#1F7A6F] font-bold text-lg">Step 1</span>
            </div>
            <h3 className="font-bold text-base-content text-xl mb-3">Explore Loan Options</h3>
            <p className="text-base-content/70 leading-relaxed">
              Browse different loan plans with clear interest rates, EMI options,
              and maximum loan limits to choose the best option for your needs.
            </p>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[#1F7A6F] font-bold text-lg">Step 2</span>
            </div>
            <h3 className="font-bold text-base-content text-xl mb-3">View Loan Details</h3>
            <p className="text-base-content/70 leading-relaxed">
              Click on any loan to see eligibility criteria, repayment plans, and
              required documents before applying.
            </p>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[#1F7A6F] font-bold text-lg">Step 3</span>
            </div>
            <h3 className="font-bold text-base-content text-xl mb-3">Apply Online</h3>
            <p className="text-base-content/70 leading-relaxed">
              Fill out a simple online application form with your personal and
              financial details from any device.
            </p>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v6H4V5h1zm0 8v2H4v-2h1z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[#1F7A6F] font-bold text-lg">Step 4</span>
            </div>
            <h3 className="font-bold text-base-content text-xl mb-3">Application Review</h3>
            <p className="text-base-content/70 leading-relaxed">
              Your application is reviewed by the loan provider. You may be
              contacted for verification if needed.
            </p>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[#1F7A6F] font-bold text-lg">Step 5</span>
            </div>
            <h3 className="font-bold text-base-content text-xl mb-3">Approval & Disbursement</h3>
            <p className="text-base-content/70 leading-relaxed">
              Once approved, the loan amount is disbursed and repayments are
              managed easily through EMIs.
            </p>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[#1F7A6F] font-bold text-lg">Step 6</span>
            </div>
            <h3 className="font-bold text-base-content text-xl mb-3">Track Your Loan</h3>
            <p className="text-base-content/70 leading-relaxed">
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