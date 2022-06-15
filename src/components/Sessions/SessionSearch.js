
export const SessionSearch = ({ setterFunction }) => {
    return (
        <div className="searchBar">
        <input
            onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }
        type="text" placeholder="Search..." />
        </div>
    )
}