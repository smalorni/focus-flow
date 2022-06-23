import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

//took out "active in li className"
    return (
        <nav className="navbar">
            <li className="navbar__item">
                <img className="logo" src={process.env.PUBLIC_URL + "/Images/Focus-Flow-Logo.PNG"} alt ="logo" />
            </li>

            <li className="navbar__item">
                <Link className="navbar__link__home" to="/home">Home</Link>
            </li>

            <li className="navbar__item">
                <Link className="navbar__link__sessions" to="/sessions">Photo Sessions</Link>
            </li>

            <li className="navbar__item">
                <Link className="navbar__link__board" to="/board">Flow Board</Link>
            </li>

            {
                localStorage.getItem("flow_user")
            ? <li className="navbar__item navbar__logout">
                <Link className="navbar__link__logout" to="" onClick={() => {
                    localStorage.removeItem("flow_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
            :""
            }   
        </nav>
    )
}