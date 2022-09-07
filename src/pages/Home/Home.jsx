import Map from '../../components/Map'
// import NavBar from '../../components/NavBar'
import { Button, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

function Home() {

    const navigate = useNavigate()
    const { hello } = useAuth()
    console.log(hello)
    return (
        <Stack maxW='700px' w='100%'>
            {/* <NavBar /> */}
            <Button onClick={() => navigate('/posts')}>Ver posts</Button>
            <Map />
        </Stack>
    )
}

export default Home