import { fetchWithToken } from "../../helpers/fetch";
import { getMovements } from "./movementSlice";

export const startGetMovements = () => {
  return (dispatch) => {
    fetchWithToken("movements")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          const { movements } = data;
          dispatch(getMovements(movements));
        } else {
          const msg = data.msg
            ? data.msg
            : data.errors
            ? data.errors[Object.keys(data.errors)[0]].msg
            : "Please, reload and try again";
          Swal.fire("Error", msg, "error");
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", "Please, contact the administrator", "error");
      });
  };
};
