import { Input, Stack, Text } from "@chakra-ui/react";
import { IoPaw } from 'react-icons/io5'


function NewAdviceImage() {

    const fileSelectHandler = (e) => {
        console.log(e.target.files[0])
    }

    return (
        <Stack m='2em 0' maxWidth='400px'>
            <Text fontWeight='600' display='flex' alignItems='center' gap={1}><IoPaw />Fotos</Text>
            <Input onChange={fileSelectHandler} border='none' type="file" accept=".jpg, .jpeg, .png"/>
        </Stack>
    )
}

export default NewAdviceImage