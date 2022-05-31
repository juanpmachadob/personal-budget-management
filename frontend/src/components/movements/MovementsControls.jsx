import { useDispatch } from "react-redux";
import useForm from "../../hooks/useForm";
import { startGetMovements, startSearchMovements } from "../../store/movements/movementThunks";

let timeoutSearch = null;

const MovementsControls = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    searchTerm: "",
  });
  const { searchTerm } = formValues;

  const handleTimeout = () => {
    clearTimeout(timeoutSearch);
    timeoutSearch = setTimeout(handleSearch, 500);
  };
  //TODO: Search paginator
  const handleSearch = () => {
    if (searchTerm.trim().length === 0) {
      dispatch(startGetMovements());
    } else {
      dispatch(startSearchMovements(searchTerm));
    }
  };

  return (
    <div className="movements__controls">
      <input
        className="form__input form__input--inline form__search"
        type="search"
        name="searchTerm"
        id="searchTerm"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyUp={handleTimeout}
      />
      <select
        className="form__input form__input--inline form__select"
        name="sort"
        id="sort"
        defaultValue="default"
      >
        <option value="default" disabled>
          Filter by
        </option>
        <option value="category">Category</option>
        <option value="amount">Amount</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
};
export default MovementsControls;
