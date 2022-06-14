import { Outlet, Route, Routes } from "react-router-dom";
//import { SessionForm } from "../Sessions/SessionForm";
import { SessionList } from "../Sessions/SessionList";

export const ApplicationViews = () => {
    return <Routes>
                <Route path="/" element={
                <>
                    <h1 className="title_main">Focus Flow</h1>
                    <Outlet />
                </>
            }>    
                <Route path="sessions" element={ <SessionList /> } />
                
            </Route>
    </Routes>
}

/* <Route path="session/add" element={ <SessionForm />} /> */