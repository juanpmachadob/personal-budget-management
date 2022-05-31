import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { fetchWithToken } from "../../helpers/fetch";
import {
  getMovements,
  getTotals,
  deleteMovement,
  setActiveMovement,
} from "./movementSlice";

export const startGetMovements = (page = 1) => {
  return (dispatch) => {
    fetchWithToken(`movements?page=${page}&limit=10`)
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

export const startCreateMovement = (movement) => {
  return (dispatch) => {
    fetchWithToken("movements", movement, "POST")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          Swal.fire("Success", "Movement created successfully", "success");
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

export const startDeleteMovement = (id) => {
  return (dispatch) => {
    fetchWithToken(`movements/${id}`, {}, "DELETE")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          dispatch(deleteMovement(id));
          Swal.fire("Success", "Movement deleted successfully", "success");
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

export const startEditMovement = (id, movement) => {
  return (dispatch) => {
    fetchWithToken(`movements/${id}`, movement, "PUT")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          Swal.fire("Success", "Movement edited successfully", "success");
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

export const startGetMovementById = (id) => {
  return (dispatch) => {
    fetchWithToken(`movements/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          const { movement } = data;
          dispatch(setActiveMovement(movement));
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
