import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location=useLocation()

  if (loading) return <div className="flex justify-center">
        <div>
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-xl"></span>
        </div>
      </div>;

  if (!user) return <Navigate to="/login" state={{from:location}} replace ></Navigate>;
  
  return children;
};

export default PrivateRoute;
