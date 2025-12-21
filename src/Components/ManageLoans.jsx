import React from 'react';
import { NavLink } from 'react-router';

const ManageLoans = () => {
    return (
        <div>
            <div>
            <div className="p-6 bg-gray-50 h-full overflow-x-hidden">
      <div className=" bg-white shadow-lg rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Manage Loans</h2>
        </div>

       
        <div className=" overflow-y-hidden overflow-x-auto">
          <table className="min-w-[900px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  IMAGE
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  TITLE
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  INTEREST
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  CATEGORY
                </th>
                
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  ACTIONS
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  UPDATE
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                 DELETE
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  <img src=''></img>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Small Business Growth Loan
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  8
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Business
                </td>
                
               
                <td className="px-6 py-4 text-sm text-blue-600 cursor-pointer hover:underline">
                  okay
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <NavLink>
                    <button className=" bg-[#1F7A6F] text-white py-2 px-2  rounded-xl font-semibold hover:bg-[#16675E] transition duration-300">Update</button>
                  </NavLink>
                </td>
                 <td className="px-6 py-4 text-sm text-gray-500">
                  <NavLink>
                    <button className=" bg-[#1F7A6F] text-white py-2 px-2  rounded-xl font-semibold hover:bg-[#16675E] transition duration-300">Delete</button>
                  </NavLink>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
       
      </div>
    </div>
        </div>
        </div>
    );
};

export default ManageLoans;