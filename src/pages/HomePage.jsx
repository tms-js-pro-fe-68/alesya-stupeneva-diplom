
import Page from "../components/Page";
import AppBar from "../components/AppBar";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Collapse, IconButton, List, Stack, TextField, Typography } from "@mui/material";
import { useDancesGet } from '../query/dances'
import { useAppContext } from "../components/AppContext";
import { useEffect, useState } from "react";
import { Expand as ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DanceList from "../components/DanceList";
import api from "../api";
import AddDanceItemButton from "../components/AddDanceItemButton";
import ChangeField from "../components/ChangeField";



export default function HomePage( ) {
  
    const { data: dances = [], setDance } = useDancesGet()
  
    const { cart, setCart  } = useAppContext()

    // const [expanded, setExpanded] = useState(false);

    // const handleExpandClick = () => { setExpanded(!expanded);
    // }; 
    

    const loadDances = (description,title ) => {
      api
        .get(`/dance-exercises`, {
          params: {
            description,
            title,
           
          },
        })
        // .then(({ data }) => setDance(data))
    }
  
    useEffect(() => {
      loadDances()
    }, [])
  
   
return(
  <Page>  
      <AppBar />
      
  <Box
        sx={{
          m: 4,
          p: 2,
          display: 'grid',
          gap: 2,
          width: 1,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          color: 'white',
        }}
      >
        <DanceList {...{dances, loadDances}}  />
        
      </Box>


      {JSON.stringify(cart)}
  </Page>
);
}