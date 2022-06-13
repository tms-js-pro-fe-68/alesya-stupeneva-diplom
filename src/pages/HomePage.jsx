
import Page from "../components/Page";
import AppBar from "../components/AppBar";
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Stack, Typography } from "@mui/material";
import { useDancesGet } from '../query/dances'
import { useAppContext } from "../components/AppContext";


export default function HomePage() {

    const { data: dances = [] } = useDancesGet()
  
    const { cart } = useAppContext()
  
  
return(
  <Page>  
      <AppBar />
  <Box
        sx={{
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
        {dances.map(dance => (
          <Card key={dance.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image={dance.imageUrl}
              alt="dance"
            />
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle1" color="text.secondary">
                  {dance.name}
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                {dance.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              {/* <PizzasPageOrderAction id={dance.id} /> */}
            </CardActions>
          </Card>
        ))}
      </Box>
      {JSON.stringify(cart)}
  </Page>
);
}