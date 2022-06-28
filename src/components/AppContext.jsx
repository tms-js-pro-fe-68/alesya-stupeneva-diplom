import { useEffect, createContext, useContext, useState } from 'react'
import api from '../api'


const Context = createContext()
export const useAppContext = () => useContext(Context)

export default function AppContextProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (sessionStorage.token) {
        api.setup(sessionStorage.token)
        setIsInitialized(true)
    } else {
       
    }
  }, [])

  return <Context.Provider value={{ isInitialized }}>
      {children}
      </Context.Provider>
}