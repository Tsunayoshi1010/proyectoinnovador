import { NavLink, useNavigate } from "react-router-dom";

import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../store/slices/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((store) => store.authSlice.isLogged);

  const userTo = isLogged ? "/profile" : "/login";

  const logout = () => {
    dispatch(reset());
    navigate("/login")
  };

  const getClass = ({ isActive }) =>
    isActive ? "navbar__link--active" : "navbar__link";

  return (
    <nav className="nav">
      <div className="logo_nav">
        <img src="" alt="LOGO" />
      </div>
      <div className="navigation_items">
        <ul className="ul_links">
          <li>
            <NavLink to={"/"} className={getClass}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to={"/enterprises"} className={getClass}>
              ENTERPRISES
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className={getClass}>
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about-us"} className={getClass}>
              ABOUT US
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="login_nav">
        <ul>
          {!isLogged ? <li>
            <NavLink to={"/login"}>LOGIN</NavLink>
          </li> : <button onClick={logout}>LOG OUT</button>}
          <li>
            <NavLink to={userTo}>PROFILE</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
