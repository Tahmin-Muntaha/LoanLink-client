import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router'

const Details = () => {
  useEffect(() => {
    document.title = "LoanLink - Loan Details";
  }, []); 
  const { id } = useParams()

  const { data: loan = {}, isLoading } = useQuery({
    queryKey: ['loan', id],
    queryFn: async () => {
      const res = await axios(`http://localhost:3000/details/${id}`)
      return res.data
    }
  })

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
    )

  const {
    image,
    title,
    description,
    category,
    emiPlans ,
    interestRate,
    maxLoanLimit,
    requiredDocuments ,
  } = loan

  return (
    <div className="bg-[#F9FAFB] min-h-screen px-4 pb-20">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pt-8">

        <div className="bg-white rounded-2xl shadow-2xl border border-[#E5E7EB]">
          <img
            src={image}
            alt={title}
            className="w-full h-64"
          />
        </div>

        <div className="">
          
          <span className=" bg-[#F4C430] text-[#1F2937] font-bold px-4 py-1 rounded-full text-sm">
            {category}
          </span>

          <h1 className=" mt-4 text-3xl md:text-4xl font-extrabold">
            {title}
          </h1>

          <p className="text-[#6B7280]">
            {description}
          </p>

          <div className=" mt-5 grid grid-cols-2 gap-4">
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 text-center shadow-sm">
              <p className="text-sm text-[#6B7280]">Interest Rate</p>
              <p className="text-xl font-extrabold text-[#1F7A6F]">
                {interestRate}%
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 text-center shadow-sm">
              <p className="text-sm text-[#6B7280]">Max Loan</p>
              <p className="text-xl font-extrabold text-[#1F7A6F]">
                {maxLoanLimit}
              </p>
            </div>
          </div>

         

        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">

        <div className="bg-white rounded-2xl shadow-md border border-[#E5E7EB] p-6">
          <h2 className="text-xl font-bold text-[#1F2937] mb-4">
            EMI Plans
          </h2>
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-5 text-[#374151] leading-relaxed">
  {emiPlans}
</div>

        </div>

        <div className="bg-white rounded-2xl shadow-md border border-[#E5E7EB] p-6">
          <h2 className="text-xl font-bold text-[#1F2937] mb-4">
            Required Documents
          </h2>
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-5 text-[#374151] leading-relaxed space-y-2">
  {requiredDocuments}
</div>

        </div>

      </div>
       <div className='flex justify-center'>
       <NavLink to={`/application/${id}`}>
       
        <button className="w-90 bg-[#1F7A6F] text-white py-3 rounded-xl font-bold text-lg hover:bg-[#16675E] transition mt-8">
            Apply Now
          </button>
       
       </NavLink>
       </div>
    </div>
  )
}

export default Details
