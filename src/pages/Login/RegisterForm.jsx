import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import NoViewIcon from '../../components/Icons/NoViewIcon';
import ViewIcon from '../../components/Icons/ViewIcon';
import { useAuth } from '../../context/authContext';
import React from 'react'
import useValidateForm, { EMAIL_REGEX, NAME_REGEX, PASSWORD_REGEX } from '../../hooks/useValidateForm';
import FormErrors from '../../components/FormErrors';

export default function RegisterForm({ setLoginView }) {

    const { signUp, registerError } = useAuth();

    const [newUser, setNewUser] = useState({
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

    const [showPassword, setShowPassword] = useState(false);

    const newObj = Object.keys(newUser.formErrors).reduce((accumulator, key) => {
        return { ...accumulator, [key]: '' };
    }, {});

    const handleChangeNewUser = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            formErrors: newObj,
            [name]: value
        })
    }

    const handleSubmitNewUser = async (e) => {
        e.preventDefault();
        useValidateForm({ newUser, setNewUser })
        if (newUser.name.match(NAME_REGEX) && newUser.lastName.match(NAME_REGEX) && newUser.email.match(EMAIL_REGEX) && newUser.password.match(PASSWORD_REGEX)) {
            signUp(newUser.email, newUser.password, newUser.name, newUser.lastName)
        }
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Registrate
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        para publicar y encontrar <Link color={'blue.400'}>mascotas</Link> 🐱
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={('white')}
                    boxShadow={'lg'}
                    p={8}
                >
                    <Stack spacing={4} pt={3} position={'relative'}>
                        <FormErrors DBerrors={registerError} formErrors={newUser.formErrors} />
                        <HStack>
                            <Box>
                                <FormControl id="name" isRequired>
                                    <FormLabel htmlFor='name'>Nombre</FormLabel>
                                    <Input
                                        onChange={(e) => handleChangeNewUser(e)}
                                        isRequired
                                        title='Maximo 20 caracteres y no puede contener numeros'
                                        placeholder='Nombre'
                                        name='name'
                                        type="text"
                                    />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                    <FormLabel htmlFor='lastName'>Apellido</FormLabel>
                                    <Input
                                        onChange={(e) => handleChangeNewUser(e)}
                                        isRequired
                                        title='Maximo 20 caracteres y no puede contener numeros'
                                        placeholder='Apellido'
                                        name='lastName'
                                        type="text"
                                    />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel htmlFor='email'>Correo electronico</FormLabel>
                            <Input
                                onChange={(e) => handleChangeNewUser(e)}
                                isRequired
                                title='Correo electronico invalido, intente con otro'
                                placeholder='Correo electronico'
                                name='email'
                                type="email"
                            />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel htmlFor='password'>Contraseña</FormLabel>
                            <InputGroup>
                                <Input
                                    onChange={(e) => handleChangeNewUser(e)}
                                    isRequired
                                    title='Minimo 8 caracteres, al menos una letra mayuscula, una minuscula y un numero'
                                    placeholder='Contraseña'
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        p={0}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon size='1.25em' /> : <NoViewIcon size='1.25em' />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                onClick={handleSubmitNewUser}
                                loadingText="Submitting"
                                size="lg"
                                colorScheme={'blue'}
                            >
                                Registrate
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Ya tenes cuenta? <Link color={'blue.400'} onClick={() => setLoginView(true)}>Ingresa</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}