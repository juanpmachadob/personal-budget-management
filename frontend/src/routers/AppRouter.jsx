import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AuthRoutes from "./AuthRoutes";
import MovementsRoutes from "./MovementsRoutes";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoute isAuth={true}>
              <AuthRoutes />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute isAuth={true}>
              <MovementsRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};
export default AppRouter;
