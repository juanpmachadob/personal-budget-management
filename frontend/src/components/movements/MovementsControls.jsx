import { useSearchParams } from "react-router-dom";
import useForm from "../../hooks/useForm";

let timeoutSearch = null;

const MovementsControls = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [formValues, handleInputChange] = useForm({
    searchTerm: "",
  });
  const { searchTerm } = formValues;

  const handleTimeout = () => {
    clearTimeout(timeoutSearch);
    timeoutSearch = setTimeout(handleSearch, 500);
  };

  const handleSearch = () => {
    if (searchTerm.trim().length > 0) {
      setSearchParams({ search: searchTerm });
    } else {
      searchParams.delete("search");
      setSearchParams(searchParams);
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
