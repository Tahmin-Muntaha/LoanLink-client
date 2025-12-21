import React from 'react';
import { Navigate, Outlet } from 'react-router';
import useRole from '../providers/useRole';

const RoleRoute = ({ allowedRoles,children }) => {
  const { role } = useRole();

  if (allowedRoles.includes(role)) {
    return  children; 
  } else {
    return <Navigate to="/dashboard" replace />; 
  }
};

export default RoleRoute;
