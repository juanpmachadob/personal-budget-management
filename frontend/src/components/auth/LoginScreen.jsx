import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import validator from "validator";
import useForm from "../../hooks/useForm";
import { startLogin } from "../../store/auth/authThunks";
import { useState } from "react";
import Alert from "../ui/Alert";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [formValues, handleInputChange] = useForm({
    email: "juan@test.com",
    password: "Aabc123.Aabc123.Aabc123.Aabc123.",
  });
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLogin(email, password));
    }
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      setError("Invalid email");
      return false;
    } else if (password.trim().length === 0) {
      setError("Password is required");
      return false;
    }
    setError();
    return true;
  };

  return (
    <section className="card card--inverse auth">
      <div className="card__row">
        <div className="card__body">
          <h1 className="card__title">Login</h1>
          <form className="form" onSubmit={handleLogin}>
            {error && <Alert description={error} />}
            <div className="form__field">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                className="form__input"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form__field">
              <label htmlFor="password" className="form__label">
                Password
              </label>
              <input
                className="form__input"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn btn-green" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="card__row card__row--colored">
        <div className="card__body">
          <h2 className="card__subtitle">Hello friend!</h2>
          <p className="card__description">
            Create an account and get started with us
          </p>
          <Link className="btn btn-green--outline" to={"/auth/register"}>
            Create account
          </Link>
        </div>
      </div>
    </section>
  );
};
export default LoginScreen;
