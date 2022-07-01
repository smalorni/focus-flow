import { useState } from "react"
import { BoardSearch } from "./BoardSearch"
import { FlowBoardList } from "./FlowBoardList"

/* NEW ------ Added search bar for board list */

export const BoardContainer  = () => {
    const [searchBoardTerms, setSearchBoardTerms] = useState("")
    //returns two child components. setterFunction => BoardSearch.js, searchState => FlowBoardList.js
    return <>
        <div>
            <BoardSearch setterFunction={setSearchBoardTerms} />
            <FlowBoardList searchTermState={searchBoardTerms} /> 
        </div>
    </>
}