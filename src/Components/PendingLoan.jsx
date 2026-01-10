import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import toast from "react-hot-toast";

const PendingLoan = () => {
  useEffect(() => {
    document.title = "LoanLink - Pending Loans";
  }, []);
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { data: loans = [], isLoading } = useQuery({
    queryKey: ["pendingLoans", user?.email],
    queryFn: async () => {
      const res = await axios(
        `https://loanlink-inky.vercel.app/pendingLoans?email=${user.email}`
      );
      return res.data;
    },
  });
  const approveMutation = useMutation({
    mutationFn: async (loanId) => {
      return await axios.patch(
        `https://loanlink-inky.vercel.app/approved/${loanId}`,
        {
          status: "approved",
          approvedAt: new Date(),
        }
      );
    },
    onSuccess: () => {
      toast.success('Approved')
      queryClient.invalidateQueries({
        queryKey: ["pendingLoans", user?.email],
      });
    },
    onError: (err) => {

      toast.error(err.message)
    },
  });
  const ApprovedLoan = (loanId) => {
    approveMutation.mutate(loanId);
  };
  const RejectMutation = useMutation({
    mutationFn: async (loanId) => {
      return await axios.patch(
        `https://loanlink-inky.vercel.app/approved/${loanId}`,
        {
          status: "rejected",
        }
      );
    },
    onSuccess: () => {
      toast.success('Rejected')
      queryClient.invalidateQueries({
        queryKey: ["pendingLoans", user?.email],
      });
    },
    onError: (err) => {
      toast.error(err.message)
    },
  });
  const RejectedLoan = (loanId) => {
    RejectMutation.mutate(loanId);
  };
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
    <div className="p-4 sm:p-6 bg-base-200 min-h-screen transition-colors duration-500">
      <div className="bg-base-100 shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 sm:px-6 py-4 border-b border-base-300">
          <h2 className="text-xl font-semibold text-base-content">
            Pending Loan Applications
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-base-200">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                  LOAN ID
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                  USER INFO(NAME AND EMAIL)
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                  AMOUNT
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                  APPROVED DATE
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                  ACTIONS
                </th>
              </tr>
            </thead>

            <tbody className="bg-base-100">
              {loans.map((loan) => (
                <tr key={loan.loanid} className="hover:bg-base-200">
                  <td className="px-4 sm:px-6 py-4 text-sm font-medium text-base-content whitespace-nowrap">
                    {loan.loanid}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-base-content/70">
                    <div className="whitespace-nowrap">
                      {loan.fname} {loan.lname}
                    </div>
                    <div className="text-xs text-base-content/50">
                      {loan.email}
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-base-content/70 whitespace-nowrap">
                    {loan.amount}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-base-content/70 whitespace-nowrap">
                    {loan.approvedAt || "Not Approved"}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm whitespace-nowrap">
                    <div className="flex flex-col gap-2 min-w-[120px]">
                      <button
                        className="bg-[#1F7A6F] text-white py-2 px-3 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300 text-xs"
                        type="button"
                        onClick={() => {
                          ApprovedLoan(loan.loanid);
                        }}
                      >
                        Approve
                      </button>

                      <button
                        className="bg-red-600 text-white py-2 px-3 rounded-xl font-semibold hover:bg-red-700 transition duration-300 text-xs"
                        type="button"
                        onClick={() => {
                          RejectedLoan(loan.loanid);
                        }}
                      >
                        Reject
                      </button>

                      <NavLink to={`/details/${loan.loanid}`}>
                        <button className="w-full bg-[#1F7A6F] text-white py-2 px-3 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300 text-xs">
                          View
                        </button>
                      </NavLink>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingLoan;
