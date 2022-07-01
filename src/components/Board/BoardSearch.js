/* NEW ------- Added a search bar for board */

export const BoardSearch = ({ setterFunction }) => {
    return (
        <div>
        <input className="board_search_bar"
            onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }
        type="text" placeholder="Search..." />
        </div>
    )
}