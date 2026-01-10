import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import useRole from '../providers/useRole';

const Dashboard = () => {
  const { role } = useRole();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 overflow-hidden">

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#1F7A6F] text-white px-3 py-2 rounded"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed md:static z-40
          min-h-screen w-60 bg-white shadow-md p-6 flex flex-col gap-6
          transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >

        <NavLink to="/dashboard">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
        </NavLink>

        {/* ADMIN */}
        {(role === 'admin') && (
          <>
            <NavLink to="manage-users" className={({ isActive }) =>
              isActive
                ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
                : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
            }>
              Manage Users
            </NavLink>

            <NavLink to="all-loan" className={({ isActive }) =>
              isActive
                ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
                : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
            }>
              All Loan
            </NavLink>

            <NavLink to="loan-application" className={({ isActive }) =>
              isActive
                ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
                : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
            }>
              Loan Applications
            </NavLink>
          </>
        )}

        {/* MANAGER */}
        {role === 'manager' && (
          <>
            <NavLink to="add-loan" className={({ isActive }) =>
              isActive
                ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
                : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
            }>
              Add Loan
            </NavLink>

            <NavLink to="manage-loans" className={({ isActive }) =>
              isActive
                ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
                : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
            }>
              Manage Loans
            </NavLink>

            <NavLink to="pending-loans" className={({ isActive }) =>
              isActive
                ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
                : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
            }>
              Pending Loans
            </NavLink>

            <NavLink to="approved-loans" className={({ isActive }) =>
              isActive
                ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
                : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
            }>
              Approved Loans
            </NavLink>

            <NavLink to="profile" className={({ isActive }) =>
              isActive
                ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
                : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
            }>
              Profile
            </NavLink>
          </>
        )}

        {/* BORROWER */}
        {role === "Borrower" && (
          <>
            <NavLink to="my-loans" className={({ isActive }) =>
              isActive
                ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
                : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
            }>
              My Loans
            </NavLink>

            <NavLink to="profile" className={({ isActive }) =>
              isActive
                ? "text-lg font-semibold text-[#1F7A6F] border-l-4 border-[#1F7A6F] pl-3"
                : "text-lg text-gray-700 hover:text-[#1F7A6F] pl-3"
            }>
              Profile
            </NavLink>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
