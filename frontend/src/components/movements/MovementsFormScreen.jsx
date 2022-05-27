import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import useForm from "../../hooks/useForm";
import { startGetCategories } from "../../store/categories/categoryThunks";
import Alert from "../ui/Alert";

const TYPES = ["incomes", "expenses"];

const MovementsFormScreen = () => {
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    concept: "incomes",
    amount: "0",
    date: "",
    category: "",
    type: "incomes",
  });
  const { concept, amount, date, category, type } = formValues;

  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    handleGetCategories();
  }, []);

  const handleGetCategories = () => {
    dispatch(startGetCategories());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isFormValid());
  };

  const isFormValid = () => {
    if (!validator.isIn(type, TYPES)) {
      setError("Invalid movement type");
      return false;
    } else if (concept.trim().length === 0) {
      setError("Concept is required");
      return false;
    } else if (concept.trim().length < 2 || concept.trim().length > 32) {
      setError("Concept must be between 2-32 characters");
      return false;
    } else if (!validator.isNumeric(amount)) {
      setError("Amount must be a number");
      return false;
    } else if (amount == 0) {
      setError("Amount must be greater than 0");
      return false;
    } else if (!validator.isDate(date)) {
      setError("Date must be a valid date");
      return false;
    } else if (!categories.some((c) => c.id === +category)) {
      setError("Invalid category");
      return false;
    }
    setError();
    return true;
  };

  return (
    <section className="card movements-form">
      <div className="card__body">
        <h1 className="card__title">New movement</h1>
        <form className="form" onSubmit={handleSubmit}>
          {error && <Alert description={error} />}
          <div className="form__field">
            <label htmlFor="type" className="form__label">
              Movement type
            </label>
            <select
              className="form__input form__select"
              name="type"
              id="type"
              value={type}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select movement type
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
              {categories &&
                categories.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="form__buttons">
            <Link className="btn btn-dark-gray" to={"/movements"}>
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
export default MovementsFormScreen;
