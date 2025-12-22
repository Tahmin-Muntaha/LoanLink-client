import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const PaymentDetail = () => {
  useEffect(() => {
    document.title = "LoanLink - Payment Details";
  }, []); 
    const {id}=useParams()
    const {data:loan={},isLoading}=useQuery({
        queryKey:['payment',id],
        queryFn:async()=>{
            const res = await axios(`http://localhost:3000/applications/${id}`)

            return res.data

        }

    })
    const {email,sessionId,loanid}=loan
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
  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    {isLoading ? (
      <span className="loading loading-spinner loading-lg"></span>
    ) : (
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-8 space-y-6">
        
        <div className="text-center space-y-2">
          <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-7 h-7 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Payment Successful
          </h2>
          <p className="text-gray-500 text-sm">
            Your payment has been completed successfully
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Email</span>
            <span className="font-medium text-gray-800">{email}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Loan Id</span>
            <span className="font-medium text-gray-800">{loanid}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Session Id</span>
            <span className="font-medium text-gray-800 break-all text-right">
              {sessionId}
            </span>
          </div>
        </div>

      </div>
    )}
  </div>
);

};

export default PaymentDetail;