import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AuthRouter from "./AuthRouter";
import BudgetRouter from "./BudgetRouter";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoute isAuth={true}>
              <AuthRouter />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute isAuth={true}>
              <BudgetRouter />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};
export default AppRouter;
