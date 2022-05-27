import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startGetMovements } from "../../store/movements/movementThunks";
import MovementsControls from "./MovementsControls";
import MovementsItem from "./MovementsItem";
import MovementsItemEmpty from "./MovementsItemEmpty";
import MovementsTotals from "./MovementsTotals";

const MovementsScreen = () => {
  const dispatch = useDispatch();

  const { movements } = useSelector((state) => state.movement);

  useEffect(() => {
    dispatch(startGetMovements());
  }, []);

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
                <th className="table__header">Date</th>
                <th className="table__header">Amount</th>
                <th className="table__header">Type</th>
                <th className="table__header">Category</th>
                <th className="table__header">Options</th>
              </tr>
            </thead>
            <tbody className="table__body">
              {movements ? (
                movements.map((movement) => (
                  <MovementsItem key={movement.id} {...movement} />
                ))
              ) : (
                <MovementsItemEmpty />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default MovementsScreen;
