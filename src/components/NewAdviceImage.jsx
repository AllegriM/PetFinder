import { Button, FormControl, FormLabel, Grid, Img, Input, Stack, Text } from "@chakra-ui/react";
import { IoPaw } from 'react-icons/io5'
import { AiOutlineInbox } from "react-icons/ai";
import { useState } from "react";
import { MdCancel } from "react-icons/md";

const MAX_IMAGE_AMOUNT = 5;

function NewAdviceImage( {setUploadedImages, uploadedImages} ) {

    const [fileLimit, setFileLimit] = useState(false)

    const handleUploadedFiles = files => {
        const uploaded = [...uploadedImages]
        let limitedExceeded = false
        files.some(file => {
            if( uploaded.findIndex(f => f.name === file.name) === -1 ){
                uploaded.push(file)
                if(uploaded.length === MAX_IMAGE_AMOUNT) setFileLimit(true)
                if (uploaded.length > MAX_IMAGE_AMOUNT) {
                    setFileLimit(false)
                    limitedExceeded = true
                    return true
                }
            }
        })
        if(!limitedExceeded) setUploadedImages(uploaded)
    }

    const fileSelectHandler = (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadedFiles(chosenFiles)
        // const reader = new FileReader()
        // console.log(URL.createObjectURL(file))
        // setPhoto(URL.createObjectURL(file))
    }

    const deleteImg = () => {

    }

    return (
        <Stack m='2em 0' maxWidth='400px'>
            {/* <Input border='none' type="file" /> */}
            <Text fontWeight='600' display='flex' alignItems='center' gap={1}><IoPaw />Fotos</Text>
            <FormControl >
                {
                    !fileLimit ? 
                    <Input display='none' w='100%' h='100%' onChange={fileSelectHandler} type="file" id="input-file-upload" multiple={true} accept="image/*" />
                    :
                    null
                }
                <FormLabel cursor='pointer' id="label-file-upload" htmlFor="input-file-upload" border='2px dashed #D3D3D3' borderRadius={5} p={4}>
                    <Stack align='center'>
                        <AiOutlineInbox size='1.75em' />
                        <Text fontWeight={700} textAlign='center'>Cargue imágenes aqui</Text>
                        <Text fontSize={14} textAlign='center'>Maximo 5 imágenes.</Text>
                    </Stack> 
                </FormLabel>
            </FormControl>
            <Grid gridTemplateColumns='repeat(auto-fit, minmax(25px, 1fr))'>
                {
                    uploadedImages.map((file, i) => {
                        console.log(file)
                        return(
                            <Stack key={i} pos='relative'>
                                <Button p='0' right='25px' top='5px' pos='absolute' h='10px' w='25px' maxW='25px' borderRadius='50%' onClick={deleteImg}><MdCancel color="red" /></Button>
                                <Img cursor='pointer' objectFit='cover' w='50px' h='50px'  src={URL.createObjectURL(file)} />
                            </Stack>
                        )
                    })
                }
            </Grid>
        </Stack>
        
    )
}

export default NewAdviceImage