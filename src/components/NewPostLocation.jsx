import React, { useEffect, useState } from 'react'
import { Input, Button, FormControl, Text, Icon, Stack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useForm } from "react-hook-form";
import { IoLocationSharp, IoPaw } from 'react-icons/io5'
import 'leaflet/dist/leaflet.css';
import { fetchStreetQuery } from '../services/fetchStreetQuery';


function NewPostLocation( {setLocationOption, locationOption} ) {

    const [searchText, setSearchText] = useState("")
    const [placeOptions, setPlaceOptions] = useState([])

    const selectLocationOption = (option) => {
        setLocationOption({lat: option.lat, lon: option.lon, id: option.osm_id, name: option.display_name, address: option.address})
    }

    const { register, handleSubmit } = useForm({ place: "" });
        
    const onSubmit = data => setSearchText(data);

    useEffect(() => {
        fetchStreetQuery(searchText.place).then(setPlaceOptions)
    }, [searchText])

    return (
        <FormControl as='form' pos='relative' maxW='400px' onSubmit={handleSubmit(onSubmit)} m='1em 0'>
            <Text mb={2} fontWeight='600' display='flex' alignItems='center' gap={1}><IoPaw/>Ubicacion</Text>
            <Input
                {...register("place", { required: "This is required" })}
                placeholder='¿Ubicación de la mascota perdida... ?'
                value={locationOption}
                type='text'
                required
                bg='white'
                color='black'
                pr={10}
            />
            <Stack>
            {
                placeOptions?.map(option => {
                    console.log(option)
                    // const specificOptionData = `${option.address.road === undefined ? "" : option.address.road} ${option.address.house_number === undefined ? "" : option.address.house_number} ${option.address.town === undefined ? "" : option.address.town}`
                    return(
                        <Stack key={option.place_id} onClick={() => selectLocationOption(option)} border='1px solid lightgray' cursor='pointer'>
                            <Text fontSize={14} display='flex' alignItems='center'><Icon as={IoLocationSharp} color='red' />
                            {option.display_name}
                            {/* {option.address.road || option.address.house_number || option.address.town? `${specificOptionData}, ${option?.address?.state}` : `${option?.address?.state}`} */}
                            </Text>
                        </Stack>
                        )
                    })
            }
            </Stack>
            <Button zIndex={2} variant='unstyled' pb={1} pos='absolute' right='0'><SearchIcon color='black' /></Button>
        </FormControl>
    )
}

export default NewPostLocation