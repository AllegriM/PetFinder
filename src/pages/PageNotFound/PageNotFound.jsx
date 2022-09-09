import { Button, Container, Heading, Img, Stack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import cryingDog from "../../imgs/404dog.webp"

const PageNotFound = () => {

    const navigate = useNavigate()

    return (
        <Container height='100%'>
            <Stack height='100%' justify='center' align='center'>
                <Img src={cryingDog} alt='Dog crying' />
                <Heading textAlign='center'>Pagina no encotrada!</Heading>
                <Button onClick={() => navigate('/home')} w={'70%'} colorScheme="blackAlpha" variant={'solid'} >Volver</Button>
            </Stack>
        </Container>
    )
}

export default PageNotFound