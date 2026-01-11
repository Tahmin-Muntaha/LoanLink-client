import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import LoanCard from "../Components/LoanCard";

const AllLoans = () => {
  useEffect(() => {
    document.title = "LoanLink - All Loans";
  }, []);
  const {
    data: loans = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["loans"],
    queryFn: async () => {
      const res = await axios("https://loanlink-inky.vercel.app/loans");
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

  if (isError)
    return (
      <div className="min-h-screen flex items-center justify-center text-error text-lg font-semibold">
        Failed to load loans
      </div>
    );

  return (
    <div className="bg-base-200 min-h-screen px-4 md:px-10 pb-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-base-content text-center pt-6 pb-2">
          All Loans
        </h1>

        <p className="text-center text-base-content/70 max-w-2xl mx-auto mb-10">
          Explore flexible loan options designed to match your financial goals
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {loans.map((loan) => (
            <LoanCard key={loan._id} loan={loan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllLoans;
