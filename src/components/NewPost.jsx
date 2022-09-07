import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack } from '@chakra-ui/react'
import NewPostDescription from './NewPostDescription'
import NewPostImage from './NewPostImage'
import NewPostTime from './NewPostTime'
import NewPostType from './NewPostType'
import NewPostLocation from './NewPostLocation'
import { useDispatch } from 'react-redux'
import { createPost } from '../features/postSlice'
import { useState } from 'react'

function NewPost({ isOpen, onClose }) {

    const dispatch = useDispatch()

    const [time, setTime] = useState([0, 15])
    const [description, setDescription] = useState("")
    const [locationOption, setLocationOption] = useState("")
    const [uploadedImages, setUploadedImages] = useState([])
    const [value, setValue] = useState("dog")

    const createNewPost = async() => {
        if (description.length === 0) return
        if(Object.keys(locationOption).length === 0) return
        dispatch(createPost({location: locationOption, uploadedImages, description, time: time[1], typeOfPet: value}))
        onClose()
    }

    return (
        <Drawer onClose={onClose} isOpen={isOpen} size="xl">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader fontWeight={900}>Crear busqueda nueva</DrawerHeader>
                <DrawerBody display='flex' gap={6} flexWrap='wrap'>
                    <Stack minW='300px' maxW='400px' w='100%'>
                        <NewPostLocation setLocationOption={setLocationOption} />
                        <NewPostDescription setDescription={setDescription} />
                        <NewPostType setValue={setValue} />
                    </Stack>
                    <Stack minW='300px' maxW='400px' w='100%'>
                        <NewPostImage setUploadedImages={setUploadedImages} uploadedImages={uploadedImages} />
                        <NewPostTime time={time} setTime={setTime} />
                    </Stack>
                </DrawerBody>
                <Button variant='unstyled' bg='grey' onClick={createNewPost}>Crear nuevo aviso</Button>
            </DrawerContent>
        </Drawer>
    )
}

export default NewPost