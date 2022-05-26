import { Navigate } from "react-router-dom";

const PublicRoute = ({ isAuth, children }) => {
  return isAuth ? <Navigate to="/movements" /> : children;
};

export default PublicRoute;
