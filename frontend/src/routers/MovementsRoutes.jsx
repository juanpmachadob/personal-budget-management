import { Navigate, Route, Routes } from "react-router-dom";
import MovementsCreateFormScreen from "../components/movements/MovementsCreateFormScreen";
import MovementsEditFormScreen from "../components/movements/MovementsEditFormScreen";
import MovementsScreen from "../components/movements/MovementsScreen";


const MovementsRouter = () => {
  return (
    <Routes>
      <Route path="movements" element={<MovementsScreen />} />
      <Route path="movements/create" element={<MovementsCreateFormScreen />} />
      <Route path="movements/:id/edit" element={<MovementsEditFormScreen />} />

      <Route path="/*" element={<Navigate replace to="/movements" />} />
    </Routes>
  );
};
export default MovementsRouter;
