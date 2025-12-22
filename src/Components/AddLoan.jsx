import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { AuthContext } from '../providers/AuthContext';

const AddLoan = () => {
  const {user}=useContext(AuthContext)
  const navigate=useNavigate()
  const imageUpload=async imageDate=>{
    const formData=new FormData()
    formData.append("image",imageDate)
    const {data}=await axios.post(`https://api.imgbb.com/1/upload?key=3203a753f468a5408a8b9148365c2fc7`,
      formData
    )
      return data?.data?.display_url
    
}
const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    
    const setMutation=useMutation({
    mutationFn:async(Data)=>{
        const res=await axios.post(`http://localhost:3000/loans`,Data)
        return res.data
    },
    onSuccess:()=>{
        toast.success('Updated Successfully')
        navigate(-1)
    }
  })
  const onSubmit=async(data)=>{
    console.log(data)
    const {title,description,category,interestRate,maxLoanLimit,emiPlans,requiredDocuments,image,showOnHome}=data

    
    
        const imageFile=image[0]
        const imageURL=await imageUpload(imageFile)
    
    const LoanData={
        title,
        description,
        category,
        interestRate:Number(interestRate),
        maxLoanLimit:Number(maxLoanLimit),
        emiPlans,
        requiredDocuments,
        image:imageURL,
        showOnHome:showOnHome==='Yes'?true:false,
        createdBy:user.displayName,
        createdAt:new Date()





    }
    setMutation.mutate(LoanData)
  }
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
           Add Loan
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Laon Title
              </label>
              <input
                
                type="text"
                placeholder='Enter your loan title'
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register('title')}
                
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Description
              </label>
              <input
                
                type="text"
                placeholder='Enter description'
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register('description')}
                
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Category
              </label>
              <input
                
                type="text"
               placeholder='Enter Category'
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register('category')}
                
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Interest Rate
              </label>
              <input
                
                type="text"
                placeholder="Enter Interest Rate"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register('interestRate')}
               
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
               Max Loan Limit
              </label>
              <input
               
                type="text"
                placeholder="Enter max loan limit"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register('maxLoanLimit')}
               
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Required Docmunets
              </label>
              <input
                type="text"
                placeholder="Enter required documents."
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2"
                {...register('requiredDocuments')}
                
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                EMI Plans
              </label>
              <input
                name="national"
                type="text"
                placeholder="Enter your National Id/Passport Number"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register('emiPlans')}
               
              />
            

              <label
                htmlFor='image'
                className='block mb-2 text-sm font-medium text-gray-700'
              >
                Profile Image
              </label>
              <input
                name='image'
                type='file'
                id='image'
                accept='image/*'
                className='block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-lime-50 file:text-lime-700
      hover:file:bg-lime-100
      bg-gray-100 border border-dashed border-lime-300 rounded-md cursor-pointer
      focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400
      py-2'
      {...register('image')}
      
              />
              <p className='mt-1 text-xs text-gray-400'>
                PNG, JPG or JPEG (max 2MB)
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280]">
                Show on Home
              </label>
              <input
               
                type="text"
                placeholder="Yes or No"
                className="w-full mt-1 border border-[#E5E7EB] rounded-lg px-3 py-2 "
                {...register('showOnHome')}
               
              />
            </div>
            
           
           
            
            <button
              type="submit"
              className="w-full bg-[#1F7A6F] text-white py-2 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300"
            >
              Add Loan
            </button>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AddLoan;