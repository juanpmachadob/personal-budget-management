import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AuthRouter from "./AuthRouter";
import BudgetScreen from "../components/budget/BudgetScreen";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <PublicRoute isAuth={false}>
              <AuthRouter />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute isAuth={false}>
              <BudgetScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};
export default AppRouter;
