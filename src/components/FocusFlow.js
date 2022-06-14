import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./views/ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Authorized } from "./views/Authorized";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./FocusFlow.css";


export const FocusFlow = () => {
        return <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={
                <Authorized>
                        <>
                                <NavBar />
                                <ApplicationViews />
                        </>
                </Authorized>

        } />
</Routes>
}
