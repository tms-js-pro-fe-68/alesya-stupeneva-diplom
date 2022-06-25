import { IconButton, Paper, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material'
import Click from "./Click"
import ChangeFieldEdit from "./ChangeFieldEdit"




export default function AddField({ id, done, onChange }) {

    const [isEditOpen, setIsEditOpen] = useState(false)
    const openEdit = () => setIsEditOpen(true)
  
    const [isDone, setIsDone] = useState(done)
  
    useEffect(() => {
      setIsDone(done)
    }, [done])
  
    const handleClick = async () => {
      setIsDone((prevIsDone) => {
        fetch(`https://tms-js-pro-back-end.herokuapp.com/api/dance-exercises/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Token ${sessionStorage.token}`,
          },
          body: JSON.stringify({ done: !prevIsDone }),
        })
  
        return !prevIsDone
      })
  
      onChange()
    }
  
    return (
      <>
        <Paper onClick={handleClick}  sx={{ p: 2, pl: 3 }}>
        <Click>
            <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
              <IconButton edge="end" onClick={openEdit}>
                <AddIcon />
              </IconButton>
              
            </Stack>
          </Click>
        </Paper>
        <ChangeFieldEdit
        id={id}
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onAfterSubmit={onChange}
      />
        
      </>
    )
  }