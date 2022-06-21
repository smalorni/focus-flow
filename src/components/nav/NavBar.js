import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link__sessions" to="/sessions">Photo Sessions</Link>
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
        </ul>
    )
}

// Note: took out home nav link on 06/21