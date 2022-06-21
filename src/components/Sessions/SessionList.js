import { useEffect, useState } from "react";
import "./Sessions.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const SessionList = ({ searchTermState }) => {
  //set state with initial value of empty array
  const [sessions, setSessions] = useState([]);
  //set state when a user type in and erase search, needs to return original list
  const [filteredSessions, setFilteredSessions] = useState([]);
  const navigate = useNavigate();

    const localFlowUser = localStorage.getItem("flow_user")
    const flowUserObject = JSON.parse(localFlowUser)

  //Get all sessions
  const getAllSessions = () => {
    fetch(`http://localhost:8088/sessions?_expand=eventType&userId=${flowUserObject.id}`)
      .then((response) => response.json())
      .then((sessionArray) => {
        setSessions(sessionArray);
      });
  };
  useEffect(() => {
        getAllSessions()
  },

  [],
  )

  //Fetch for search
  useEffect(() => {
    fetch(`http://localhost:8088/sessions?_expand=eventType&userId=${flowUserObject.id}`)
      .then((response) => response.json())
      .then((sessionArray) => {
        setFilteredSessions(sessionArray);
      });
  }, [sessions]);

  //Need useEffect for searchState - to search for certain sessions. For event type, need to repeat event type to access value below to be able to search by event.
  useEffect(() => {
    const searchedSessions = sessions.filter((session) => {
      return (
        session.clientName
          .toLowerCase()
          .includes(searchTermState.toLowerCase()) ||
        session.eventType.eventType
          .toLowerCase()
          .startsWith(searchTermState.toLowerCase()) ||
        session.date.toLowerCase().includes(searchTermState.toLowerCase()) ||
        session.location.toLowerCase().includes(searchTermState.toLowerCase())
      );
    });
    setFilteredSessions(searchedSessions);
  }, [searchTermState]);


  //add new session button, need navigate hook above
  return (
    <>
      <button className="new_session" onClick={() => navigate("/session/create")}>
        ADD NEW SESSION
      </button>
      <h2 className="sessionForm_title">Upcoming Photo Sessions</h2>
      <article className="sessions">
        <ul>
          {filteredSessions.map((session) => {
            return(
              <div key={`session-${session.id}`}>
                <section
                  className="session_list"
                  key={`session--${session.id}`}
                >
                  <div>
                  <img src={session.eventType.img_url} className="image" />
                  </div>
                  <div className="date">
                    Date:{" "}
                    {new Date(session.date).toLocaleDateString("en-US", {
                      timeZone: "UTC",
                    })}
                  </div>
                  <div className="location">Location: {session.location}</div>
                  <div className="name">
                    Client's Name: {session.clientName}
                  </div>
                  <div className="email">Email: {session.email}</div>
                  <div className="event">
                    Event: {session?.eventType?.eventType}
                  </div>
                  <div className="notes">Notes: {session.notes}</div>
                </section>
                <footer>
                  <div className="buttons">
                  <Link to={`/sessions/${session.id}/edit`}>
                    <button className="edit-btn">EDIT</button>
                  </Link>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      fetch(`http://localhost:8088/sessions/${session.id}`, {
                        method: "DELETE",
                      }).then(() => {
                       getAllSessions();
                      });
                    }}
                  >
                    DELETE
                  </button>
                  </div>
                </footer>
              </div>
            );
          })}
        </ul>
      </article>
    </>
  );
};