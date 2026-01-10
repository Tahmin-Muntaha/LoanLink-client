import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const ManageUser = () => {
  useEffect(() => {
    document.title = "LoanLink - All Users";
  }, []);
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios("https://loanlink-inky.vercel.app/user");
      return res.data;
    },
  });
  console.log(users);
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
          <h2 className="text-xl font-semibold text-base-content">Manage Users</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-base-200">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                  NAME
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                  EMAIL
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-base-content/60 whitespace-nowrap">
                  ROLE
                </th>
              </tr>
            </thead>

            <tbody className="bg-base-100">
              {users?.map((user) => (
                <tr key={user._id || user.email} className="hover:bg-base-200">
                  <td className="px-4 sm:px-6 py-4 text-sm font-medium text-base-content whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-base-content/70 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-base-content/70 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1F7A6F] text-white">
                      {user.role}
                    </span>
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

export default ManageUser;
