/* eslint-disable import/prefer-default-export */
import { useQuery } from 'react-query'
import { useAppContext} from '../components/AppContext' 
import api from '../api'

export function useDancesGet(options) {
    const {isInitialized} = useAppContext ()
  
    return useQuery(
      ['/dance-exercises'],
      async () => {
        const result = await api.get(`/dance-exercises`)
        return result.data
      },
      {
        ...options,
        enabled: isInitialized,
      },
    )
  }

