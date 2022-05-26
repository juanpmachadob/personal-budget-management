import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AuthRoutes from "./AuthRoutes";
import BudgetRoutes from "./BudgetRoutes";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoute isAuth={false}>
              <AuthRoutes />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute isAuth={false}>
              <BudgetRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};
export default AppRouter;
