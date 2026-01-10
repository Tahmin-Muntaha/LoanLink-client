import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        document.title = "LoanLink - Contact Us";
      }, [])
  return (
    <div className="bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions about loans or need support? We’re here to help you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">support@loanlink.com</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+880 1234 567 890</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Office</h3>
            <p className="text-gray-600">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Contact;
