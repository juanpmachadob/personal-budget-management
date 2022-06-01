import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import {
  startGetMovements,
  startSearchMovements,
} from "../../store/movements/movementThunks";
import MovementsControls from "./MovementsControls";
import MovementsItem from "./MovementsItem";
import MovementsItemEmpty from "./MovementsItemEmpty";
import MovementsTotals from "./MovementsTotals";
import Paginator from "./Paginator";

const itemsPerPage = 10;
const MovementsScreen = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { count, movements } = useSelector((state) => state.movement);
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    let currentPage = searchParams.get("page") || 1;
    const searchTerm = searchParams.get("search") || "";

    if (currentPage <= 0 || isNaN(currentPage)) currentPage = 1;

    if (searchTerm) {
      dispatch(startSearchMovements(searchTerm, currentPage, itemsPerPage));
    } else {
      dispatch(startGetMovements(filter, currentPage, itemsPerPage));
    }
  }, [searchParams, filter]);

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
        <MovementsControls filter={filter} setFilter={setFilter}/>
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
              {movements.length > 0 ? (
                movements.map((movement) => (
                  <MovementsItem key={movement.id} {...movement} />
                ))
              ) : (
                <MovementsItemEmpty />
              )}
            </tbody>
          </table>
        </div>
        {!!count && (
          <Paginator itemsCount={count} itemsPerPage={itemsPerPage} />
        )}
      </div>
    </>
  );
};
export default MovementsScreen;
