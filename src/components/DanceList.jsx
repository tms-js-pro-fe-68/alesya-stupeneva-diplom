import { Box } from '@mui/material'
import ChangeField from './ChangeField'


export default function DanceList({ dancess, loadDances }) {
  return (
    <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr', p: 2 }}>
      {dancess.map((danceItem) => (
        <ChangeField key={danceItem.id} {...danceItem} onChange={loadDances} />
      ))}
    </Box>
  )
}