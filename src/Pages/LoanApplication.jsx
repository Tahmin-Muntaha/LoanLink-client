import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const LoanApplication = () => {
    const navigate =useNavigate()
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { data: loan = {}, isLoading } = useQuery({
    queryKey: ["loan", id],
    queryFn: async () => {
      const res = await axios(`http://localhost:3000/details/${id}`);
      return res.data;
    },
  });

  const { title, interestRate, maxLoanLimit } = loan;
  const { isPending, isError, mutateAsync } = useMutation({
    mutationFn: async (payload) =>
      await axios.post("http://localhost:3000/applications", payload),
    onSuccess: () => {
      toast.success("Successful");
      navigate('/')
    },
    onError: () => {
      toast.error("Something went wrong");
    },
    retry: 3,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    
    const {
      address,
      amount,
      contact,
      email,
      extra,
      fname,
      lname,
      income,
      monthly,
      national,
      reason,
    } = data;
    const applicationData = {
      address,
      amount:Number(amount),
      contact,
      email,
      fname,
      lname,
      income,
      monthly: Number(monthly),
      national,
      reason,
      title,
      interestRate,
      extra,
      status: "pending",
      fee: "unpaid",
    };
    console.log(applicationData)
    await mutateAsync(applicationData)
  };

  return (
    <div>
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

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                User Email
              </label>
              <input
                name="email"
                type="email"
                defaultValue={user.email}
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register("email")}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Loan Title
              </label>
              <input
                name="title"
                type="text"
                defaultValue={title}
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register("title")}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Interest Rate
              </label>
              <input
                name="interestRate"
                type="text"
                defaultValue={interestRate}
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register("interestRate")}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                First Name
              </label>
              <input
                name="fname"
                type="text"
                placeholder="Enter your First Name"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register("fname")}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Last Name
              </label>
              <input
                name="lname"
                type="text"
                placeholder="Enter your Last Name"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register("lname")}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Contact No
              </label>
              <input
                name="contact"
                type="text"
                placeholder="Enter your Contact No."
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2"
                {...register("contact")}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                National Id/Passport Number
              </label>
              <input
                name="national"
                type="text"
                placeholder="Enter your National Id/Passport Number"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register("national")}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Income Source
              </label>
              <input
                name="income"
                type="text"
                placeholder="Enter your Income Source"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register("income")}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Monthly Income
              </label>
              <input
                name="monthly"
                type="text"
                placeholder="Enter your Monthly Income"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register("monthly")}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Loan Amount
              </label>
              <input
                name="amount"
                type="text"
                placeholder={`Enter your Loan Amount (max loan limit : ${maxLoanLimit})`}
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register("amount")}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Reason for Loan
              </label>
              <input
                name="reason"
                type="text"
                placeholder="Enter your Reason for Loan"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register("reason")}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Address
              </label>
              <input
                name="address"
                type="text"
                placeholder="Enter your Address"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register("address")}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Extra Notes
              </label>
              <input
                name="extra"
                type="text"
                placeholder="Enter your Extra Notes"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register("extra")}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1F7A6F] text-white py-2 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanApplication;
