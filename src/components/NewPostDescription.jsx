import { Stack, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { IoPaw } from 'react-icons/io5'

function NewPostDescription( {setDescription} ) {

    const [error, setError] = useState(false)

    const writeDescription = (e) => {
        setError(false)
        if(e.target.value.length === 0) {
            setError(true)
        }
        setDescription(e.target.value)
    }
    
    return (
        <Stack m='2em 0'>
            <Text fontWeight='600' display='flex' alignItems='center' gap={1}><IoPaw/>Descripción</Text>
            <Textarea required onChange={writeDescription} maxW='400px' h='120px' resize='none' placeholder="Descripción de la mascota encontrada..." />
            {
                error && <Text color='red.500' fontSize={12}>Este campo es obligatorio</Text>
            }
        </Stack>
    )
}

export default NewPostDescription