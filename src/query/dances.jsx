/* eslint-disable import/prefer-default-export */
import { useQuery } from 'react-query'
import { useAppContext} from '../components/Page' 
import api from '../api'

export function useDancesGet(options) {
    const {isInitialized} = useAppContext ()
  
    return useQuery(
      ['/dances'],
      async () => {
        const result = await api.get(`/dances`)
        return result.data
      },
      {
        ...options,
        enabled: isInitialized,
      },
    )
  }


// export function useDanceGet(options) {
//   const {isInitialized} = useAppContext ()

//   return useQuery(
//     ['/dance'],
//     async () => {
//       const result = await api.get(`/dance/${options.id}`)
//       return result.data
//     },
//     {
//       ...options,
//       enabled: isInitialized,
//     },
//   )
// }