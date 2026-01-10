import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";

const PaymentDetail = () => {
  useEffect(() => {
    document.title = "LoanLink - Payment Details";
  }, []);
  const { id } = useParams();
  const { data: loan = {}, isLoading } = useQuery({
    queryKey: ["payment", id],
    queryFn: async () => {
      const res = await axios(
        `https://loanlink-inky.vercel.app/applications/${id}`
      );

      return res.data;
    },
  });
  const { email, sessionId, loanid } = loan;
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
    );

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 transition-colors duration-500">
      {isLoading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <div className="w-full max-w-lg bg-base-100 rounded-2xl shadow-md p-8 space-y-6 border border-base-300">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-base-content">Payment Confirmed</h1>
            <p className="text-base-content/70">Your payment has been successfully processed</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between py-2 border-b border-base-300">
              <span className="text-base-content/70">Email:</span>
              <span className="font-medium text-base-content">{email}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-base-300">
              <span className="text-base-content/70">Loan ID:</span>
              <span className="font-medium text-base-content">{loanid}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-base-300">
              <span className="text-base-content/70">Session ID:</span>
              <span className="font-medium text-base-content text-sm">{sessionId}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentDetail;