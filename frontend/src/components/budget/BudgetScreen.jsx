import { Link } from "react-router-dom";
import BudgetControls from "./BudgetControls";
import BudgetItem from "./BudgetItem";
import BudgetTotals from "./BudgetTotals";

const BudgetScreen = () => {
  return (
    <>
      <div className="card budget">
        <div className="budget__header">
          <span className="budget__title">Movements</span>
          <Link className="btn btn-green" to={"/budget/create"}>
            New movement
          </Link>
        </div>
        <BudgetTotals />
        <BudgetControls />
        <div className="budget__body">
          <table className="table">
            <thead className="table__head">
              <tr className="table__row">
                <th className="table__header">Concept</th>
                <th className="table__header">Amount</th>
                <th className="table__header">Date</th>
                <th className="table__header">Category</th>
                <th className="table__header">Options</th>
              </tr>
            </thead>
            <tbody className="table__body">
              <BudgetItem />
              <BudgetItem />
              <BudgetItem />
              <BudgetItem />
              <BudgetItem />
              <BudgetItem />
              <BudgetItem />
              <BudgetItem />
              <BudgetItem />
              <BudgetItem />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default BudgetScreen;
