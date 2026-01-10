import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
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
      <div className="min-h-screen bg-base-200 transition-colors duration-500 flex justify-center items-center">
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
    <div className="min-h-screen bg-base-200 transition-colors duration-500">
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="flex justify-center mb-6">
            <img
              src="https://e7.pngegg.com/pngimages/543/566/png-clipart-microfinance-saving-bank-loan-bank-saving-leaf.png"
              alt="LoanLink"
              className="h-20"
            />
          </div>

          <h2 className="text-2xl font-bold text-center text-base-content mb-6">
            Update Loan
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Loan Title</span>
              </label>
              <input
                defaultValue={loan.title}
                type="text"
                placeholder="Enter your loan title"
                className="input input-bordered w-full"
                {...register("title")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                defaultValue={loan.description}
                type="text"
                placeholder="Enter description"
                className="input input-bordered w-full"
                {...register("description")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                defaultValue={loan.category}
                type="text"
                placeholder="Enter Category"
                className="input input-bordered w-full"
                {...register("category")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Interest Rate</span>
              </label>
              <input
                defaultValue={loan.interestRate}
                type="text"
                placeholder="Enter Interest Rate"
                className="input input-bordered w-full"
                {...register("rate")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Max Loan Limit</span>
              </label>
              <input
                defaultValue={loan.maxLoanLimit}
                type="text"
                placeholder="Enter max loan limit"
                className="input input-bordered w-full"
                {...register("max")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Required Documents</span>
              </label>
              <input
                defaultValue={loan.requiredDocuments}
                type="text"
                placeholder="Enter required documents"
                className="input input-bordered w-full"
                {...register("documents")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">EMI Plans</span>
              </label>
              <input
                defaultValue={loan.emiPlans}
                type="text"
                placeholder="Enter EMI plans"
                className="input input-bordered w-full"
                {...register("emis")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Loan Image</span>
              </label>
              <input
                type="file"
                accept="image/*"
                className="file-input file-input-bordered w-full"
                {...register("img")}
              />
              <label className="label">
                <span className="label-text-alt text-base-content/60">PNG, JPG or JPEG (max 2MB)</span>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Show on Home</span>
              </label>
              <select 
                className="select select-bordered w-full" 
                defaultValue={loan.showOnHome ? "Yes" : "No"}
                {...register("showOnHome")}
              >
                <option value="">Select option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1F7A6F] text-white py-2 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300"
              disabled={updateMutation.isPending}
            >
              {updateMutation.isPending ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Update Loan"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateLoan;
