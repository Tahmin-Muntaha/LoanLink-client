import React from "react";
import Banner from "../Components/Banner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoanCard from "../Components/LoanCard";
import Work from "../Components/Work";
import Feedback from "../Components/Feedback";
import FAQ from "../Components/FAQ";
import Choose from "../Components/Choose";
import { useEffect } from "react";
import Category from "../Components/Category";
import Interest from "../Components/Interest";
import Who from "../Components/Who";
import Data from "../Components/Data";

const Home = () => {
  useEffect(() => {
    document.title = "Loan Link";
  }, []);

  const {
    data: loans = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["l"],
    queryFn: async () => {
      const res = await axios("https://loanlink-inky.vercel.app/newLoans");
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
  return (
    <div className="min-h-screen bg-base-100 transition-colors duration-500">
      <Banner />
      
      {/* Available Loans Section */}
      <div className="bg-base-200 py-16 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-base-content mb-4">
              Available Loans
            </h2>
            
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loans.map((loan) => (
              <LoanCard key={loan._id} loan={loan} />
            ))}
          </div>
        </div>
      </div>

      <Work />
      
      {/* Feedback Section */}
      <div className="bg-base-200 py-16 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-base-content mb-4">
              Feedback
            </h2>
            
          </div>
        </div>
      </div>
      <Feedback />
      
      <Choose />
      
      {/* FAQs Section */}
      <div className="bg-base-200 pt-16 pb-4 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-base-content mb-4">
              FAQs
            </h2>
            
          </div>
        </div>
      </div>
      <FAQ />
      
      <Category />
      <Interest />
      <Who />
      <Data />
    </div>
  );
};

export default Home;
