import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  useEffect(() => {
    document.title = "LoanLink - Register";
  }, []);
  const navigate = useNavigate();

  const saveOrUpdateUser = async (userData) => {
    const { data } = await axios.post(
      `https://loanlink-inky.vercel.app/user`,
      userData
    );
    return data;
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target?.name?.value;
    const email = e.target?.email?.value;
    const image = e.target?.photURl?.value;
    const role = e.target?.role?.value.toLowerCase();
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
            saveOrUpdateUser({ name, email, image, role });
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
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 transition-colors duration-500">
      <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-xl p-8 border border-base-300">
        <div className="flex justify-center mb-6">
          <img
            src="https://e7.pngegg.com/pngimages/543/566/png-clipart-microfinance-saving-bank-loan-bank-saving-leaf.png"
            alt="LoanLink"
            className="h-20"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-base-content mb-6">
          Create Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photURl"
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Select Role</span>
            </label>
            <select
              className="select select-bordered w-full"
              name="role"
              required
            >
              <option value="borrower">Borrower</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="text-sm text-center text-base-content/70">
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
