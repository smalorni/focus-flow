import { Outlet, Route, Routes } from "react-router-dom";
import { SessionContainer } from "../Sessions/SessionContainer";
import { SessionForm } from "../Sessions/SessionForm";
import { SessionEdit } from "../Sessions/SessionEdit";
import { SessionSearch } from "../Sessions/SessionSearch";
//import { Camera } from './Images/Homepage/Camera_Image.jpg';

//<div><img src={Camera} /></div>


export const ApplicationViews = () => {
    return <Routes>
                <Route path="/" element={
                <>
                    
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

