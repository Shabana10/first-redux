import { Box, TextField, Button }
    from '@mui/material'
    import { useState } from 'react'
    import { useDispatch } from 'react-redux'
    import {addBook} from '../store/actions'
    import { useNavigate } from 'react-router-dom'

function AddBook() {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const result = {title, price}
        dispatch(addBook(result))
        navigate('/list')
    }

    return (
        <div>
            <h1>Add Book here</h1>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ m: 'auto', width: '500px'}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="text"
              label="Book Name"
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Book Now
            </Button>
          </Box>

        </div>
    )
}

export default AddBook
