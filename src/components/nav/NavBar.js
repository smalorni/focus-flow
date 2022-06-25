import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="navbar">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/Images/Focus-Flow-Logo.PNG"}
          alt="logo"
        />

        <ul className="all_nav_links">
          <li className="navbar__item">
            <Link className="navbar__link__home" to="/home">
              Home
            </Link>
          </li>

          <li className="navbar__item">
            <Link className="navbar__link__sessions" to="/sessions">
              Photo Sessions
            </Link>
          </li>

          <li className="navbar__item">
            <Link className="navbar__link__board" to="/board">
              Flow Board
            </Link>
          </li>

          {localStorage.getItem("flow_user") ? (
            <li className="navbar__item navbar__logout">
              <Link
                className="navbar__link__logout"
                to=""
                onClick={() => {
                  localStorage.removeItem("flow_user");
                  navigate("/", { replace: true });
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </header>
  );
};
