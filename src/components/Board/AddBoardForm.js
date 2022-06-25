import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBoardForm.css"

//Goal: create a form, for creating new objects. Once POST operation is completed, navigate user back to board.


export const BoardForm = () => {
  const [board, addBoard] = useState({
    "url": "",
    "comments": "",
    "userId": 0
  })
  
  const navigate = useNavigate()
  
  const localFlowUser = localStorage.getItem("flow_user")
    const flowUserObject = JSON.parse(localFlowUser)
    
    const userId = flowUserObject.id
   
  
      //submit button
  const handleSaveButtonClick = (event) => {
    event.preventDefault()

    //Need to send data to API

      const boardToSendToAPI = {
        url: (board.url),
        comments: board.comments,
        userId: parseInt(userId)
      }
      //Post request to JSON server, when completed, navigate user back to board - route found in application views.js

      return fetch(`http://localhost:8088/boards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(boardToSendToAPI),
      })
        .then((response) => response.json())
        .then(() => {
          navigate("/board"); //same as shown in application views
        })
    };

    
    return (
      <form className="boardForm">
        <h2 className="boardForm_title">📌 Pin A New Idea</h2>
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
                addBoard(copy)
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
                addBoard(copy)
              }}
            />
          </div>
        </fieldset>
        <div className="add-board-btns">
        <button className="submit-pin" onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>
          PIN IDEA
        </button>
        <button className="cancel-btn" onClick={() => navigate("/board")}>CANCEL</button>
        </div>
      </form>
    )
  }