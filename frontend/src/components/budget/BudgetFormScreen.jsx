import { Link } from "react-router-dom";
import validator from "validator";
import useForm from "../../hooks/useForm";

const TYPES = ["Income", "Expense"];
const CATEGORIES = ["Food", "Other"];

const BudgetFormScreen = () => {
  const [formValues, handleInputChange] = useForm({
    concept: "",
    amount: "",
    date: "",
    category: "",
    type: "",
  });
  const { concept, amount, date, category, type } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isFormValid());
  };

  const isFormValid = () => {
    if (!validator.isIn(type, TYPES)) {
      return false;
    } else if (concept.trim().length === 0) {
      return false;
    } else if (concept.trim().length > 32) {
      return false;
    } else if (!validator.isNumeric(amount)) {
      return false;
    } else if (amount === 0) {
      return false;
    } else if (!validator.isDate(date)) {
      return false;
    } else if (!validator.isIn(category, CATEGORIES)) {
      return false;
    }
    return true;
  };

  return (
    <section className="card budget-form">
      <div className="card__body">
        <h1 className="card__title">
          New {TYPES.includes(type) ? type.toLowerCase() : "entry"}
        </h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__field">
            <label htmlFor="type" className="form__label">
              Type
            </label>
            <select
              className="form__input form__select"
              name="type"
              id="type"
              value={type}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select entry type
              </option>
              {TYPES.map((t, index) => {
                return (
                  <option key={index} value={t}>
                    {t}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form__field">
            <label htmlFor="concept" className="form__label">
              Concept
            </label>
            <input
              className="form__input"
              type="text"
              name="concept"
              id="concept"
              value={concept}
              onChange={handleInputChange}
            />
          </div>
          <div className="form__field">
            <label htmlFor="amount" className="form__label">
              Amount
            </label>
            <input
              className="form__input"
              type="number"
              name="amount"
              id="amount"
              value={amount}
              onChange={handleInputChange}
            />
          </div>
          <div className="form__field">
            <label htmlFor="date" className="form__label">
              Date
            </label>
            <input
              className="form__input"
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={handleInputChange}
            />
          </div>
          <div className="form__field">
            <label htmlFor="category" className="form__label">
              Category
            </label>
            <select
              className="form__input form__select"
              name="category"
              id="category"
              value={category}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select category
              </option>
              {CATEGORIES.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form__buttons">
            <Link className="btn btn-dark-gray" to={"/budget"}>
              Back
            </Link>
            <button className="btn btn-green" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default BudgetFormScreen;
