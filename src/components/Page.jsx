import{ Box } from '@mui/material';
import { createContext, useContext } from 'react';


const Context = createContext()
export const useAppContext = () => useContext(Context)

export default function Page({ sx, ...otherProps }) {
    return(
        <Box sx={{
             height: '100vh', 
             width: '100 vw',
            display: 'flex',
            flexDirection: 'column',
            ...sx,
        }}
        {...otherProps}
        />
    )
}