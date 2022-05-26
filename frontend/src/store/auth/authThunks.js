import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";
import { checkCredentials, login, logout } from "./authSlice";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    fetchWithoutToken("auth/login", { email, password }, "POST")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.ok) {
          const { user, token } = data;

          localStorage.setItem("token", token);

          dispatch(login(user));
        } else {
          //TODO: render errors
          if (data.errors) console.log(data.errors);
          if (data.msg) Swal.fire("Error", "test", "error");
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", "Please, contact the administrator", "error");
      });
  };
};

export const startCheckCredentials = () => {
  return async (dispatch) => {
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
    localStorage.clear();
    dispatch(logout());
  };
};
