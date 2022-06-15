/*import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
export const SessionEdit = () => {
    const { sessionId } = useParams()

    const [session, editSession] = useState({
            date: "",
            location: "",
            clientName: "",
            email: "",
            eventTypeId: "",
            notes: "",
          })
       
    
    const navigate = useNavigate()

    //fetch sessions data
    useEffect(() => {
        fetch(`http://localhost:8088/sessions`)
            .then(response => response.json())
            .then((data) => {
                editSession(data)
            })
    }, [sessionId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/sessions/${session.Id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(session)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/sessions")
            })
    }

    //useEffect (
        () => {
            getEditRequests(requestId)
            .then (updateRequest)
        },
        [requestId]
    )


    return <form className="editForm">
        <h2 className="editForm__title">Photo Session</h2>
        <fieldset>
        <div className="form-group">
            <label htmlFor="date">Date of Session:</label>
            <input
              required
              autoFocus
              type="date"
              className="form-control"
              placeholder="Choose Date"
              value={session.date}
              onChange={(evt) => {
                const copy = { ...session }; //created a copy of existing state
                copy.date = evt.target.value; //to modify
                editSession(copy)
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
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
                editSession(copy)
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
                editSession(copy)
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
                editSession(copy)
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
                editSession(copy)
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
                editSession(copy)
              }}
            />
          </div>
        </fieldset>
            

        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="edit-btn">
            Save
        </button>
    </form>
}*/
