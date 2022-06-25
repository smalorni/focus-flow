import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Board.css"

/* Create a flow board where photographers can add url links to a list for photography ideas */

export const FlowBoardList = () => {
    
    const [boards, setBoards] = useState([])
    const navigate = useNavigate()

    const localFlowUser = localStorage.getItem("flow_user")
    const flowUserObject = JSON.parse(localFlowUser)

    //fetch existing boards from Json

    const getAllBoards = () => {
        fetch(`http://localhost:8088/boards?userId=${flowUserObject.id}`)
        .then ((response) => response.json())
        .then ((boardsArray) => {
            setBoards(boardsArray);
        });
    };

    //invoke function
    useEffect(() => {
        getAllBoards()
    },

    [],
)

    return (
        <>
            
            <h2 className="boardForm_title">My Flow Board</h2>
            <div className="pin-btn">
                <button className="new_pin" onClick={() => navigate("/board/create")}>📌 PIN A NEW IDEA</button>
            </div>
                <article className="boards">
                <ul>
                    {boards.map((board) => {
                        return <>
                            <div className="board_container">
                            <div key={`board-${board.id}`}>
                                <div className="board_list" key={`board--$board.id`}>
                                    <div className="flow-url">
                                        <img className="board_img" src={board.url} />
                                    </div>
                                    <div className="comments">
                                        Comments: {board.comments}
                                    </div>
                                </div>
                                <footer>
                                    <div className="board-buttons">
                                    <Link to={`/board/${board.id}/edit`}>
                                    <button className="board-edit-btn">EDIT</button>
                                     </Link>
                                        <button className="board-delete-btn"
                                        onClick={() => {
                                            fetch(`http://localhost:8088/boards/${board.id}`, {
                                                method: "DELETE",
                                        }).then(() => {
                                            getAllBoards();
                                        });
                                            }}
                                        > DELETE
                                        </button> 
                                    </div>
                                </footer>
                            </div>
                            </div>
                            </>
                    })}
                </ul>
            </article>
        </>
    );
}