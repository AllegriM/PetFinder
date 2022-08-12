import { Stack, Text, Textarea } from "@chakra-ui/react"
import { IoPaw } from 'react-icons/io5'

function NewAdviceDescription() {
    return (
        <Stack m='2em 0'>
            <Text fontWeight='600' display='flex' alignItems='center' gap={1}><IoPaw/>Descripción</Text>
            <Textarea maxW='400px' h='120px' resize='none' placeholder="Descripción de la mascota encontrada..." />
        </Stack>
    )
}

export default NewAdviceDescription