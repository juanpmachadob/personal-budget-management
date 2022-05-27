import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { fetchWithToken } from "../../helpers/fetch";
import { getMovements, getTotals } from "./movementSlice";

export const startGetMovements = () => {
  return (dispatch) => {
    fetchWithToken("movements")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          const { movements } = data;
          dispatch(getMovements(movements));
        } else {
          const msg = data.msg ? data.msg : "Please, reload and try again";
          Swal.fire("Error", msg, "error");
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", "Please, contact the administrator", "error");
      });
  };
};

export const startGetTotals = () => {
  return (dispatch) => {
    fetchWithToken("movements/totals")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          const { totals } = data;
          dispatch(getTotals(totals));
        } else {
          const msg = data.msg ? data.msg : "Please, reload and try again";
          Swal.fire("Error", msg, "error");
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", "Please, contact the administrator", "error");
      });
  };
};
