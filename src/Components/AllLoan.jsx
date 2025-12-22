import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { BoxSelect, Eye, EyeOff, LassoSelectIcon } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';

const AllLoan = () => {
  const queryClient=useQueryClient()
  const [select,setSelect]=useState(false)
  const { data: loans = [], isLoading, isError } = useQuery({
    queryKey: ['loans'],
    queryFn: async () => {
      const res = await axios('http://localhost:3000/loans')
      return res.data
    }
  })
  const deleteMuation=useMutation({
    mutationFn:async(id)=>{

      const res = await axios.delete(`http://localhost:3000/details/${id}`)
      return res.data
    },
    
      onSuccess:()=>{
         
      console.log(true)
       queryClient.invalidateQueries({ queryKey: ['loans'] })
    },
    onError:(error)=>{
      console.log(error)
    
    }
    
      
      
    }
  )
  const handleDelete=(id)=>{
    Swal.fire({
  title: "Are you sure?",
  
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    deleteMuation.mutate(id)
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

  }
  const toggleShowMutation=useMutation({
    mutationFn:async({id,current})=>{
      const loan=loans.find(l=>l._id===id)
      const result=await axios.patch(`http://localhost:3000/details/${id}`,
        {showOnHome:!current}
      )
        return result.data
    },
    onSuccess:()=>{
      queryClient.invalidateQueries({ queryKey: ['loans'] })
    },
    onError:(err)=>{
      console.log(err)
    }
  })
  const handleShowOnHome=(id,current)=>{
  toggleShowMutation.mutate({id,current})
}

  if(isLoading) return <div>Laoding....</div>
    return (
        <div className="p-6 bg-gray-50 h-full overflow-x-hidden">
      <div className=" bg-white shadow-lg rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">All Loan</h2>
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
                 CREATED BY
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                 SHOW ON HOME
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
                  <img src={loan.image} className='w-[100px]'></img>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {loan.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {loan.interestRate}
                </td>
                
                <td className="px-6 py-4 text-sm cursor-pointer hover:underline">
                  {loan.category}
                </td>
                <td className="px-6 py-4 text-sm  cursor-pointer hover:underline">
                  {loan.createdBy}
                </td>
                <td className="px-6 py-4 text-sm cursor-pointer hover:underline">
                  {loan.showOnHome? "Yes":"No"}
                </td>
                <td className="px-6 py-4 text-sm  cursor-pointer hover:underline">
                  <NavLink to={`/dashboard/updateloan/${loan._id} `}>
                    <button className="w-full bg-[#1F7A6F] text-white py-2 px-2  rounded-xl font-semibold hover:bg-[#16675E] transition duration-300 ">Update</button>
                  </NavLink>
                  <NavLink>
                    <button className="w-full bg-[#1F7A6F] text-white py-2 px-2 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300 my-2" type="button" onClick={()=>handleDelete(loan._id)}>Delete</button><br></br>
                    <button className="w-full bg-[#1F7A6F] text-white py-2 px-2 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300 my-2 flex justify-center" onClick={()=>handleShowOnHome(loan._id,loan.showOnHome)}>
                      {
                        loan.showOnHome?(<Eye></Eye>):(<EyeOff></EyeOff>)
                      }
                    </button>
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

export default AllLoan;