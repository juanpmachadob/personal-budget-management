import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startCheckCredentials } from "../store/auth/authThunks";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AuthRoutes from "./AuthRoutes";
import MovementsRoutes from "./MovementsRoutes";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, user } = useSelector((state) => state.auth);
  
  useEffect(() => {
    dispatch(startCheckCredentials());
  }, []);
  
  if (checking){
    return <h1>Loading...</h1>
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoute isAuth={!!user?.id}>
              <AuthRoutes />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute isAuth={!!user?.id}>
              <MovementsRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};
export default AppRouter;
