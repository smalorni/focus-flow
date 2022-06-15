import { useEffect, useState } from "react";
import "./Sessions.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

export const SessionList = ({ searchTermState }) => {
    //set state with initial value of empty array
    const [sessions, setSessions] = useState([])
    //set state when a user type in and erase search, needs to return original list
    const [filteredSessions, setFilteredSessions] = useState ([]) 
    const navigate = useNavigate()

    /*const localFlowUser = localStorage.getItem("flow_user")
    const flowUserObject = JSON.parse(localFlowUser)*/


    /* fetch existing api data, all details and event type included{
        "id": 1,
        "date": "08-12-2022",
        "location": "West Pavilion Park - Chicago, Illinois",
        "clientName": "Bobby Walsh and Jennifer Davidson",
        "email": "Walsh_Davidson@gmail.com",
        "eventTypeId": 3,
        "notes": "Bring 50mm lens, take some shots by the water fountain",
        "userId": 1,
        "eventType": {
          "id": 3,
          "eventType": "Engagement"
        }
    */
        useEffect(
            () => {
                fetch(`http://localhost:8088/sessions?_expand=eventType`)
                .then(response => response.json())
                .then((sessionArray) => { 
                     setSessions(sessionArray)//passes what you want the new value to be
                })
            },
            [] //when this array is empty, you are observing initial component state
    
        )

    useEffect(
        () => {
            fetch(`http://localhost:8088/sessions?_expand=eventType`)
            .then(response => response.json())
            .then((sessionArray) => { 
                 setFilteredSessions(sessionArray)//passes what you want the new value to be
            })
        },
        [sessions] 

    )

    //Need useEffect for searchState - to search for certain sessions
    useEffect(
        () => {
            const searchedSessions = sessions.filter(session => {
            return session.clientName.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
        setFilteredSessions(searchedSessions)
    },
        [ searchTermState ]
)
 
        //add new session button, need navigate hook above
    return <>
        <button onClick={() => navigate("/sessions")}>View All Sessions</button>
        <button onClick={() => navigate("/session/create")}>Add New Session</button>
        <h2 className="sessionForm_title">List of Photo Sessions</h2>
            <article className="sessions">
                <ul>
                {
                filteredSessions.map
                ((session) => {
                return <>
                
                <section className="session_list" key={`session--${session.id}`}>
                        
                            <div className="date">Date: {new Date (session.date).toLocaleDateString()}</div>
                            <div className="location">Location: {session.location}</div>
                            <div className="name">Client's Name: {session.clientName}</div>
                            <div className="email">Email: {session.email}</div>
                            <div className="event">Event: {session?.eventType?.eventType}</div>
                            <div className="notes">Notes: {session.notes}</div>
                    </section>
                    <footer>
                        <Link to={`/sessions/${session.id}/edit`}><button className="edit_btn">EDIT</button></Link>
                    </footer>
                    </>
                    })
                    
                }
               
                </ul>
        </article>
        
    </>
}