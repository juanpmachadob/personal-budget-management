import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/authThunks";
import BiLogOut from "./BiLogOut";
import BiWallet from "./BiWallet";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <BiWallet />
          <p className="navbar__text">MY BUDGET</p>
        </li>
        {user?.id && (
          <li className="navbar__item">
            <p className="navbar__text navbar__text--name">{user.name}</p>
            <BiLogOut
              className="navbar__link"
              title="Logout"
              onClick={handleLogout}
            />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
