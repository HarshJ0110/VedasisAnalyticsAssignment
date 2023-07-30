import DashContext from "./DashContext";
import { useState } from "react"

const DashStates = (prop) => {
    const [searchTerm, setSearchTerm] = useState('');
  return (
    <DashContext.Provider value={{searchTerm, setSearchTerm}}>
        {prop.children}
    </DashContext.Provider>
  )
}

export default DashStates

