import { FormControl, FormLabel, Grid, Img, Input, Stack, Text } from "@chakra-ui/react";
import { IoPaw } from 'react-icons/io5'
import { AiOutlineInbox } from "react-icons/ai";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
// import { v4 as uuid } from 'uuid';


const MAX_IMAGE_AMOUNT = 5;

function NewPostImage( {setUploadedImages, uploadedImages} ) {
    const [fileLimit, setFileLimit] = useState(false)
    // const unique_id = uuid();

    const handleUploadedFiles = files => {
        console.log(files)
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
        const fileSelected = e.target.files
        // console.log(fileSelected)
        const chosenFiles = Array.prototype.slice.call(fileSelected)
        console.log(chosenFiles)
        handleUploadedFiles(chosenFiles)
    }

    const deleteImg = (_, name) => {
        setUploadedImages(uploadedImages.filter(img => img.name !== name))
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
                <FormLabel opacity={!fileLimit ? "" : "0.4"} cursor='pointer' id="label-file-upload" htmlFor="input-file-upload" border='2px dashed #D3D3D3' borderRadius={5} p={4}>
                    <Stack align='center'>
                        <AiOutlineInbox size='1.75em' />
                        <Text fontWeight={700} textAlign='center'>Cargue imágenes aqui</Text>
                        <Text fontSize={14} textAlign='center'>Maximo 5 imágenes.</Text>
                    </Stack> 
                </FormLabel>
            </FormControl>
            <Grid gridTemplateColumns='repeat(auto-fit, minmax(50px, 50px))' gap='34px'>
                {
                    uploadedImages.map((file, i) => {
                        return(
                            <Stack key={i} pos='relative'>
                                <Stack bg='white' borderRadius='50%' pos='absolute' right='-10px' cursor='pointer' onClick={(_) => deleteImg(_, file.name)} w='20px'>
                                    <MdCancel size='1.25em' color="red" />
                                </Stack>
                                <Img border='1px solid rgb(211,211,211, 0.4)' objectFit='contain' w='50px' h='50px'  src={URL.createObjectURL(file)} />
                            </Stack>
                        )
                    })
                }
            </Grid>
        </Stack>
        
    )
}

export default NewPostImage