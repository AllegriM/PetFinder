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
import { useState } from 'react';
import FormErrors from '../../components/FormErrors';
import GoogleIcon from '../../components/Icons/GoogleIcon'
import { useAuth } from '../../context/authContext';
import useValidateForm, { EMAIL_REGEX, PASSWORD_REGEX } from '../../hooks/useValidateForm';

const LoginForm = ({ setLoginView }) => {

    const { loginWithGoogle, signIn, registerError } = useAuth()

    const [user, setUser] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        formErrors: { name: '', lastName: '', email: '', password: '', general: '' },
        generalValid: false,
        nameValid: false,
        lastNameValid: false,
        emailValid: false,
        passwordValid: false,
    })

    const newObj = Object.keys(user.formErrors).reduce((accumulator, key) => {
        return { ...accumulator, [key]: '' };
    }, {});

    const handleChangeUser = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            formErrors: newObj,
            [name]: value
        })
    }

    const handleSubmitUser = (e) => {
        e.preventDefault();
        useValidateForm({ newUser: user, setNewUser: setUser, formType: 'logIn' })
        if (user.email.match(EMAIL_REGEX) && user.password.match(PASSWORD_REGEX)) {
            signIn(user.email, user.password)
        }
    }

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
                        <FormErrors formErrors={user.formErrors} DBerrors={registerError} />
                        <FormControl id="email" isRequired>
                            <FormLabel htmlFor='email'>Correo electronico</FormLabel>
                            <Input onChange={(e) => handleChangeUser(e)} name='email' type="email" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel htmlFor='password'>Contraseña</FormLabel>
                            <Input onChange={(e) => handleChangeUser(e)} name='password' type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                justify='flex-end'
                            >
                                <Link color={'blue.400'}>Olvidaste tu contraseña?</Link>
                            </Stack>
                            <Button
                                onClick={handleSubmitUser}
                                colorScheme={'blue'}
                            >
                                Ingresa
                            </Button>
                        </Stack>
                        <Button onClick={loginWithGoogle} colorScheme={'gray'}>
                            <GoogleIcon size='1.5em' />
                        </Button>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                No tienes cuenta? <Link color={'blue.400'} onClick={() => setLoginView(false)} >Registrate</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default LoginForm