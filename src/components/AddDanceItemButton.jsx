import { Fab } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { useState } from 'react'
import ChangeFieldEdit from './ChangeFieldEdit'

export default function AddDanceItemButton({ onAfterSubmit }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)

  return (
    <>
      <Fab
        color="primary"
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
        onClick={open}
      >
        <AddIcon />
      </Fab>
      <ChangeFieldEdit
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onAfterSubmit={onAfterSubmit}
      />
    </>
  )
}