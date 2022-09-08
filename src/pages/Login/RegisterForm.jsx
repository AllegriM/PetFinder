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

const NAME_REGEX = /^[a-zA-Z]{3,}$/;
// eslint-disable-next-line no-useless-escape
const EMAIL_REGEX = /^[\w-\.] +@([\w -] +\.) +[\w-]{2,4}$/g;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

import React from 'react'

function FormErrors({ formErrors }) {

    return (
        Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <Stack key={i} spacing={0}>
                        <Text fontSize={'sm'} color={'red.500'} px={'2'}>{formErrors[fieldName]}</Text>
                    </Stack>
                )
            } else {
                return ''
            }
        })
    )
}

// export default FormErrors

export default function RegisterForm({ setLoginView }) {

    const { signUp } = useAuth();

    const [newUser, setNewUser] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        formErrors: { name: '', lastName: '', email: '', password: '' },
        nameValid: false,
        lastNameValid: false,
        emailValid: false,
        passwordValid: false,
    })

    const [showPassword, setShowPassword] = useState(false);

    const handleChangeNewUser = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value
        })
        validateField(name, value)
    }

    const validateField = (fieldName, value) => {
        let fieldValidationErrors = newUser.formErrors;
        let nameValid = newUser.nameValid;
        let lastNameValid = newUser.lastNameValid;
        let emailValid = newUser.emailValid;
        let passwordValid = newUser.passwordValid;

        switch (fieldName) {
            case 'name':
                nameValid = value.match(NAME_REGEX) || value === "";
                fieldValidationErrors.name = nameValid ? '' : 'Ingrese un nombre válido';
                break;
            case 'lastName':
                lastNameValid = value.match(NAME_REGEX) || value === "";
                fieldValidationErrors.lastName = lastNameValid ? '' : 'Ingrese un apellido válido';
                break;
            case 'email':
                emailValid = value.match(EMAIL_REGEX) || value === "";
                fieldValidationErrors.email = emailValid ? '' : 'Correo electronico inválido';
                break;
            case 'password':
                passwordValid = value.match(PASSWORD_REGEX) || value === "";
                fieldValidationErrors.password = passwordValid ? '' : 'Contraseña inválida';
                break;
            default:
                break;
        }
        setNewUser({
            ...newUser,
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        });
    }

    const handleSubmitNewUser = (e) => {
        e.preventDefault();
        if (newUser.name.match(NAME_REGEX) && newUser.lastName.match(NAME_REGEX) && newUser.email.match(EMAIL_REGEX) && newUser.password.match(PASSWORD_REGEX)) {
            signUp(newUser.name, newUser.lastName, newUser.email, newUser.password)
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
                        <FormErrors formErrors={newUser.formErrors} />
                        <HStack>
                            <Box>
                                <FormControl id="name" isRequired>
                                    <FormLabel htmlFor='name'>Nombre</FormLabel>
                                    <Input
                                        onChange={(e) => handleChangeNewUser(e)}
                                        isRequired
                                        pattern='[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]'
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
                                        pattern='[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]'
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
                                pattern='[\w-\.]+@([\w-]+\.)+[\w-]{2,4}'
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
                                    pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}'
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