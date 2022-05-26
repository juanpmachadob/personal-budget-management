import { Link } from "react-router-dom";
import MovementsControls from "./MovementsControls";
import MovementsItem from "./MovementsItem";
import MovementsTotals from "./MovementsTotals";

const MovementsScreen = () => {
  return (
    <>
      <div className="card movements">
        <div className="movements__header">
          <span className="movements__title">Movements</span>
          <Link className="btn btn-green" to={"/movements/create"}>
            New movement
          </Link>
        </div>
        <MovementsTotals />
        <MovementsControls />
        <div className="movements__body">
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
              <MovementsItem />
              <MovementsItem />
              <MovementsItem />
              <MovementsItem />
              <MovementsItem />
              <MovementsItem />
              <MovementsItem />
              <MovementsItem />
              <MovementsItem />
              <MovementsItem />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default MovementsScreen;
