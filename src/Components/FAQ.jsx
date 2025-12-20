import React from 'react';

const FAQ = () => {
    return (
        <div className="bg-[#F9FAFB] py-14">
            <div className="">
                

                <div className="flex flex-col gap-6">

                    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-3">
                        <p className="font-semibold text-[#1F7A6F]">1. How do I apply for a loan?</p>
                        <p className="text-gray-700">
                            You can apply online by filling out the application form with your personal and financial details. Once submitted, our team will review your application and guide you through the next steps.
                        </p>
                    </div>

                    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-3">
                        <p className="font-semibold text-[#1F7A6F]">2. How long does loan approval take?</p>
                        <p className="text-gray-700">
                            Most loans are approved within 24–48 hours after submission of all required documents. Some complex applications may take a bit longer.
                        </p>
                    </div>

                    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-3">
                        <p className="font-semibold text-[#1F7A6F]">3. What documents do I need to provide?</p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Proof of identity (ID card, passport, or driver’s license)</li>
                            <li>Proof of address (utility bill, rental agreement, or bank statement)</li>
                            <li>Income proof (salary slip, bank statement, or business documents)</li>
                        </ul>
                    </div>

                    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-3">
                        <p className="font-semibold text-[#1F7A6F]">4. How is my EMI calculated?</p>
                        <p className="text-gray-700">
                            EMI (Equated Monthly Installment) depends on the loan amount, interest rate, and repayment tenure. You can use our loan calculator to see your EMI before applying.
                        </p>
                    </div>

                    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-3">
                        <p className="font-semibold text-[#1F7A6F]">5. Can I prepay my loan?</p>
                        <p className="text-gray-700">
                            Yes, you can prepay your loan partially or fully. Early repayment may reduce the total interest, but some loans may have prepayment charges.
                        </p>
                    </div>

                    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-3">
                        <p className="font-semibold text-[#1F7A6F]">6. What if my application is rejected?</p>
                        <p className="text-gray-700">
                            If your application is rejected, our team will provide a reason and suggest steps to improve your eligibility for future applications.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FAQ;
