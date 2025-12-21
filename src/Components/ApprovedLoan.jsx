import React from 'react';
import { NavLink } from 'react-router';

const ApprovedLoan = () => {
    return (
        <div>
            <div>
            <div>
            <div className="p-6 bg-gray-50 h-full overflow-x-hidden">
      <div className=" bg-white shadow-lg rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Pending Loan Applications</h2>
        </div>

       
        <div className=" overflow-y-hidden overflow-x-auto">
          <table className="min-w-[900px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  LOAN ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  USER INFO(NAME AND EMAIL)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                 AMOUNT
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  Approved DATE
                </th>
                
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  ACTIONS
                </th>
                
              </tr>
            </thead>

            <tbody className="bg-white">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  6456465
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Tahmin Muntaha<br></br>
                  tahminmuntaha66@gmail.com
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                 15418
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  12/12/12
                </td>
                
               
                <td className="px-6 py-4 text-sm text-blue-600 cursor-pointer hover:underline">
                  okay
                </td>
                
              </tr>
              
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