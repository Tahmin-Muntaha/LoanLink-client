import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';
const DLoanApplication = () => {
  const {data:applications,isLoading}=useQuery({
    queryKey:['applications'],
    queryFn:async()=>{
      const res=await axios('http://localhost:3000/applications')
      return res.data
    }
  })
  

const handleDetails = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/applications/${id}`);
    const appData = res.data;

    Swal.fire({
      title: `<span style="color:#1F7A6F;">Loan Application Details</span>`,
      html: `
        <div style="text-align:left; padding:10px; line-height:1.6;">
          <p><strong style="color:#16675E;">Loan ID:</strong> ${appData._id}</p>
          <p><strong style="color:#16675E;">Title:</strong> ${appData.title}</p>
          <p><strong style="color:#16675E;">User Name:</strong> ${appData.fname} ${appData.lname}</p>
          <p><strong style="color:#16675E;">Email:</strong> ${appData.email}</p>
          <p><strong style="color:#16675E;">Contact:</strong> ${appData.contact}</p>
          <p><strong style="color:#16675E;">National ID:</strong> ${appData.national}</p>
          <p><strong style="color:#16675E;">Address:</strong> ${appData.address}</p>
          <p><strong style="color:#16675E;">Category:</strong> ${appData.category}</p>
          <p><strong style="color:#16675E;">Reason:</strong> ${appData.reason}</p>
          <p><strong style="color:#16675E;">Income:</strong> ${appData.income}</p>
          <p><strong style="color:#16675E;">Amount:</strong> ${appData.amount}</p>
          <p><strong style="color:#16675E;">Monthly:</strong> ${appData.monthly}</p>
          <p><strong style="color:#16675E;">Interest Rate:</strong> ${appData.interestRate}%</p>
          <p><strong style="color:#16675E;">Fee Status:</strong> ${appData.fee}</p>
          <p><strong style="color:#16675E;">Extra Info:</strong> ${appData.extra}</p>
          <p><strong style="color:#16675E;">Status:</strong> ${appData.status}</p>
        </div>
      `,
      icon: 'info',
      iconColor: '#1F7A6F',
      background: '#f0fdfa',
      showCloseButton: true,
      confirmButtonText: 'Close',
      confirmButtonColor: '#1F7A6F',
      customClass: {
        popup: 'shadow-lg rounded-xl border border-gray-300'
      }
    });
  } catch (err) {
    console.log(err);
  }
};



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
                  <button className="w-full bg-[#1F7A6F] text-white py-2 px-2 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300 my-2" onClick={()=>{
                    handleDetails(app._id)
                    
                  }}>
View
                  </button>
                 
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


