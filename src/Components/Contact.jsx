import { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        document.title = "LoanLink - Contact Us";
      }, [])
  return (
    <div className="bg-base-200 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-base-content">Contact Us</h1>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Have questions about loans or need support? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-base-100 p-8 rounded-2xl shadow-sm text-center border border-base-300">
            <h3 className="text-xl font-semibold text-base-content mb-2">Email</h3>
            <p className="text-base-content/70">support@loanlink.com</p>
          </div>

          <div className="bg-base-100 p-8 rounded-2xl shadow-sm text-center border border-base-300">
            <h3 className="text-xl font-semibold text-base-content mb-2">Phone</h3>
            <p className="text-base-content/70">+880 1234 567 890</p>
          </div>

          <div className="bg-base-100 p-8 rounded-2xl shadow-sm text-center border border-base-300">
            <h3 className="text-xl font-semibold text-base-content mb-2">Office</h3>
            <p className="text-base-content/70">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Contact;