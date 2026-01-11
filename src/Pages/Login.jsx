import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";
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
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 transition-colors duration-500">
      <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-xl p-6 border border-base-300">
        <div className="flex justify-center mb-6">
          <img
            src="https://e7.pngegg.com/pngimages/543/566/png-clipart-microfinance-saving-bank-loan-bank-saving-leaf.png"
            alt="LoanLink"
            className="h-20"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-base-content mb-6">
          Log In to Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleLogIn}>
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
              defaultValue="tahminmuntaha@gmail.com"
            />
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
              defaultValue="123456Qw"
            />
          </div>
          <div className="text-xs text-[#1F7A6F]">
            <p>Want to know admin activities?Login with default credentials</p>
          <p>Want to know manager activities?Use this credentials</p>
          <p>Email : pu12@gmail.com</p>
          <p>Password : 1234Qw</p>
          <p>Want to know borrower activities?Use this credentials</p>
          <p>Email : tahminmuntaha66@gmail.com</p>
          <p>Password : 1234Qw</p>
          </div>
          <div className="text-sm text-center text-base-content/70">
            New in our website?{" "}
            <NavLink
              to="/register"
              className="text-[#1F7A6F] font-medium hover:underline"
            >
              Register
            </NavLink>
          </div>

          <div className="text-sm text-center text-base-content/70">
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
