import { Navigate, Route, Routes } from "react-router-dom";
import MovementsFormScreen from "../components/movements/MovementsFormScreen";
import MovementsScreen from "../components/movements/MovementsScreen";


const MovementsRouter = () => {
  return (
    <Routes>
      <Route path="movements" element={<MovementsScreen />} />
      <Route path="movements/create" element={<MovementsFormScreen />} />

      <Route path="/*" element={<Navigate replace to="/movements" />} />
    </Routes>
  );
};
export default MovementsRouter;
