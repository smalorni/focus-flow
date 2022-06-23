import { Outlet, Route, Routes } from "react-router-dom";
import { SessionContainer } from "../Sessions/SessionContainer";
import { SessionForm } from "../Sessions/SessionForm";
import { SessionEdit } from "../Sessions/SessionEdit";
import { SessionSearch } from "../Sessions/SessionSearch";
import { HomePage } from "../Home/Homepage";
import { BoardForm } from "../Board/AddBoardForm";
import { FlowBoardList} from "../Board/FlowBoardList";
import { EditFlowBoard } from "../Board/EditBoardForm";


export const ApplicationViews = () => {
    return <Routes>
                <Route path="/" element={
                <>
                    
                    <Outlet />
                </>
            }>
                
                <Route path="home" element={ <HomePage />} /> 
                <Route path="sessions" element={ <SessionContainer /> } />
                <Route path="sessions" element={ <SessionSearch /> } />
                <Route path="session/create" element={ <SessionForm />} />
                <Route path="sessions/:sessionId/edit" element={ <SessionEdit />} />
                <Route path="board/create" element={ <BoardForm /> } />
                <Route path="board" element={ <FlowBoardList /> } />
                <Route path="board/:boardId/edit" element= { <EditFlowBoard />} />

            </Route>
    </Routes>
}

