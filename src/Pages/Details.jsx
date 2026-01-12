import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router";

const Details = () => {
  useEffect(() => {
    document.title = "LoanLink - Loan Details";
  }, []);
  const { id } = useParams();

  const { data: loan = {}, isLoading } = useQuery({
    queryKey: ["loan", id],
    queryFn: async () => {
      const res = await axios(`https://loanlink-inky.vercel.app/details/${id}`);
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="min-h-screen bg-base-200 transition-colors duration-500 flex justify-center items-center">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-xl"></span>
          </div>
          
        </div>
      </div>
    );

  const {
    image,
    title,
    description,
    category,
    emiPlans,
    interestRate,
    maxLoanLimit,
    requiredDocuments,
  } = loan;

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 transition-colors duration-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#1F7A6F] to-[#16675E] text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative px-4 sm:px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">Loan Details</h1>
            <p className="text-white/80 text-lg">Everything you need to know about this loan</p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
            
            {/* Left Column - Image and Basic Info */}
            <div className="space-y-6">
              {/* Main Image Card */}
              <div className="bg-base-100 rounded-3xl shadow-2xl border border-base-300 overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                <div className="relative">
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#1F7A6F] text-white shadow-lg backdrop-blur-sm">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      {category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-base-content mb-4 leading-tight">{title}</h2>
                  <p className="text-base-content/70 text-lg leading-relaxed">{description}</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-base-100 rounded-2xl p-6 shadow-xl border border-base-300 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1F7A6F]/10 rounded-full mb-3">
                    <svg className="w-6 h-6 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-[#1F7A6F]">{interestRate}%</p>
                  <p className="text-base-content/60 text-sm font-medium">Interest Rate</p>
                </div>

                <div className="bg-base-100 rounded-2xl p-6 shadow-xl border border-base-300 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1F7A6F]/10 rounded-full mb-3">
                    <svg className="w-6 h-6 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-[#1F7A6F]">{maxLoanLimit}</p>
                  <p className="text-base-content/60 text-sm font-medium">Max Limit</p>
                </div>
              </div>
            </div>

            {/* Right Column - Detailed Information */}
            <div className="space-y-6">
              {/* Loan Details Card */}
              <div className="bg-base-100 rounded-3xl shadow-2xl border border-base-300 p-8">
                <div className="flex items-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1F7A6F]/10 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-base-content">Loan Information</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-base-200/50 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#1F7A6F] rounded-full mr-3"></div>
                      <span className="text-base-content/70 font-medium">Interest Rate</span>
                    </div>
                    <span className="text-xl font-bold text-[#1F7A6F]">{interestRate}%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-base-200/50 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#1F7A6F] rounded-full mr-3"></div>
                      <span className="text-base-content/70 font-medium">Maximum Loan Limit</span>
                    </div>
                    <span className="text-xl font-bold text-[#1F7A6F]">{maxLoanLimit}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-base-200/50 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#1F7A6F] rounded-full mr-3"></div>
                      <span className="text-base-content/70 font-medium">EMI Plans</span>
                    </div>
                    <span className="text-lg font-semibold text-base-content">{emiPlans}</span>
                  </div>
                </div>
              </div>

              {/* Required Documents Card */}
              <div className="bg-base-100 rounded-3xl shadow-2xl border border-base-300 p-8">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1F7A6F]/10 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-base-content">Required Documents</h3>
                </div>
                
                <div className="bg-base-200/30 rounded-xl p-6">
                  <p className="text-base-content leading-relaxed text-lg">{requiredDocuments}</p>
                </div>
              </div>

              {/* Apply Button */}
              <div className="bg-base-100 rounded-3xl shadow-2xl border border-base-300 p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-base-content mb-2">Ready to Apply?</h3>
                  <p className="text-base-content/70">Start your loan application process now</p>
                </div>
                
                <NavLink to={`/application/${id}`} className="block">
                  <button className="w-full bg-gradient-to-r from-[#1F7A6F] to-[#16675E] text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Apply Now
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;