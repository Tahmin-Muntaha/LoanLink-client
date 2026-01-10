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
      <div className="flex justify-center">
        <div>
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-xl"></span>
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
    <div className="bg-base-200 min-h-screen px-4 pb-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pt-8">
        <div className="bg-base-100 rounded-2xl shadow-2xl border border-base-300">
          <img src={image} alt={title} className="w-full h-64 object-cover rounded-t-2xl" />
          <div className="p-6">
            <div className="badge badge-warning mb-4">{category}</div>
            <h1 className="text-2xl font-bold text-base-content mb-4">{title}</h1>
            <p className="text-base-content/70">{description}</p>
          </div>
        </div>

        <div className="bg-base-100 rounded-2xl shadow-2xl border border-base-300 p-6">
          <h2 className="text-xl font-bold text-base-content mb-6">Loan Details</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-base-content/70">Interest Rate:</span>
              <span className="font-semibold text-[#1F7A6F]">{interestRate}%</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-base-content/70">Max Loan Limit:</span>
              <span className="font-semibold text-[#1F7A6F]">{maxLoanLimit}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-base-content/70">EMI Plans:</span>
              <span className="font-semibold text-base-content">{emiPlans}</span>
            </div>
            
            <div>
              <span className="text-base-content/70">Required Documents:</span>
              <p className="font-semibold text-base-content mt-1">{requiredDocuments}</p>
            </div>
          </div>

          <NavLink to={`/loanapplication/${id}`} className="block mt-6">
            <button className="w-full bg-[#1F7A6F] text-white py-3 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300">
              Apply Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Details;