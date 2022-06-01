import { useSearchParams } from "react-router-dom";
import useForm from "../../hooks/useForm";

let timeoutSearch = null;

const MovementsControls = ({ filter, setFilter }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [formValues, handleInputChange, reset] = useForm({
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

  const handleFilterChange = ({ target }) => {
    setFilter(target.value);

    reset({ searchTerm: "" });
    searchParams.delete("search");
    setSearchParams(searchParams);
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
        name="filter"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
      >
        <option disabled>Filter by...</option>
        <option value="all">All</option>
        <option value="incomes">Incomes</option>
        <option value="expenses">Expenses</option>
      </select>
    </div>
  );
};
export default MovementsControls;
