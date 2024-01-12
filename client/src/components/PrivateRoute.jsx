import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export const PrivateRoute = () => {
  const { user } = useSelector((state) => state.user);
  return user ? <Outlet /> : <Navigate to="/signin" />;
};

export const PrivateRouteSuperAdmin = () => {
  const { user } = useSelector((state) => state.user);
  return user.isSuperAdmin ? <Outlet /> : "";
};
