import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../providers/AuthContext';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyLoans = () => {
  useEffect(() => {
    document.title = "LoanLink - My Loans";
  }, []); 
  const queryClient = useQueryClient()
  const {user}=useContext(AuthContext)
  const {data:loans=[],isLoading}=useQuery({
    queryKey: ['myLoans', user?.email],
    queryFn:async()=>{
      const res=await axios(`http://localhost:3000/userapplicatios/${user.email}`)
      return res.data
    }
  })
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axios.delete(`http://localhost:3000/applications/${id}`)
      return res.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['myLoans', user?.email]
      })
    }
  })

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id)
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
      }
    })
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
    return (
        <div>
            <div>
            <div className="p-6 bg-gray-50 h-full overflow-x-hidden">
      <div className=" bg-white shadow-lg rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">My Loans</h2>
        </div>

       
        <div className=" overflow-y-hidden overflow-x-auto">
          <table className="min-w-[900px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  LOAN ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  LOAN INFO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  AMOUNT
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  STATUS
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                  ACTIVE
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
                  {loan.title},{loan.category}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {loan.amount}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                 {loan.status}
                </td>
                
               
                <td className="px-6 py-4 text-sm text-blue-600 cursor-pointer hover:underline">
                  <NavLink to={`/details/${loan.loanid}`}>
                    <button className="w-full bg-[#1F7A6F] text-white py-2 px-2  rounded-xl font-semibold hover:bg-[#16675E] transition duration-300">View</button>
                  </NavLink>
                  <br></br>
                  {
                    loan.fee==='unpaid' && 
                    <NavLink>
                    <button className="w-full bg-[#1F7A6F] text-white py-2 px-2  rounded-xl font-semibold hover:bg-[#16675E] transition duration-300 my-2" type="button" onClick={async()=>


  {
  const paymentInfo = {
    name: loan.title,
    category: loan.category,
    
    price: 10,
    quantity: 1,
    customer: { email: user.email },
    applicationId: loan._id 
  }

  const { data } = await axios.post(
    'http://localhost:3000/create-checkout-session',
    paymentInfo
  )

  window.location.href = data.url 
}
                    }>Pay</button>
                  </NavLink>
                  }
                  {
                    loan.fee==="paid" && <NavLink to={`/payment/${loan._id}`}>
                    <button className="w-full bg-[#1F7A6F] text-white py-2 px-2  rounded-xl font-semibold hover:bg-[#16675E] transition duration-300 my-2" type="button" >Paid</button>
                    </NavLink>
                  }
                  {
                    loan.status==='pending' &&
                    
                    <button className="w-full bg-[#1F7A6F] text-white py-2 px-2  rounded-xl font-semibold hover:bg-[#16675E] transition duration-300" type="button" onClick={()=>handleDelete(loan._id)}>Cancel</button>
                  
                  }
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

export default MyLoans;