const BudgetTotals = () => {
  return (
    <div className="budget__totals">
      <div className="budget__total-card budget__total-card--general">
        <span className="budget__total-title">Total</span>
        <span className="budget__total-amount">$7500</span>
      </div>
      <div className="budget__total-card budget__total-card--incomes">
        <span className="budget__total-title">Incomes</span>
        <span className="budget__total-amount">$5000</span>
      </div>
      <div className="budget__total-card budget__total-card--expenses">
        <span className="budget__total-title">Expenses</span>
        <span className="budget__total-amount">$2500</span>
      </div>
    </div>
  );
};
export default BudgetTotals;
