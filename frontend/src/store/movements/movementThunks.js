import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { fetchWithToken } from "../../helpers/fetch";
import {
  getMovements,
  getTotals,
  deleteMovement,
  setActiveMovement,
} from "./movementSlice";

export const startGetMovements = (filter = "all", page = 1, limit = 10) => {
  let route = "";
  switch (filter) {
    case "incomes":
      route = "movements/incomes";
      break;
    case "expenses":
      route = "movements/expenses";
      break;
    default:
      route = "movements";
  }

  return (dispatch) => {
    fetchWithToken(`${route}?page=${page}&limit=${limit}`)
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

export const startCreateMovement = (movement, navigate) => {
  Swal.fire({
    title: "Creating movement",
    text: "Please, wait...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  return () => {
    fetchWithToken("movements", movement, "POST")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          Swal.fire("Success", "Movement created successfully", "success");
          navigate("/movements");
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
  Swal.fire({
    title: "Deleting movement",
    text: "Please, wait...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

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

export const startEditMovement = (id, movement, navigate) => {
  Swal.fire({
    title: "Editing movement",
    text: "Please, wait...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  return () => {
    fetchWithToken(`movements/${id}`, movement, "PUT")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          Swal.fire("Success", "Movement edited successfully", "success");
          navigate("/movements");
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
  Swal.fire({
    title: "Getting movement",
    text: "Please, wait...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  return (dispatch) => {
    fetchWithToken(`movements/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          const { movement } = data;
          dispatch(setActiveMovement(movement));
          Swal.close();
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

export const startSearchMovements = (term = "", page = 1, limit = 10) => {
  return (dispatch) => {
    fetchWithToken(`search/movements/${term}?page=${page}&limit=${limit}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          const { results } = data;
          dispatch(getMovements(results));
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
