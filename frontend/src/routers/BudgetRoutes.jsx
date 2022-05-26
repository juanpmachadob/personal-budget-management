import { Navigate, Route, Routes } from "react-router-dom";
import BudgetFormScreen from "../components/budget/BudgetFormScreen";
import BudgetScreen from "../components/budget/BudgetScreen";


const BudgetRouter = () => {
  return (
    <Routes>
      <Route path="budget" element={<BudgetScreen />} />
      <Route path="budget/create" element={<BudgetFormScreen />} />

      <Route path="/*" element={<Navigate replace to="/budget" />} />
    </Routes>
  );
};
export default BudgetRouter;
