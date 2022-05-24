import { Navigate, Route, Routes } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";

const AuthRouter = () => {
  return (
    <main className="content">
      <Routes>
        <Route path="/auth/register" element={<RegisterScreen />} />
        <Route path="/auth/login" element={<LoginScreen />} />

        <Route path="*" element={<Navigate replace to="/auth/login" />} />
      </Routes>
    </main>
  );
};
export default AuthRouter;
