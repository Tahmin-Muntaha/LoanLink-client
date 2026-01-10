import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

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
    <div>
      <form
        onSubmit={handleSearch}
        className="flex items-center gap-3 mb-6 bg-white p-4 rounded-lg shadow"
      >
        <input
          name="search"
          type="text"
          placeholder="Search by property name..."
          className="w-full md:w-[30%] px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-[#1F7A6F] focus:ring-1 focus:ring-[#1F7A6F]"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-[#1F7A6F] text-white rounded-lg hover:bg-[#16655C] transition"
        >
          Search
        </button>
      </form>

      <div className="p-6 bg-gray-50 h-full overflow-x-hidden">
        <div className="bg-white shadow-lg rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              Manage Loans
            </h2>
          </div>

          <div className="overflow-y-hidden overflow-x-auto">
            <table className="min-w-[900px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3">IMAGE</th>
                  <th className="px-6 py-3">TITLE</th>
                  <th className="px-6 py-3">INTEREST</th>
                  <th className="px-6 py-3">CATEGORY</th>
                  <th className="px-6 py-3">ACTIONS</th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {loans.map((loan) => (
                  <tr key={loan._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <img src={loan.image} className="w-[50px]" />
                    </td>
                    <td className="px-6 py-4">{loan.title}</td>
                    <td className="px-6 py-4">{loan.interestRate}</td>
                    <td className="px-6 py-4">{loan.category}</td>
                    <td className="px-6 py-4">
                      <NavLink to={`/dashboard/updateloan/${loan._id}`}>
                        <button className="w-full bg-[#1F7A6F] text-white py-2 rounded-xl">
                          Update
                        </button>
                      </NavLink>
                      <button
                        className="w-full bg-[#1F7A6F] text-white py-2 rounded-xl my-2"
                        onClick={() => handleDelete(loan._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageLoans;
