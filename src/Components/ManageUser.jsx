import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router";

const ManageUser = () => {
  useEffect(() => {
    document.title = "LoanLink - All Users";
  }, []); 
  const {data:users,isLoading}=useQuery({
    queryKey:['users'],
    queryFn:async()=>{
      const res=await axios('http://localhost:3000/user')
      return res.data
    }
  })
  console.log(users)
  if(isLoading) return <div className="flex justify-center">
        <div>
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-xl"></span>
        </div>
      </div>
  return (
    <div className="p-6 bg-gray-50 h-full overflow-x-hidden">
      <div className=" bg-white shadow-lg rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Manage Users</h2>
        </div>

       
        <div className=" overflow-y-hidden overflow-x-auto">
          <table className="min-w-[900px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  NAME
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  EMAIL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  ROLE
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  ACTION
                </th>
                
              </tr>
            </thead>

            <tbody className="bg-white">
              {
                users.map(user=>
                  <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {user.role}
                </td>
                <td className="px-6 py-4 text-sm text-blue-600 cursor-pointer hover:underline">
                   <NavLink>
                    <button className=" bg-[#1F7A6F] text-white py-2 px-2  rounded-xl font-semibold hover:bg-[#16675E] transition duration-300">Update</button>
                  </NavLink>
                </td>
                
              </tr>

              )
              }
              
            </tbody>
          </table>
        </div>
       
      </div>
    </div>
    
  );
};

export default ManageUser;
