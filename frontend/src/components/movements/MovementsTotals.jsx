const MovementsTotals = () => {
  return (
    <div className="movements__totals">
      <div className="movements__total-card movements__total-card--general">
        <span className="movements__total-title">Total</span>
        <span className="movements__total-amount">$7500</span>
      </div>
      <div className="movements__total-card movements__total-card--incomes">
        <span className="movements__total-title">Incomes</span>
        <span className="movements__total-amount">$5000</span>
      </div>
      <div className="movements__total-card movements__total-card--expenses">
        <span className="movements__total-title">Expenses</span>
        <span className="movements__total-amount">$2500</span>
      </div>
    </div>
  );
};
export default MovementsTotals;
