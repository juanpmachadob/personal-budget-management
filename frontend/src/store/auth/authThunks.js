import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";
import { checkCredentials, login, logout } from "./authSlice";

export const startLogin = (email, password) => {
  return (dispatch) => {
    Swal.fire({
      title: "Logging in",
      text: "Please, wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    fetchWithoutToken("auth/login", { email, password }, "POST")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          const { user, token } = data;

          localStorage.setItem("token", token);

          dispatch(login(user));
          Swal.close();
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
        Swal.fire("Error", "Please, contact the administrador", "error");
      });
  };
};

export const startRegister = (name, email, password) => {
  return (dispatch) => {
    Swal.fire({
      title: "Registering",
      text: "Please, wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    fetchWithoutToken("auth/register", { name, email, password }, "POST")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          const { user, token } = data;

          localStorage.setItem("token", token);

          dispatch(login(user));
          Swal.close();
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
        Swal.fire("Error", "Please, contact the administrador", "error");
      });
  };
};

export const startCheckCredentials = () => {
  return (dispatch) => {
    fetchWithToken("auth/renew")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          const { user, token } = data;

          localStorage.setItem("token", token);

          dispatch(login(user));
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", "Please, contact the administrator", "error");
      })
      .finally(() => {
        dispatch(checkCredentials());
      });
  };
};

export const startLogout = () => {
  return (dispatch) => {
    Swal.fire({
      title: "Logging out",
      text: "Please, wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    localStorage.clear();
    dispatch(logout());
    Swal.close();
  };
};
