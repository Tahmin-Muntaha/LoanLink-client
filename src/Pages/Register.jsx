import React from "react";
import { NavLink, useNavigate } from "react-router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import toast from "react-hot-toast";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();

  const saveOrUpdateUser=async(userData)=>{
    const {data}=await axios.post(`http://localhost:3000/user`,userData)
    return data
  }
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target?.name?.value;
    const email = e.target?.email?.value;
    const image = e.target?.photURl?.value;
    const role = e.target?.role?.value;
    const password = e.target?.password?.value;
    console.log(name, email, image, role, password);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter."
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
          
        })
          .then((res) => {
            navigate("/");
            saveOrUpdateUser({name,email,image,role})
            toast.success("Successful");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
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

        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label className="text-sm font-medium text-[#6B7280]">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#6B7280]">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#6B7280]">
              Photo URL
            </label>
            <input
              name="photURl"
              type="text"
              placeholder="Enter your photo URL"
              className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#6B7280]">
              Select Role
            </label>
            <select
              className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 bg-white "
              name="role"
            >
              <option>Borrower</option>

              <option value="manager">Manager</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-[#6B7280]">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
            />
          </div>

          <div className="text-sm text-center text-[#6B7280]">
            Already have an account?{" "}
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
