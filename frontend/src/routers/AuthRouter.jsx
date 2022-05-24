import { Navigate, Route, Routes } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";

const AuthRouter = () => {
  console.log("ok")
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      <Route path="/*" element={<Navigate replace to="/auth/login" />} />
    </Routes>
  );
};
export default AuthRouter;
