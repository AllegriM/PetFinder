import { HamburgerIcon } from "@chakra-ui/icons"
import { Heading, HStack, Stack } from "@chakra-ui/react"

function NavBar() {
    return (
        <HStack bg='white' w='100%' h='50px' boxShadow='0px 0px 10px -6px rgba(0,0,0,0.74)'>
            <Stack
                display={["none", "none", "block", "block", "block"]}
                px={["0.35rem", "0.5rem", "1rem", "1.5rem", "2rem"]}
            >
                <Heading color='#8B521C'>PetRescue</Heading>
            </Stack>
            <Stack
                display={["block", "block", "none", "none", "none"]}
                px={["0.35rem", "0.5rem", "1rem", "1.5rem", "2rem"]}
                fontSize='2em'
                fontWeight='900'
                color='#8B521C'
            >
                <HamburgerIcon display='flex' color='choco.500' />
            </Stack>


        </HStack>
    )
}

export default NavBar