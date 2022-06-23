import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"
 

export const Login = () => {
    const [email, set] = useState("BaneTy12@gmail.com")
    const navigate = useNavigate()
/* This is function that handles the clicking on login button */ 
    const handleLogin = (e) => {
        e.preventDefault()
 
        //one user, changed local storage object to "flow_user"
        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("flow_user", JSON.stringify({
                        id: user.id,
                    }))

                    navigate("/home")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="welcome">Welcome Back Photographer</h1>
                    <h3 className="sign-in-heading">Please sign in</h3>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button className="sign-in-btn" type="sign-in">
                            SIGN IN
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">
                    <p className="account">Don't have an account? Join Focus Flow</p></Link>
            </section>
        </main>
    )
}

