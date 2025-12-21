import React from 'react';

const AddLoan = () => {
    return (
        <div>
            <div>
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-center mb-6">
            <img
              src="https://e7.pngegg.com/pngimages/543/566/png-clipart-microfinance-saving-bank-loan-bank-saving-leaf.png"
              alt="LoanLink"
              className="h-20"
            />
          </div>

          <h2 className="text-2xl font-bold text-center text-[#1F2937] mb-6">
           Add Loan
          </h2>

          <form className="space-y-4" onSubmit={''}>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Laon Title
              </label>
              <input
                
                type="text"
                placeholder='Enter your loan title'
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Description
              </label>
              <input
                
                type="text"
                placeholder='Enter description'
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Category
              </label>
              <input
                
                type="text"
               placeholder='Enter Category'
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Interest Rate
              </label>
              <input
                
                type="text"
                placeholder="Enter Interest Rate"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
               
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
               Max Loan Limit
              </label>
              <input
               
                type="text"
                placeholder="Enter max loan limit"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
               
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Required Docmunets
              </label>
              <input
                type="text"
                placeholder="Enter required documents."
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2"
                
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                EMI Plans
              </label>
              <input
                name="national"
                type="text"
                placeholder="Enter your National Id/Passport Number"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
               
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Image
              </label>
              <input
               
                type="text"
                placeholder="Enter your Image"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
               
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Show on Home
              </label>
              <input
               
                type="text"
                placeholder="Yes or No"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
               
              />
            </div>
            
           
           
            
            <button
              type="submit"
              className="w-full bg-[#1F7A6F] text-white py-2 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300"
            >
              Add Loan
            </button>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AddLoan;