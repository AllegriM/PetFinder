import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
} from '@chakra-ui/react';
import GoogleIcon from '../../components/Icons/GoogleIcon'

const LoginForm = ({ setLoginView }) => {

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            w={'100%'}
        >
            <Stack spacing={8} mx={'auto'} w={'100%'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Ingresa a tu cuenta</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        para empezar a buscar <Link color={'blue.400'}>mascotas</Link> 🐶
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={('white')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Correo electronico</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Contraseña</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                justify='flex-end'
                            >
                                <Link color={'blue.400'}>Olvidaste tu contraseña?</Link>
                            </Stack>
                            <Button
                                colorScheme={'blue'}
                            >
                                Ingresa
                            </Button>
                        </Stack>
                        <Button colorScheme={'gray'}>
                            <GoogleIcon size='1.5em' />
                        </Button>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                No tienes cuenta? <Link color={'blue.400'} onClick={() => setLoginView(false)} >Ingresa</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default LoginForm