import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack } from '@chakra-ui/react'
import NewAdviceDescription from './NewAdviceDescription'
import NewAdviceImage from './NewAdviceImage'
import NewAdviceTime from './NewAdviceTime'
import NewAdviceType from './NewAdviceType'
import NewAdviceLocation from './NewAdviceLocation'
import { useDispatch } from 'react-redux'
import { createAdvice } from '../features/adviceSlice'
import { useState } from 'react'

function NewAdvice({ isOpen, onClose }) {

    const dispatch = useDispatch()

    const [time, setTime] = useState([0, 15])
    const [description, setDescription] = useState("")
    const [locationOption, setLocationOption] = useState({})
    const [uploadedImages, setUploadedImages] = useState([])
    const [value, setValue] = useState("dog")

    const createNewAdvice = () => {
        dispatch(createAdvice({location: locationOption, uploadedImages, description, time: time[1], typeOfPet: value}))
    }

    return (
        <Drawer onClose={onClose} isOpen={isOpen} size="xl">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader fontWeight={900}>Crear busqueda nueva</DrawerHeader>
                <DrawerBody display='flex' gap={6} flexWrap='wrap'>
                    <Stack minW='300px' maxW='400px' w='100%'>
                        <NewAdviceLocation setLocationOption={setLocationOption} />
                        <NewAdviceDescription setDescription={setDescription} />
                        <NewAdviceType setValue={setValue} />
                    </Stack>
                    <Stack minW='300px' maxW='400px' w='100%'>
                        <NewAdviceImage setUploadedImages={setUploadedImages} uploadedImages={uploadedImages} />
                        <NewAdviceTime time={time} setTime={setTime} />
                    </Stack>
                </DrawerBody>
                <Button variant='unstyled' bg='grey' onClick={createNewAdvice}>Crear nuevo aviso</Button>
            </DrawerContent>
        </Drawer>
    )
}

export default NewAdvice