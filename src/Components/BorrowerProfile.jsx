import React, { useContext, useEffect } from 'react';
import useRole from '../providers/useRole';
import { AuthContext } from '../providers/AuthContext';
import { LogOut } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { Navigate, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const BorrowerProfile = () => {
  useEffect(() => {
    document.title = "LoanLink - Profile";
  }, []); 
    const navigate= useNavigate()
    const {user,setUser}=useContext(AuthContext)
    console.log(user)
    const {displayName,email,photoURL}=user
    const {role,isLoading}=useRole()

    const handleLogOut=(e)=>{
        e.preventDefault()
        signOut(auth)
        .then(res=>{
          setUser(null)
          navigate('/')
          toast.success('Log Out Successful')
        })
        .catch(err=>{
          toast.error(err.message)
        })
    }

    if(isLoading) return <div className="flex justify-center">
        <div>
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-xl"></span>
        </div>
      </div>

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
                
                <img 
                  src={photoURL} 
                  className="w-28 h-28 mx-auto rounded-full object-cover ring-4 ring-blue-100 mb-4"
                />

                <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-1">
                  {role}
                </p>

                <p className="text-xl font-bold text-gray-800">
                  {displayName}
                </p>

                <p className="text-gray-500 text-sm mb-6">
                  {email}
                </p>

                <button
  type="button"
  onClick={handleLogOut}
  className="w-full bg-[#1F7A6F] text-white py-3 rounded-xl font-semibold hover:bg-[#16675E] transition duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-[0.98]"
>
  <LogOut size={18} />
  <span>Logout</span>
</button>


            </div>
        </div>
    );
};

export default BorrowerProfile;
