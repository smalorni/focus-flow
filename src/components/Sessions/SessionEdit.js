import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const SessionEdit = () => {
    
    const [session, editSession] = useState({
            date: "",
            location: "",
            clientName: "",
            email: "",
            eventTypeId: "",
            notes: "",
          })
    
    const { sessionId } = useParams()
    const navigate = useNavigate()
    //need to pull eventTypes API in order for .map to work
    const [eventTypes, setEventTypes] = useState([])

    //fetch sessions data
    useEffect(() => {
        fetch(`http://localhost:8088/sessions/${sessionId}`)
            .then(response => response.json())
            .then((data) => {
                editSession(data)
            })
    }, 
        [sessionId]
    )

   useEffect(() => {
        fetch(`http://localhost:8088/eventTypes`)
          .then((response) => response.json())
          .then((eventTypeArray) => {
            setEventTypes(eventTypeArray)
          })
      }, 
          []
      )

    //need edit button for user to click on
    const editButtonClick = (event) => {
        event.preventDefault()

        
        return fetch(`http://localhost:8088/sessions/${sessionId}`, {
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


    return <>
        <form className="editForm">
            <h2 className="editForm__title">Update Photo Session</h2>
            <fieldset>
                <div className="form-group">
                <label htmlFor="date">Date of Session:</label>
                    <input
                    required autoFocus
                    type="date"
                    className="form-control"
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
                    required autoFocus
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
                    required autoFocus
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
                    required autoFocus
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
                    value={session.eventTypeId}
                    onChange={(evt) => {
                    const copy = { ...session }; //created a copy of existing state
                    copy.eventTypeId = parseInt(evt.target.value) //to modify
                    editSession(copy)
                  }}
            >
              <option value="0">Select An Event Type</option>
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
            onClick={(clickEvent) => editButtonClick(clickEvent)}
            className="edit-btn">
            Save
        </button> 

        <button onClick={() => navigate("/sessions")}>Cancel</button>
       
    </form>
    </>
}