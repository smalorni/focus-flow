import { SessionSearch } from "./SessionSearch"
import { useState } from "react"
import { SessionList } from "./SessionList"
/* Parent container that will maintain the state since siblings cannot directly communicate with each other */

export const SessionContainer  = () => {
    const [searchSessionTerms, setSearchSessionTerms] = useState("")
    //returns two child components. setterFunction => SessionSearch.js, searchState => SessionList.js
    return <>
        <div>
            <SessionSearch setterFunction={setSearchSessionTerms} />
            <SessionList searchTermState={searchSessionTerms} /> 
        </div>
    </>
}