import { Box } from '@mui/material'
import ChangeField from './ChangeField'


export default function DanceList({ dances, loadDances }) {
  return (
    <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr', p: 2 }}>
      {dances.map((danceItem) => (
        <ChangeField key={danceItem.id} {...danceItem} onChange={loadDances} />
      ))}
    </Box>
  )
}