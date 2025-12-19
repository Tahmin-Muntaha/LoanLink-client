import React from "react";
import { NavLink } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        
        
        <div className="flex justify-center mb-6">
          <img
            src="https://e7.pngegg.com/pngimages/543/566/png-clipart-microfinance-saving-bank-loan-bank-saving-leaf.png"
            alt="LoanLink"
            className="h-20"
          />
        </div>

        
        <h2 className="text-2xl font-bold text-center text-[#1F2937] mb-6">
          Create Your Account
        </h2>

       
        <form className="space-y-4">

          
          <div>
            <label className="text-sm font-medium text-[#6B7280]">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F7A6F]"
            />
          </div>

         
          <div>
            <label className="text-sm font-medium text-[#6B7280]">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F7A6F]"
            />
          </div>

        
          <div>
            <label className="text-sm font-medium text-[#6B7280]">Photo URL</label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F7A6F]"
            />
          </div>

         
          <div>
            <label className="text-sm font-medium text-[#6B7280]">Select Role</label>
            <select
              className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F7A6F]"
            >
              <option disabled selected>
                Choose role
              </option>
              <option value="borrower">Borrower</option>
              <option value="manager">Manager</option>
            </select>
          </div>

         
          <div>
            <label className="text-sm font-medium text-[#6B7280]">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F7A6F]"
            />
          </div>

         
          <div className="text-sm text-center text-[#6B7280]">
            Already have an account?{' '}
            <NavLink
              to="/login"
              className="text-[#1F7A6F] font-medium hover:underline"
            >
              Login
            </NavLink>
          </div>

          
          <button
            type="submit"
            className="w-full bg-[#1F7A6F] text-white py-2 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300"
          >
            Sign Up
          </button>

        </form>
      </div>
    </div>
  );
};

export default Register;
