import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { fetchWithoutToken } from "../../helpers/fetch";
import { getCategories } from "./categorySlice";

export const startGetCategories = () => {
  return async (dispatch) => {
    fetchWithoutToken("categories")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          const { categories } = data;
          dispatch(getCategories(categories));
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
