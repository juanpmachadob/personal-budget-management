import BiEditAlt from "../ui/BiEditAlt";
import BiTrashAlt from "../ui/BiTrashAlt";

const MovementsItem = () => {
  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <tr className="table__row">
      <td className="table__cell">Lorem, ipsum.</td>
      <td className="table__cell table__cell--incomes">+ $5000</td>
      <td className="table__cell">10/120/12 23:2pm</td>
      <td className="table__cell">Lorem, ipsum.</td>
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
