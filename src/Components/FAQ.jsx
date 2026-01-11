const FAQ = () => {
    return (
        <div className="bg-base-200 py-16 transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                
               

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                        <div className="flex items-start mb-4">
                            <div className="w-10 h-10 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-[#1F7A6F] font-bold text-sm">1</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1F7A6F] text-lg mb-2">How do I apply for a loan?</h3>
                                <p className="text-base-content/80 leading-relaxed">
                                    You can apply online by filling out the application form with your personal and financial details. Once submitted, our team will review your application and guide you through the next steps.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                        <div className="flex items-start mb-4">
                            <div className="w-10 h-10 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-[#1F7A6F] font-bold text-sm">2</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1F7A6F] text-lg mb-2">How long does loan approval take?</h3>
                                <p className="text-base-content/80 leading-relaxed">
                                    Most loans are approved within 24–48 hours after submission of all required documents. Some complex applications may take a bit longer.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                        <div className="flex items-start mb-4">
                            <div className="w-10 h-10 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-[#1F7A6F] font-bold text-sm">3</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1F7A6F] text-lg mb-2">What documents do I need to provide?</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center text-base-content/80">
                                        <div className="w-2 h-2 bg-[#1F7A6F] rounded-full mr-3 flex-shrink-0"></div>
                                        <span>Proof of identity (ID card, passport, or driver's license)</span>
                                    </div>
                                    <div className="flex items-center text-base-content/80">
                                        <div className="w-2 h-2 bg-[#1F7A6F] rounded-full mr-3 flex-shrink-0"></div>
                                        <span>Proof of address (utility bill, rental agreement, or bank statement)</span>
                                    </div>
                                    <div className="flex items-center text-base-content/80">
                                        <div className="w-2 h-2 bg-[#1F7A6F] rounded-full mr-3 flex-shrink-0"></div>
                                        <span>Income proof (salary slip, bank statement, or business documents)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                        <div className="flex items-start mb-4">
                            <div className="w-10 h-10 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-[#1F7A6F] font-bold text-sm">4</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1F7A6F] text-lg mb-2">How is my EMI calculated?</h3>
                                <p className="text-base-content/80 leading-relaxed">
                                    EMI (Equated Monthly Installment) depends on the loan amount, interest rate, and repayment tenure. You can use our loan calculator to see your EMI before applying.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                        <div className="flex items-start mb-4">
                            <div className="w-10 h-10 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-[#1F7A6F] font-bold text-sm">5</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1F7A6F] text-lg mb-2">Can I prepay my loan?</h3>
                                <p className="text-base-content/80 leading-relaxed">
                                    Yes, you can prepay your loan partially or fully. Early repayment may reduce the total interest, but some loans may have prepayment charges.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                        <div className="flex items-start mb-4">
                            <div className="w-10 h-10 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-[#1F7A6F] font-bold text-sm">6</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1F7A6F] text-lg mb-2">What if my application is rejected?</h3>
                                <p className="text-base-content/80 leading-relaxed">
                                    If your application is rejected, our team will provide a reason and suggest steps to improve your eligibility for future applications.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                
            </div>
        </div>
    );
};

export default FAQ;