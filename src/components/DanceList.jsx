import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Collapse, IconButton, List, Stack, TextField, Typography } from "@mui/material";
import { Expand as ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChangeField from './ChangeField'
import { useState } from "react";
import AddDanceItemButton from "./AddDanceItemButton";



export default function DanceList({  dances, loadDances }) {
    
    
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => { setExpanded(!expanded);

    
    }; 
  return (
    <Box  sx={{
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
      }}>
      {dances.map((danceItem) => (
          <Box>
        
        <Card key={danceItem.id} sx={{ maxWidth: 345, p: 3, m:3 }}>
            <CardMedia
              component="img"
              height="194"
              image={danceItem.imageUrl}
              alt="dance"
            />
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle1" color="text.secondary">
                  {danceItem.title}
                </Typography>
              </Stack>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
                
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                  {danceItem.description}
                  </Typography>
                </CardContent>
              </Collapse>
              <Typography variant="body2" color="text.secondary">
                {danceItem.startTime}
              </Typography>
              <Typography >
                <AddDanceItemButton onAfterSubmit={loadDances} />
              </Typography>
            </CardContent>
            <ChangeField key={danceItem.id} {...danceItem} onChange={loadDances} />
          </Card>
          </Box>

          
      ))}
     
    </Box>
  )
}