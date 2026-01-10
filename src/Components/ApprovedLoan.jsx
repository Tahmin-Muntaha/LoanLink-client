import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router";

const ApprovedLoan = () => {
  useEffect(() => {
    document.title = "LoanLink - Approved Loans";
  }, []);
  const { data: loans = [], isLoading } = useQuery({
    queryFn: async () => {
      const res = await axios("https://loanlink-inky.vercel.app/approvedloans");
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
  console.log(loans);
  return (
    <div>
      <div>
        <div>
          <div className="p-6 bg-base-200 h-full">
            <div className="bg-base-100 shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-base-300">
                <h2 className="text-xl font-semibold text-base-content">
                  Approved Loan Applications
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="">
                  <thead className="bg-base-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                        LOAN ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                        USER INFO(NAME AND EMAIL)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                        AMOUNT
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                        APPROVED DATE
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-base-100">
                    {loans.map((loan) => (
                      <tr className="hover:bg-base-200" key={loan.loanid}>
                        <td className="px-6 py-4 text-sm font-medium text-base-content whitespace-nowrap">
                          {loan.loanid}
                        </td>
                        <td className="px-6 py-4 text-sm text-base-content/70">
                          <div className="whitespace-nowrap">
                            {loan.fname} {loan.lname}
                          </div>
                          <div className="text-xs text-base-content/50">
                            {loan.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-base-content/70 whitespace-nowrap">
                          {loan.amount}
                        </td>
                        <td className="px-6 py-4 text-sm text-base-content/70 whitespace-nowrap">
                          {loan.approvedAt}
                        </td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap">
                          <NavLink to={`/details/${loan.loanid}`}>
                            <button className="bg-[#1F7A6F] text-white py-2 px-4 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300">
                              View
                            </button>
                          </NavLink>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedLoan;
