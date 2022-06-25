import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./EditBoardForm.css"

export const EditFlowBoard = () => {
    
    const [board, updateFlowBoard] = useState({
        "url": "",
        "comments": "",
        "userId": 0
      })
    
    const { boardId } = useParams()
    const navigate = useNavigate()
    

    //fetch data
    useEffect(() => {
        fetch(`http://localhost:8088/boards/${boardId}`)
            .then(response => response.json())
            .then((data) => {
                updateFlowBoard(data)
            })
    }, 
        [boardId]
    )

    //need edit button for user to click on
    const editButtonClick = (event) => {
        event.preventDefault()

        
        return fetch(`http://localhost:8088/boards/${boardId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(board)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/board")
            })
    }


    return <>
        <form className="boardForm">
          <h2 className="boardForm_title">Edit Idea</h2>
          <fieldset>
            <div className="form-group" key={board.id}>
              <label htmlFor="url-link">URL:</label>
              <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Place URL Link Here"
                value= {board.url}
                onChange={(evt) => {
                  const copy = { ...board }; //created a copy of existing state
                  copy.url = evt.target.value; //to modify
                  updateFlowBoard(copy)
                }}
              />
            </div>
          </fieldset>
  
          <fieldset>
            <div className="form-group">
              <label htmlFor="comments">Comments:</label>
              <textarea className="text_box"
                placeholder="Enter Comments"
                value={board.comments}
                onChange={(evt) => {
                  const copy = { ...board }; //created a copy of existing state
                  copy.comments = evt.target.value; //to modify
                  updateFlowBoard(copy)
                }}
              />
            </div>
          </fieldset>
        <div className="edit-board-btns">
        <button
            onClick={(clickEvent) => editButtonClick(clickEvent)}
            className="edit-flowBoard-btn">
            SAVE
        </button> 

        <button className="cancel-flowBoard-btn" onClick={() => navigate("/board")}>CANCEL</button>
       </div>
    </form>
    </>
}