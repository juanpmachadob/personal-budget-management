import { Link } from "react-router-dom";
import validator from "validator";
import useForm from "../../hooks/useForm";

const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(isFormValid());
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      return false;
    } else if (name.trim().length > 32) {
      return false;
    } else if (!validator.isEmail(email)) {
      return false;
    } else if (
      !validator.isStrongPassword(password.toString()) ||
      password.length > 32
    ) {
      return false;
    } else if (password !== password2) {
      return false;
    }
    return true;
  };

  return (
    <section className="card auth">
      <div className="card__row">
        <div className="card__body">
          <h1 className="card__title">Create account</h1>
          <form className="form" onSubmit={handleLogin}>
            <div className="form__field">
              <label htmlFor="name" className="form__label">
                Name
              </label>
              <input
                className="form__input"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleInputChange}
              />
            </div>
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
            <div className="form__field">
              <label htmlFor="password2" className="form__label">
                Password confirmation
              </label>
              <input
                className="form__input"
                type="password"
                name="password2"
                id="password2"
                value={password2}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn btn-green" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="card__row card__row--colored">
        <div className="card__body">
          <h2 className="card__subtitle">Welcome back!</h2>
          <p className="card__description">
            To keep connected with us, please login
          </p>
          <Link className="btn btn-green--outline" to={"/auth/login"}>
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};
export default RegisterScreen;
