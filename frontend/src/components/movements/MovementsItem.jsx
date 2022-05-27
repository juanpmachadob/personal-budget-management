import { useDispatch } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.all";
import { startDeleteMovement } from "../../store/movements/movementThunks";
import BiEditAlt from "../ui/BiEditAlt";
import BiTrashAlt from "../ui/BiTrashAlt";

const MovementsItem = ({ id, concept, amount, date, type, category }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {};

  const handleDelete = () => {
    Swal.fire({
      title: "Delete movement",
      text: "Do you want to delete the selected movement?",
      icon: "warning",
      confirmButtonText: "Yes, delete!",
      showCancelButton: true,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) dispatch(startDeleteMovement(id));
    });
  };

  return (
    <tr className="table__row">
      <td className="table__cell">{concept}</td>
      <td className="table__cell">{date}</td>
      <td className={`table__cell table__cell--${type}`}>
        {type === "incomes" ? "+" : "-"} ${amount}
      </td>
      <td className="table__cell">
        <span className={`table__card table__cell--${type}`}>{type}</span>
      </td>
      <td className="table__cell">{category?.name}</td>
      <td className="table__cell">
        <BiEditAlt
          className="table__icon table__icon--blue"
          onClick={handleEdit}
        />
        <BiTrashAlt
          className="table__icon table__icon--red"
          onClick={handleDelete}
        />
      </td>
    </tr>
  );
};
export default MovementsItem;
