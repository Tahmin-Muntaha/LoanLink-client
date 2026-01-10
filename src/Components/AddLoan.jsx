import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthContext";

const AddLoan = () => {
  useEffect(() => {
    document.title = "LoanLink - Add Loans";
  }, []);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const imageUpload = async (imageDate) => {
    const formData = new FormData();
    formData.append("image", imageDate);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=3203a753f468a5408a8b9148365c2fc7`,
      formData
    );
    return data?.data?.display_url;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const setMutation = useMutation({
    mutationFn: async (Data) => {
      const res = await axios.post(
        `https://loanlink-inky.vercel.app/loans`,
        Data
      );
      return res.data;
    },
    onSuccess: () => {
      toast.success("Added Successfully");
      navigate(-1);
    },
    onError:(err)=>{
      toast.success(err.message)

    }
  });
  const onSubmit = async (data) => {
    console.log(data);
    const {
      title,
      description,
      category,
      interestRate,
      maxLoanLimit,
      emiPlans,
      requiredDocuments,
      image,
      showOnHome,
    } = data;

    const imageFile = image[0];
    const imageURL = await imageUpload(imageFile);

    const LoanData = {
      title,
      description,
      category,
      interestRate: Number(interestRate),
      maxLoanLimit: Number(maxLoanLimit),
      emiPlans,
      requiredDocuments,
      image: imageURL,
      showOnHome: showOnHome.toLowerCase() === "yes" ? true : false,
      createdBy: user.email,
      createdAt: new Date(),
    };
    setMutation.mutate(LoanData);
  };
  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-500">
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-xl p-8">
          <div className="flex justify-center mb-6">
            <img
              src="https://e7.pngegg.com/pngimages/543/566/png-clipart-microfinance-saving-bank-loan-bank-saving-leaf.png"
              alt="LoanLink"
              className="h-20"
            />
          </div>

          <h2 className="text-2xl font-bold text-center text-base-content mb-6">
            Add Loan
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Loan Title</span>
              </label>
              <input
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
                type="text"
                placeholder="Enter Interest Rate"
                className="input input-bordered w-full"
                {...register("interestRate")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Max Loan Limit</span>
              </label>
              <input
                type="text"
                placeholder="Enter max loan limit"
                className="input input-bordered w-full"
                {...register("maxLoanLimit")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Required Documents</span>
              </label>
              <input
                type="text"
                placeholder="Enter required documents"
                className="input input-bordered w-full"
                {...register("requiredDocuments")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">EMI Plans</span>
              </label>
              <input
                type="text"
                placeholder="Enter EMI plans"
                className="input input-bordered w-full"
                {...register("emiPlans")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Image</span>
              </label>
              <input
                type="file"
                accept="image/*"
                className="file-input file-input-bordered w-full"
                {...register("image")}
              />
              <label className="label">
                <span className="label-text-alt text-base-content/60">PNG, JPG or JPEG (max 2MB)</span>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Show on Home</span>
              </label>
              <select className="select select-bordered w-full" {...register("showOnHome")}>
                <option value="">Select option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1F7A6F] text-white py-2 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300"
              disabled={setMutation.isPending}
            >
              {setMutation.isPending ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Add Loan"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLoan;
