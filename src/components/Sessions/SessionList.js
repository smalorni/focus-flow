import { useEffect, useState } from "react";
import "./Sessions.css"
import { useNavigate } from "react-router-dom";

//searchSessionState - AS PARAMETER

export const SessionList = () => {
    //set state with initial value of empty array
    const [sessions, setSessions] = useState([])

    /*const localFlowUser = localStorage.getItem("flow_user")
    const flowUserObject = JSON.parse(localFlowUser) */

    useEffect(
        () => {
            fetch("http://localhost:8088/sessions")
            .then(response => response.json())
            .then((sessionArray) => { 
                setSessions(sessionArray) //passes what you want the new value to be
            })
        },
        [] //when this array is empty, you are observing initial component state

    )

    return <>
        <h2 className="sessionForm_title">List of Photo Sessions</h2>
            <article className="sessions">
                <ul>
                {
                sessions.map
                ((session) => {
                return <section className="session_list">
                        
                            <div className="date">Date: {session.date}</div>
                            <div className="location">Location: {session.location}</div>
                            <div className="name">Client's Name: {session.clientName}</div>
                            <div className="email">Email: {session.email}</div>
                            <div className="event">Event: {session.eventType}</div>
                            <div className="notes">Notes: {session.notes}</div>
                    </section>
                    })
                }
                </ul>
        </article>
        
    </>
}