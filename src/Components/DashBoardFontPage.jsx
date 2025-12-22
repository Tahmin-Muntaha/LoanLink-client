import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../providers/AuthContext'

const DashBoardFontPage = () => {
  const { user } = useContext(AuthContext)
  useEffect(() => {
    document.title = "LoanLink - Dashboard";
  }, []); 

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#F9FAFB] px-4">
      <div className="max-w-2xl text-center space-y-6">

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1F2937]">
          Welcome back,
          <span className="text-[#1F7A6F]"> {user?.displayName || 'User'}</span>
        </h1>

        <p className="text-gray-600 text-base sm:text-lg">
          You’ve successfully entered your dashboard
        </p>

        <div className="w-16 h-1 bg-[#1F7A6F] mx-auto rounded-full"></div>

        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          From here, you can manage your activities, review information,
          and continue where you left off using the dashboard menu.
        </p>

      </div>
    </div>
  )
}

export default DashBoardFontPage
