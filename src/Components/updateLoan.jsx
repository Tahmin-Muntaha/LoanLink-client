import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

const UpdateLoan = () => {
  useEffect(() => {
    document.title = "LoanLink - Update Loans";
  }, []);
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: loan = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["loan", id],
    queryFn: async () => {
      const res = await axios(`https://loanlink-inky.vercel.app/details/${id}`);
      return res.data;
    },
  });
  const imageUpload = async (imageDate) => {
    const formData = new FormData();
    formData.append("image", imageDate);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=3203a753f468a5408a8b9148365c2fc7`,
      formData
    );
    return data?.data?.display_url;
  };
  const { image, createdBy, createdAt } = loan;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const updateMutation = useMutation({
    mutationFn: async (updateData) => {
      const res = await axios.put(
        `https://loanlink-inky.vercel.app/details/${id}`,
        updateData
      );
      return res.data;
    },
    onSuccess: () => {
      toast.success("Updated Successfully");
      navigate(-1);
    },
    onError:(err)=>{
      toast.error(err.message)
    }
  });
  const onSubmit = async (data) => {
    console.log(data);
    const {
      description,
      documents,
      max,
      rate,
      title,
      showOnHome,
      category,
      emis,
      img,
    } = data;

    let imageURL = image;
    if (img && img.length > 0 && img[0] instanceof File) {
      const imageFile = img[0];
      imageURL = await imageUpload(imageFile);
    }
    const LoanData = {
      title,
      description,
      category,
      interestRate: Number(rate),
      maxLoanLimit: Number(max),
      emiPlans: emis,
      requiredDocuments: documents,
      image: imageURL,
      showOnHome: showOnHome.toLowerCase() === "yes"?true : false,
      createdBy,
      createdAt,
    };
    updateMutation.mutate(LoanData);
  };

  if (isLoading)
    return (
      <div className="flex justify-center">
        <div>
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-xl"></span>
        </div>
      </div>
    );
  return (
    <div>
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
              Update Loan
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="text-sm font-medium text-[#6B7280]">
                  Laon Title
                </label>
                <input
                  defaultValue={loan.title}
                  type="text"
                  placeholder="Enter your loan title"
                  className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                  {...register("title")}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#6B7280]">
                  Description
                </label>
                <input
                  defaultValue={loan.description}
                  type="text"
                  placeholder="Enter description"
                  className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                  {...register("description")}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#6B7280]">
                  Category
                </label>
                <input
                  defaultValue={loan.category}
                  type="text"
                  placeholder="Enter Category"
                  className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                  {...register("category")}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#6B7280]">
                  Interest Rate
                </label>
                <input
                  defaultValue={loan.interestRate}
                  type="text"
                  placeholder="Enter Interest Rate"
                  className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                  {...register("rate")}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#6B7280]">
                  Max Loan Limit
                </label>
                <input
                  defaultValue={loan.maxLoanLimit}
                  type="text"
                  placeholder="Enter max loan limit"
                  className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                  {...register("max")}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#6B7280]">
                  Required Documents
                </label>
                <input
                  defaultValue={loan.requiredDocuments}
                  type="text"
                  placeholder="Enter required documents."
                  className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2"
                  {...register("documents")}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#6B7280]">
                  EMI Plans
                </label>
                <input
                  defaultValue={loan.emiPlans}
                  name="national"
                  type="text"
                  placeholder="Enter your National Id/Passport Number"
                  className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                  {...register("emis")}
                />
                <div></div>

                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Loan Image
                </label>
                <input
                  name="image"
                  type="file"
                  id="image"
                  accept="image/*"
                  className="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-lime-50 file:text-lime-700
      hover:file:bg-lime-100
      bg-gray-100 border border-dashed border-lime-300 rounded-md cursor-pointer
      focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400
      py-2"
                  {...register("img")}
                />
                <p className="mt-1 text-xs text-gray-400">
                  PNG, JPG or JPEG (max 2MB)
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-[#6B7280]">
                  Show on Home
                </label>
                <input
                  defaultValue={loan.showOnHome ? "Yes" : "No"}
                  type="text"
                  placeholder="Yes or No"
                  className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                  {...register("showOnHome")}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1F7A6F] text-white py-2 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300"
              >
                Update Loan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateLoan;
