import { useEffect, createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'


const Context = createContext()
export const useAppContext = () => useContext(Context)

export default function AppContextProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false)
//   const navigate = useNavigate()
//   const navigateToLogin = () => navigate('/login', { replace: true})

  useEffect(() => {
    if (sessionStorage.token) {
        api.setup(sessionStorage.token)
        setIsInitialized(true)
    } else {
        // navigateToLogin()
    }
  }, [])

  return <Context.Provider value={{ isInitialized }}>
      {children}
      </Context.Provider>
}