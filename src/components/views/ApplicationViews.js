import { Outlet, Route, Routes } from "react-router-dom";
import { SessionContainer } from "../Sessions/SessionContainer";
import { SessionForm } from "../Sessions/SessionForm";
import { SessionEdit } from "../Sessions/SessionEdit";
import { SessionSearch } from "../Sessions/SessionSearch";

export const ApplicationViews = () => {
    return <Routes>
                <Route path="/" element={
                <>
                    <h1 className="title_main">Focus Flow</h1>
                    <Outlet />
                </>
            }>    
                <Route path="sessions" element={ <SessionContainer /> } />
                <Route path="sessions" element={ <SessionSearch /> } />
                <Route path="session/create" element={ <SessionForm />} />
                <Route path="sessions/:sessionId/edit" element={ <SessionEdit />} />

            </Route>
    </Routes>
}

