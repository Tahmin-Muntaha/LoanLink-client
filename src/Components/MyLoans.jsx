import { useContext, useEffect } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const MyLoans = () => {
  useEffect(() => {
    document.title = "LoanLink - My Loans";
  }, []);
  const queryClient = useQueryClient();
  const { user } = useContext(AuthContext);
  const { data: loans = [], isLoading } = useQuery({
    queryKey: ["myLoans", user?.email],
    queryFn: async () => {
      const res = await axios(
        `https://loanlink-inky.vercel.app/userapplicatios/${user.email}`
      );
      return res.data;
    },
  });
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axios.delete(
        `https://loanlink-inky.vercel.app/applications/${id}`
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myLoans", user?.email],
      });
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
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
  return (
    <div className="p-4 sm:p-6 bg-base-200 min-h-screen transition-colors duration-500">
      <div className="bg-base-100 shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 sm:px-6 py-4 border-b border-base-300">
          <h2 className="text-xl font-semibold text-base-content">My Loans</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-base-200">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                  LOAN ID
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                  LOAN INFO
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                  AMOUNT
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                  STATUS
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                  ACTIVE
                </th>
              </tr>
            </thead>

            <tbody className="bg-base-100">
              {loans.map((loan) => (
                <tr key={loan._id} className="hover:bg-base-200">
                  <td className="px-4 sm:px-6 py-4 text-sm font-medium text-base-content whitespace-nowrap">
                    {loan.loanid}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-base-content/70 whitespace-nowrap">
                    {loan.title},{loan.category}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-base-content/70 whitespace-nowrap">
                    {loan.amount}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-base-content/70 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      loan.status === 'approved' ? 'bg-green-100 text-green-800' :
                      loan.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {loan.status}
                    </span>
                  </td>

                  <td className="px-4 sm:px-6 py-4 text-sm whitespace-nowrap">
                    <div className="flex flex-col gap-2 min-w-[120px]">
                      <NavLink to={`/details/${loan.loanid}`}>
                        <button className="w-full bg-[#1F7A6F] text-white py-2 px-3 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300 text-xs">
                          View
                        </button>
                      </NavLink>
                      
                      {loan.fee === "unpaid" && (
                        <NavLink>
                          <button
                            className="w-full bg-[#1F7A6F] text-white py-2 px-3 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300 text-xs"
                            type="button"
                            onClick={async () => {
                              const paymentInfo = {
                                name: loan.title,
                                category: loan.category,

                                price: 10,
                                quantity: 1,
                                customer: { email: user.email },
                                applicationId: loan._id,
                              };

                              const { data } = await axios.post(
                                "https://loanlink-inky.vercel.app/create-checkout-session",
                                paymentInfo
                              );

                              window.location.href = data.url;
                            }}
                          >
                            Pay
                          </button>
                        </NavLink>
                      )}
                      {loan.fee === "paid" && (
                        <NavLink to={`/payment/${loan._id}`}>
                          <button
                            className="w-full bg-green-600 text-white py-2 px-3 rounded-xl font-semibold hover:bg-green-700 transition duration-300 text-xs"
                            type="button"
                          >
                            Paid
                          </button>
                        </NavLink>
                      )}
                      {loan.status === "pending" && (
                        <button
                          className="w-full bg-red-600 text-white py-2 px-3 rounded-xl font-semibold hover:bg-red-700 transition duration-300 text-xs"
                          type="button"
                          onClick={() => handleDelete(loan._id)}
                        >
                          Cancel
                        </button>
                      )}
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

export default MyLoans;
