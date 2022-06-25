
  import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
  
  export default function ChangeFieldEdit({
    id,
    onClose,
    onAfterSubmit,
    ...otherProps
  }) {
    const [description, setDescription] = useState('')
  
    const loadDance = () => {
      fetch(`https://tms-js-pro-back-end.herokuapp.com/api/dance-exercises/${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${sessionStorage.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setDescription(data.description))
    }
  
    useEffect(() => {
      if (!id) return
      loadDance()
    }, [])
  
    const modifyDance = async () => {
      const changeId = id ? `/${id}` : ''
      await fetch(
        `https://tms-js-pro-back-end.herokuapp.com/api/dance-exercises${changeId}`,
        {
          method: id ? 'PUT' : 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Token ${sessionStorage.token}`,
          },
          body: JSON.stringify({ description }),
        },
      )
      onAfterSubmit()
      onClose()
    }
  
    return (
      <Dialog {...{ onClose, ...otherProps }}>
        <DialogTitle>{id ? 'Edit' : 'Add'} dance</DialogTitle>
        <DialogContent>
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={modifyDance} autoFocus variant="contained">
            {id ? 'Edit' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    )
  }