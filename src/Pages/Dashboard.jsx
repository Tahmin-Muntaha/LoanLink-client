import React from 'react';
import { NavLink, Outlet } from 'react-router';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 overflow-hidden">
  
  <div className="w-60 bg-white shadow-md p-6 flex flex-col gap-6">
    <NavLink to='/dashboard'>
        <h2 className="text-2xl font-semibold text-gray-800" >Dashboard</h2>
    </NavLink>
    <NavLink
      to="/dashboard/manage-users"
      className={({ isActive }) =>
        isActive
          ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
          : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
      }
    >
      Manage Users
    </NavLink>
    <NavLink
      to="/dashboard/all-loan"
      className={({ isActive }) =>
        isActive
          ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
          : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
      }
    >
      All Loan
    </NavLink>
    <NavLink
      to="/dashboard/loan-application"
      className={({ isActive }) =>
        isActive
          ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
          : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
      }
    >
      Loan Applications
    </NavLink>
    <NavLink
      to="/dashboard/add-loan"
      className={({ isActive }) =>
        isActive
          ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
          : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
      }
    >
      Add Loan
    </NavLink>
    <NavLink
      to="/dashboard/manage-loans"
      className={({ isActive }) =>
        isActive
          ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
          : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
      }
    >
      Manage Loans
    </NavLink>
    <NavLink
      to="/dashboard/pending-loans"
      className={({ isActive }) =>
        isActive
          ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
          : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
      }
    >
      Pendig Loans
    </NavLink>
    <NavLink
      to="/dashboard/approved-loans"
      className={({ isActive }) =>
        isActive
          ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
          : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
      }
    >
      Approved Loans
    </NavLink>
    <NavLink
      to="/dashboard/manager-profile"
      className={({ isActive }) =>
        isActive
          ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
          : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
      }
    >
      Manger Profile
    </NavLink>
    <NavLink
      to="/dashboard/my-loans"
      className={({ isActive }) =>
        isActive
          ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
          : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
      }
    >
      My Loans
    </NavLink>
     <NavLink
      to="/dashboard/borrower-profile"
      className={({ isActive }) =>
        isActive
          ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
          : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
      }
    >
      Approved Loans
    </NavLink>
  </div>

  
  <div className="flex-1  p-6 overflow-hidden">
    <Outlet />
  </div>
</div>

  );
};

export default Dashboard;
