import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
