import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router';

const DLoanApplication = () => {
  const {data:applications,isLoading}=useQuery({
    queryKey:['applications'],
    queryFn:async()=>{
      const res=await axios('http://localhost:3000/applications')
      return res.data
    }
  })
  console.log(applications)
  if(isLoading) return <div>Laoding.....</div>
    return (
        <div>
            <div className="p-6 bg-gray-50 h-full overflow-x-hidden">
      <div className=" bg-white shadow-lg rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Loan Applications</h2>
        </div>

       
        <div className=" overflow-y-hidden overflow-x-auto">
          <table className="min-w-[900px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  LOAN ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  USER(EMAIL,NAME)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  LOAN CATEGORY
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  AMOUNT
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  STATUS
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  ACTIONS
                </th>
                
              </tr>
            </thead>

            <tbody className="bg-white">
              {
                applications.map(app=>
                  <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {app._id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {app.fname} {app.lname} <br></br>
                  {app.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                 {app.category}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {app.amount}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {app.status}
                </td>
                <td className="px-6 py-4 text-sm text-blue-600 cursor-pointer hover:underline">
                 <NavLink>
                    <button className="w-full bg-[#1F7A6F] text-white py-2 px-2  rounded-xl font-semibold hover:bg-[#16675E] transition duration-300">View</button>
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
        </div>
    );
};

export default DLoanApplication;