import React from 'react';

const Who = () => {
    return (
        <div className="bg-base-200 py-16 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-base-content mb-4">
                        Who Can Apply?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-base-content mb-3">University Students</h3>
                            <p className="text-base-content/70 text-sm leading-relaxed">
                                Students pursuing higher education and academic goals
                            </p>
                        </div>
                    </div>

                    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-base-content mb-3">Salaried Professionals</h3>
                            <p className="text-base-content/70 text-sm leading-relaxed">
                                Working professionals with regular income sources
                            </p>
                        </div>
                    </div>

                    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-base-content mb-3">Small Business Owners</h3>
                            <p className="text-base-content/70 text-sm leading-relaxed">
                                Entrepreneurs running small to medium enterprises
                            </p>
                        </div>
                    </div>

                    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#1F7A6F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-base-content mb-3">Freelancers & Self-Employed</h3>
                            <p className="text-base-content/70 text-sm leading-relaxed">
                                Independent professionals and consultants
                            </p>
                        </div>
                    </div>

                </div>

               
            </div>
        </div>
    );
};

export default Who;