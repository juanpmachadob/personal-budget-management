import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetTotals } from "../../store/movements/movementThunks";

const MovementsTotals = () => {
  const dispatch = useDispatch();

  const { totals } = useSelector((state) => state.movement);

  useEffect(() => {
    dispatch(startGetTotals());
  }, []);

  return (
    <div className="movements__totals">
      <div className="movements__total-card movements__total-card--general">
        <span className="movements__total-title">Total</span>
        <span className="movements__total-amount">${totals?.general}</span>
      </div>
      <div className="movements__total-card movements__total-card--incomes">
        <span className="movements__total-title">Incomes</span>
        <span className="movements__total-amount">${totals?.incomes}</span>
      </div>
      <div className="movements__total-card movements__total-card--expenses">
        <span className="movements__total-title">Expenses</span>
        <span className="movements__total-amount">${totals?.expenses}</span>
      </div>
    </div>
  );
};
export default MovementsTotals;
