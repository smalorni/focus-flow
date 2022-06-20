import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Goal: create a form, for creating new objects. Once POST operation is completed, navigate user back to list of all sessions.


export const SessionForm = () => {
  const [session, updateSession] = useState({
    "date": "",
    "location": "",
    "clientName": "",
    "email": "",
    "eventTypeId": 0,
    "notes": "",
    "userId": 0
  })
  
  const navigate = useNavigate()
  
  const [eventTypes, setEventTypes] = useState([])
  
  const localFlowUser = localStorage.getItem("flow_user")
    const flowUserObject = JSON.parse(localFlowUser)
    //added below
    const userId = flowUserObject.id
    //console.log(userId)
  
  //Fetch existing data for eventTypes, need it for drop down menu items to appear
  
  useEffect(() => {
      fetch(`http://localhost:8088/eventTypes`)
        .then((response) => response.json())
        .then((eventTypeArray) => {
          setEventTypes(eventTypeArray)
        })
    }, 
        []
    )

      //submit button
  const handleSaveButtonClick = (event) => {
    event.preventDefault()

      
    //Need send data to API

      const sessionToSendToAPI = {
        date: (session.date),
        location: session.location,
        clientName: session.clientName,
        email: session.email,
        eventTypeId: parseInt(session.eventTypeId),
        notes: session.notes,
        userId: parseInt(userId)
      }
      //Post request to JSON server, when completed, navigate user back to session list - route found in application views.js

      return fetch(`http://localhost:8088/sessions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sessionToSendToAPI),
      })
        .then((response) => response.json())
        .then(() => {
          navigate("/sessions"); //same as shown in application views
        })
    };

    //Date, Location, Client's Name, Email, EventTypeId, notes

    return (
      <form className="sessionForm">
        <h2 className="sessionForm_title">New Photo Session Form</h2>
        <fieldset>
          <div className="form-group" key={session.id}>
            <label htmlFor="date">Date of Session:</label>
            <input
              required
              autoFocus
              type="date"
              className="form-control"
              placeholder="Choose Date"
              value= {session.date}
              onChange={(evt) => {
                const copy = { ...session }; //created a copy of existing state
                copy.date = evt.target.value; //to modify
                updateSession(copy)
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group" key={session.id}>
            <label htmlFor="location">Location of Session:</label>
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              placeholder="Enter Location"
              value={session.location}
              onChange={(evt) => {
                const copy = { ...session }; //created a copy of existing state
                copy.location = evt.target.value; //to modify
                updateSession(copy)
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Name of Client:</label>
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={session.clientName}
              onChange={(evt) => {
                const copy = { ...session }; //created a copy of existing state
                copy.clientName = evt.target.value; //to modify
                updateSession(copy)
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              placeholder="Enter Email"
              value={session.email}
              onChange={(evt) => {
                const copy = { ...session }; //created a copy of existing state
                copy.email = evt.target.value; //to modify
                updateSession(copy)
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="eventType">Event Type:</label>
            <select
              onChange={(evt) => {
                const copy = { ...session }; //created a copy of existing state
                copy.eventTypeId = parseInt(evt.target.value) //to modify
                updateSession(copy)
              }}
            >
              <option key={0}>Select An Event Type</option>
              {
              eventTypes.map((eventType) => {
                return <option key={eventType.id} value={eventType.id}>{eventType.eventType}</option>
              })}
            </select>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="notes">Notes:</label>
            <textarea
              placeholder="Enter Notes"
              value={session.notes}
              onChange={(evt) => {
                const copy = { ...session }; //created a copy of existing state
                copy.notes = evt.target.value; //to modify
                updateSession(copy)
              }}
            />
          </div>
        </fieldset>

        <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>
          Submit Session
        </button>
      </form>
    )
  }