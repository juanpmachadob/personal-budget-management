import BiLogOut from "./BiLogOut";
import BiWallet from "./BiWallet";

const Navbar = () => {
  const handleLogout = () => {
    console.log("logout")
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <BiWallet />
          <p className="navbar__text">MY BUDGET</p>
        </li>
        <li className="navbar__item">
          <p className="navbar__text navbar__text--name">Juan Machado</p>
          <BiLogOut
            className="navbar__link"
            title="Logout"
            onClick={handleLogout}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
