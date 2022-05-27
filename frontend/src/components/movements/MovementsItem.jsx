import BiEditAlt from "../ui/BiEditAlt";
import BiTrashAlt from "../ui/BiTrashAlt";

const MovementsItem = ({ concept, amount, date, type, category }) => {
  const handleEdit = () => {};

  const handleDelete = () => {};

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
