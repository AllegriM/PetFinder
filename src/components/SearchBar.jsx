import React, { useEffect, useState } from 'react'
import { Input, Button, FormControl, Text, Icon, Stack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useForm } from "react-hook-form";
import { IoLocationSharp, IoPaw } from 'react-icons/io5'
import 'leaflet/dist/leaflet.css';
import { fetchStreetQuery } from '../services/fetchStreetQuery';
import { useDispatch } from 'react-redux';
import { addAdvice } from '../features/adviceSlice';


function SearchBar() {

    const dispatch = useDispatch()

    const [searchText, setSearchText] = useState("")
    const [placeOptions, setPlaceOptions] = useState([])
    // const [selectedOption, setSelectedOption] = useState()

    const { register,
        handleSubmit,
        // formState: { errors } 
    }
        =
        useForm({ place: "" });
    const onSubmit = data => setSearchText(data);

    useEffect(() => {
        fetchStreetQuery(searchText.place).then(data => setPlaceOptions(data))
    }, [searchText])

    return (
        <FormControl as='form' pos='relative' maxW='400px' onSubmit={handleSubmit(onSubmit)} m='1em 0'>
            <Text mb={2} fontWeight='600' display='flex' alignItems='center' gap={1}><IoPaw/>Ubicacion</Text>
            <Input
                {...register("place", { required: "This is required" })}
                // value={selectedOption}
                placeholder='¿Ubicación de la mascota perdida... ?'
                type='text'
                bg='white'
                color='black'
                pr={10}
            />
            {
                placeOptions?.map(option => {
                    return(
                        <Stack border='1px solid lightgray' key={option.place_id} onClick={() => dispatch(addAdvice({option}))} cursor='pointer'>
                            <Text fontSize={14} display='flex' alignItems='center'><Icon as={IoLocationSharp} color='red' />{option.display_name}</Text>
                        </Stack>
                        )
                })
            }
            {/* <Text color='red'>{errors.place?.message}</Text> */}
            <Button zIndex={2} variant='unstyled' pb={1} pos='absolute' right='0'><SearchIcon color='black' /></Button>
        </FormControl>
    )
}

export default SearchBar