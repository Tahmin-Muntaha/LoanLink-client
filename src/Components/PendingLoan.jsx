import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../providers/AuthContext';

const PendingLoan = () => {
  useEffect(() => {
    document.title = "LoanLink - Pending Loans";
  }, []); 
  const {user}=useContext(AuthContext)
  const queryClient = useQueryClient();

  const {data:loans=[],isLoading}=useQuery({
    queryKey: ['pendingLoans', user?.email],
    queryFn:async()=>{
      const res =await axios(`http://localhost:3000/pendingLoans?email=${user.email}`)
      return res.data
    }
  })
const approveMutation = useMutation({
    mutationFn: async (loanId) => {
      return await axios.patch(`http://localhost:3000/approved/${loanId}`, {
        status: 'approved',
        approvedAt: new Date()
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pendingLoans', user?.email] });
    },
    onError:(err)=>{
      console.log(err)
    }
  });
  const ApprovedLoan=(loanId)=>
    {
      approveMutation.mutate(loanId)

  }
  const RejectMutation = useMutation({
    mutationFn: async (loanId) => {
      return await axios.patch(`http://localhost:3000/approved/${loanId}`, {
        status: 'rejected',
        
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pendingLoans', user?.email] });
    },
    onError:(err)=>{
      console.log(err)
    }
  });
  const RejectedLoan=(loanId)=>
    {
      RejectMutation.mutate(loanId)

  }
  if(isLoading) return <div className="flex justify-center">
        <div>
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-xl"></span>
        </div>
      </div>
  console.log(loans)
    return (
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
                  APPROVED DATE
                </th>
                
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  ACTIONS
                </th>
                
              </tr>
            </thead>

            <tbody className="bg-white">
              {
                loans.map(loan=>
                  <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {loan.loanid}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {loan.fname} {loan.lname}
<br></br>
                  {loan.email
}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                 {loan.amount

}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {loan.approvedAt || 'Not Approved'}
                </td>
                
               
                <td className="px-6 py-4 text-sm text-blue-600 cursor-pointer hover:underline">
                 
                    <button className="w-full bg-[#1F7A6F] text-white py-2 px-2  rounded-xl font-semibold hover:bg-[#16675E] transition duration-300" type="button" onClick={()=>{ApprovedLoan(loan.loanid)}}>Approve</button>
                  <br></br>
                  
                    <button className="w-full bg-[#1F7A6F] text-white py-2 px-2  rounded-xl font-semibold hover:bg-[#16675E] transition duration-300 my-2" type="button" onClick={()=>{RejectedLoan(loan.loanid)}}>Reject</button>
                 
                  <NavLink to={`/details/${loan.loanid}`}>
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
        </div>
    );
};

export default PendingLoan;