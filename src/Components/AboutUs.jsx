import React, { useEffect } from 'react';

const AboutUs = () => {
    useEffect(() => {
        document.title = "LoanLink - About Us";
      }, [])
  return (
    
    <div className="bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">About LoanLink</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            LoanLink is a digital loan management platform designed to make borrowing simple, transparent, and accessible for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            className="rounded-2xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              LoanLink connects users with reliable loan options through a secure and user-friendly platform. We focus on fast approvals, clear terms, and a stress-free borrowing experience.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Transparency
            </h3>
            <p className="text-gray-600">
              No hidden charges, clear interest rates, and simple loan terms.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Security
            </h3>
            <p className="text-gray-600">
              Your data and transactions are protected with industry-grade security.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Speed
            </h3>
            <p className="text-gray-600">
              Quick loan approvals and seamless payment processing.
            </p>
          </div>
        </div>

        <div className=" rounded-3xl p-12 text-center text-black">
          <h2 className="text-3xl font-bold mb-4">
            Our Mission
          </h2>
          <p className="max-w-3xl mx-auto opacity-90">
            To empower individuals and businesses by providing easy access to financial solutions through technology, trust, and transparency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
