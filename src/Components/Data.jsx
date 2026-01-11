import React from 'react';

const Data = () => {
    return (
        <div className="bg-base-200 py-16 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-base-content mb-4">
                        Your Data. Your Control
                    </h2>
                    
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-base-content mb-3">🔒 Secure Platform</h3>
                            <p className="text-base-content/70 text-sm leading-relaxed">
                                All your information is protected with SSL encryption.
                            </p>
                        </div>
                    </div>

                    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-base-content mb-3">🛡 Verified Lenders Only</h3>
                            <p className="text-base-content/70 text-sm leading-relaxed">
                                We work with trusted lenders for safe transactions.
                            </p>
                        </div>
                    </div>

                    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-base-content mb-3">👁 Privacy First</h3>
                            <p className="text-base-content/70 text-sm leading-relaxed">
                                Your data will never be shared or sold.
                            </p>
                        </div>
                    </div>

                    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v6H4V5h1zm0 8v2H4v-2h1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-base-content mb-3">📜 Transparent Policies</h3>
                            <p className="text-base-content/70 text-sm leading-relaxed">
                                Clear terms and conditions with no hidden rules.
                            </p>
                        </div>
                    </div>

                </div>

               
            </div>
        </div>
    );
};

export default Data;