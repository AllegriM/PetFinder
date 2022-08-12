import { Button, Heading, Img, Stack, Text } from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'
import dog from '../../imgs/beagle.png'
// import bg from '../src/imgs/background.jpeg'
import cat from '../../imgs/cat.png'

function ViewMode() {

    const navigate = useNavigate()

    return (
        // <Stack style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat'}} w='100%' h='100%' align='center'>
        <Stack pos='relative' w='100%' flexGrow='1' justify='center' align='center' maxW='800px' gap={5}>
            <Heading as='h2' size='3xl' color='#8B521C'>PetRescue</Heading>
            <Stack bg='rgba(255, 255, 255, 0.5)' maxW='450px' w='100%' h='400px' align='center' borderRadius={6} boxShadow='2px 2px 2px 1px rgba(0, 0, 0, 0.2)'>
                <Text textAlign='center' fontSize={25} fontWeight="700" mt={10} color='black'>¿Como desea ingresar?</Text>
                <Stack justify='center' flexGrow={.75} gap={5}>
                    <Button onClick={() => navigate('/home')} variant="unstyled" color='white' bg='#8B521C' w='270px'>Buscar Mascotas</Button>
                    <Button onClick={() => navigate('/home')} variant="unstyled" color='white' bg='#8B521C' w='270px'>Publicar Mascotas</Button>
                </Stack>
            </Stack>
            <Img userSelect='none' pos='absolute' left={10} src={dog} w='230px' h='230px' />
            <Img userSelect='none' pos='absolute' right={0} top='50%' src={cat} w='230px' h='230px' />
            {/* <Img pos='absolute' left={20} top='55%' src={dog2} w='170px' h='200px' /> */}
        </Stack>
        // </Stack>
    )
}

export default ViewMode
