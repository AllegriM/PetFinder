import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react"
import { FaCat, FaDog } from 'react-icons/fa'
import { useState } from 'react'
import { IoPaw } from 'react-icons/io5'

function NewAdviceType() {

    const [value, setValue] = useState("dog")
    return (
        <Stack m='2em 0' maxW='400px'>
            <Text fontWeight='600' display='flex' alignItems='center' gap={1}><IoPaw />Tipo</Text>
            <RadioGroup onChange={setValue} value={value}>
                <Stack direction='row' justify='space-around'>
                    <Radio value='dog'><FaDog />Perro</Radio>
                    <Radio value='cat'><FaCat />Gato</Radio>
                </Stack>
            </RadioGroup>
        </Stack>
    )
}

export default NewAdviceType
