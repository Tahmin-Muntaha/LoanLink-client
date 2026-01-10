import axios from "axios";
import React, { useEffect } from "react";
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
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Payment Successful!</h1>
      <p>Your payment has been completed successfully.</p>
      <p>Session ID: {sessionId}</p>
    </div>
  );
};

export default PaymentSuccess;
