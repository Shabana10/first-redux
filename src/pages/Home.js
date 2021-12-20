import { Button } from '@mui/material'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { useNavigate } from 'react-router-dom';
import QuiltedImageList from '../components/ImageLibrary';


function Home() {
    const navigate = useNavigate()
    const yourBook = () => {
        navigate('/add')
    }
    return (
        <div>
            <QuiltedImageList />
            <h1>Welcome to Book Store</h1>
            <Button variant="contained" endIcon={<AddCircleRoundedIcon />}
                onClick={yourBook}>
                Add Book
            </Button>
        </div>
    )
}

export default Home
