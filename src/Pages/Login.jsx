import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { auth } from "../Firebase/firebase.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
  useEffect(() => {
    document.title = "LoanLink - Log In";
  }, []);
  const saveOrUpdateUser = async (userData) => {
    const { data } = await axios.post(
      `https://loanlink-inky.vercel.app/user`,
      userData
    );
    return data;
  };
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target?.email?.value;
    const password = e.target?.password?.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const { email } = res.user;
        navigate(from, { replace: true });
        saveOrUpdateUser({ email });
        toast.success("Log In successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        navigate(from, { replace: true });
        saveOrUpdateUser({
          name: displayName,
          email,
          image: photoURL,
          role: "borrower",
        });
        toast.success("Log In successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 ">
        <div className="flex justify-center mb-6">
          <img
            src="https://e7.pngegg.com/pngimages/543/566/png-clipart-microfinance-saving-bank-loan-bank-saving-leaf.png"
            alt="LoanLink"
            className="h-20"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-[#1F2937] mb-6">
          Log In to Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleLogIn}>
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
            New in our website?{" "}
            <NavLink
              to="/register"
              className="text-[#1F7A6F] font-medium hover:underline"
            >
              Register
            </NavLink>
          </div>

          <div className="text-sm text-center text-[#6B7280]">
            Continue with{" "}
            <button
              type="button"
              onClick={handleGoogle}
              className="text-[#1F7A6F] font-medium hover:underline"
            >
              Google
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1F7A6F] text-white py-2 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
