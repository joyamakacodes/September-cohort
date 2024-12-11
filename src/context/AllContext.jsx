/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

export const AllContext=({children})=> {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  

  return (
 <GlobalContext.Provider value={{
  count, setCount,
  name, setName
 }} >
{children}
 </GlobalContext.Provider>
  );
}

export const useAllContext= ()=> useContext(GlobalContext)
