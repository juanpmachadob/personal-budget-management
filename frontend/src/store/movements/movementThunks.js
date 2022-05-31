import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { fetchWithToken } from "../../helpers/fetch";
import {
  getMovements,
  getTotals,
  deleteMovement,
  setActiveMovement,
} from "./movementSlice";

export const startGetMovements = (page = 1, limit = 10) => {
  return (dispatch) => {
    Swal.fire({
      title: "Getting movements",
      text: "Please, wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    fetchWithToken(`movements?page=${page}&limit=${limit}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          const { movements } = data;
          dispatch(getMovements(movements));
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
    Swal.fire({
      title: "Creating movement",
      text: "Please, wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

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
    Swal.fire({
      title: "Deleting movement",
      text: "Please, wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

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
    Swal.fire({
      title: "Editing movement",
      text: "Please, wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

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
    Swal.fire({
      title: "Getting movement",
      text: "Please, wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

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

export const startSearchMovements = (term) => {
  return (dispatch) => {
    fetchWithToken(`search/movements/${term}`)
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
