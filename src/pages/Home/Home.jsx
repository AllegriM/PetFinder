import Map from '../../components/Map'
import NavBar from '../../components/NavBar'
import { Stack } from '@chakra-ui/react'

function Home() {
    return (
        <Stack maxW='700px' w='100%'>
            <NavBar />
            <Map />
        </Stack>
    )
}

export default Home