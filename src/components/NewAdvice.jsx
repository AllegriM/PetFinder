import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import NewAdviceDescription from './NewAdviceDescription'
import NewAdviceImage from './NewAdviceImage'
import NewAdviceTime from './NewAdviceTime'
import NewAdviceType from './NewAdviceType'
import SearchBar from './SearchBar'

function NewAdvice({ isOpen, onClose }) {

    return (
        <Drawer onClose={onClose} isOpen={isOpen} size="xl">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader fontWeight={900}>Crear busqueda nueva</DrawerHeader>
                <DrawerBody>
                    <SearchBar />
                    <NewAdviceDescription />
                    <NewAdviceImage />
                    <NewAdviceType />
                    <NewAdviceTime />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default NewAdvice