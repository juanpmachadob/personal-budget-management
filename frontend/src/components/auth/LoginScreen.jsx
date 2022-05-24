import { Link } from "react-router-dom";
import validator from "validator";
import useForm from "../../hooks/useForm";

const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(isFormValid());
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      return false;
    } else if (password.trim().length === 0) {
      return false;
    }
    return true;
  };

  return (
    <section className="card card--inverse">
      <div className="card__row">
        <div className="card__body">
          <h1 className="card__title">Login</h1>
          <form className="form" onSubmit={handleLogin}>
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
