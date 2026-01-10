import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

const PaymentSuccess = () => {
  useEffect(() => {
    document.title = "LoanLink - Success payment";
  }, []);
  const [searchParams] = useSearchParams();

  const sessionId = searchParams.get("session_id");
  const applicationId = searchParams.get("applicationId");

  useEffect(() => {
    if (applicationId && sessionId) {
      axios.patch(`https://loanlink-inky.vercel.app/fees/${applicationId}`, {
        fee: "paid",
        sessionId,
      });
    }
  }, [applicationId, sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 transition-colors duration-500">
      <div className="bg-base-100 p-8 rounded-2xl shadow-xl text-center border border-base-300 max-w-md w-full">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-base-content mb-2">Payment Successful!</h1>
        <p className="text-base-content/70 mb-4">Your payment has been completed successfully.</p>
        <p className="text-sm text-base-content/60">Session ID: {sessionId}</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;