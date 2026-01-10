import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import Swal from "sweetalert2";

const ManageLoans = () => {
  useEffect(() => {
    document.title = "LoanLink - Manage Loans";
  }, []);
  const queryClient = useQueryClient();
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState("");

  const { data: loans = [], isLoading } = useQuery({
    queryKey: ["loans", user?.email, search],
    enabled: !!user?.email,
    queryFn: async () => {
      if (search) {
        const res = await axios.get(
          `https://loanlink-inky.vercel.app/search?search=${search}`
        );
        return res.data;
      } else {
        const res = await axios.get(
          `https://loanlink-inky.vercel.app/manageLoans?email=${user.email}`
        );
        return res.data;
      }
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axios.delete(
        `https://loanlink-inky.vercel.app/details/${id}`
      );
      return res.data;
    },
    onSuccess: () => {
      
      queryClient.invalidateQueries({
        queryKey: ["loans", user?.email, search],
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

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
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
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 bg-base-100 p-4 rounded-lg shadow border border-base-300"
      >
        <input
          name="search"
          type="text"
          placeholder="Search by property name..."
          className="flex-1 sm:w-auto px-4 py-2 input input-bordered bg-base-100 text-base-content"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-[#1F7A6F] text-white rounded-lg hover:bg-[#16675E] transition duration-300 whitespace-nowrap"
        >
          Search
        </button>
      </form>

      <div className="bg-base-100 shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 sm:px-6 py-4 border-b border-base-300">
          <h2 className="text-xl font-semibold text-base-content">
            Manage Loans
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-base-200">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">IMAGE</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">TITLE</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">INTEREST</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">CATEGORY</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>

            <tbody className="bg-base-100">
              {loans.map((loan) => (
                <tr key={loan._id} className="hover:bg-base-200">
                  <td className="px-4 sm:px-6 py-4">
                    <img src={loan.image} className="w-[50px] h-[50px] object-cover rounded" alt={loan.title} />
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-base-content whitespace-nowrap">{loan.title}</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-base-content/70 whitespace-nowrap">{loan.interestRate}%</td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-base-content/70 whitespace-nowrap">{loan.category}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col gap-2 min-w-[120px]">
                      <NavLink to={`/dashboard/updateloan/${loan._id}`}>
                        <button className="w-full bg-[#1F7A6F] text-white py-2 px-3 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300 text-xs">
                          Update
                        </button>
                      </NavLink>
                      <button
                        className="w-full bg-red-600 text-white py-2 px-3 rounded-xl font-semibold hover:bg-red-700 transition duration-300 text-xs"
                        onClick={() => handleDelete(loan._id)}
                      >
                        Delete
                      </button>
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

export default ManageLoans;
