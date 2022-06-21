
export const SessionSearch = ({ setterFunction }) => {
    return (
        <div>
        <input className="session_search_bar"
            onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }
        type="text" placeholder="Search..." />
        </div>
    )
}