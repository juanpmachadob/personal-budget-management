const MovementsControls = () => {
  return (
    <div className="movements__controls">
      <input
        className="form__input form__input--inline form__search"
        type="search"
        name="search"
        id="search"
        placeholder="Search..."
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
