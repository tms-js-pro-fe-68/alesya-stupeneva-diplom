
import Page from "../components/Page";
import AppBar from "../components/AppBar";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Collapse, IconButton, Stack, TextField, Typography } from "@mui/material";
import { useDancesGet } from '../query/dances'
import { useAppContext } from "../components/AppContext";
import { useEffect, useState } from "react";
import { Expand as ExpandMore, Delete as DeleteIcon, Add as AddIcon } from "@mui/icons-material";
// import ConfirmDialog from "../components/ConfirmDialog";
import ChangeField from "../components/ChangeField";
import AddField from "../components/AddField";
import DanceList from "../components/DanceList";
import api from "../api";

const PAGE_SIZE = 4

export default function HomePage( id, onChange) {
  
    const { data: dances = [] } = useDancesGet()
  
    const { cart } = useAppContext()

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    }; 
    const [search, setSearch] = useState('')
  const [sort, setSort] = useState('change')
    const [dancess, setDances] = useState([])
    const [page, setPage] = useState(1)
    const loadDances = (description, currentSort, currentPage) => {
      api
        .get(`/todos`, {
          params: {
            description,
            sort: currentSort,
            page: currentPage,
            pageSize: PAGE_SIZE,
          },
        })
        .then(({ data }) => setDances(data))
    }
  
    useEffect(() => {
      loadDances(search, sort, page)
    }, [search, sort, page])
  
   
return(
  <Page>  
      <AppBar />
      <TextField value={search} onChange={(e) => setSearch(e.target.value)} />
      <Button
        onClick={() =>
          setSort((prevSort) => (prevSort === 'change' ? 'desc' : 'change'))
        }
      >
        {sort}
      </Button>
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
        {dances.map(dance => (
          <Card key={dance.id} sx={{ maxWidth: 345, p: 3, m:3 }}>
            <CardMedia
            a={console.log(dance)}
              component="img"
              height="194"
              image={dance.imageUrl}
              alt="dance"
            />
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle1" color="text.secondary">
                  {dance.title}
                </Typography>
              </Stack>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                  {dance.description}
                  </Typography>
                </CardContent>
              </Collapse>
              <Typography variant="body2" color="text.secondary">
                {dance.startTime}
              </Typography>
              <Typography >
                <ChangeField />
                <DanceList {...{dancess, loadDances}} />
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <AddField />
      <Stack direction="row" sx={{ justifyContent: 'center', width: 1, p: 3 }}>
        <Stack direction="row" spacing={1}>
          {[1, 2, 3 ].map((p) => (
            <Button
              key={p}
              variant={p === page ? 'contained' : 'outlined'}
              onClick={() => setPage(p)}
            >
              {p}
            </Button>
          ))}
        </Stack>
      </Stack>
      {JSON.stringify(cart)}
  </Page>
);
}