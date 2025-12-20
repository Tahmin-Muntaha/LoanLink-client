import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import LoanCard from '../Components/LoanCard'

const AllLoans = () => {
  const { data: loans = [], isLoading, isError } = useQuery({
    queryKey: ['loans'],
    queryFn: async () => {
      const res = await axios('http://localhost:3000/loans')
      return res.data
    }
  })

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center text-[#1F7A6F] text-xl font-bold">
        Loading Loans...
      </div>
    )

  if (isError)
    return (
      <div className="min-h-screen flex items-center justify-center text-[#DC2626] text-lg font-semibold">
        Failed to load loans
      </div>
    )

  return (
    <div className="bg-[#F9FAFB] min-h-screen px-4 md:px-10 pb-16">
      
      <div className="max-w-7xl mx-auto">

        <h1 className="text-2xl font-bold text-[#1F2937] text-center pt-6 pb-2">
          All Loans 
        </h1>

        <p className="text-center text-[#6B7280] max-w-2xl mx-auto mb-10">
          Explore flexible loan options designed to match your financial goals
        </p>

        <div className="grid grid-cols-2  md:grid-cols-3 gap-4 ">
          {loans.map(loan => (
            <LoanCard key={loan._id} loan={loan} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default AllLoans
