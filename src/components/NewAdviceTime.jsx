import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { IoPaw } from 'react-icons/io5'

function NewAdviceTime() {

    const [time, setTime] = useState([0, 15])
    console.log(time)
    return (
        <Stack maxW='400px' gap={3}>
            <Stack direction='row' align='center' justify='space-between'>
                <Text fontWeight='600' display='flex' alignItems='center' gap={1}><IoPaw />Descripción</Text>
                <Text>{`${time[1]}min.`}</Text>
            </Stack>
            <RangeSlider onChangeEnd={(val) => setTime(val)} mt='2em' defaultValue={[0, 15]} min={0} max={60} step={15}>
                <RangeSliderTrack bg='red.100'>
                    <RangeSliderFilledTrack bg='brown' />
                </RangeSliderTrack>
                <RangeSliderThumb isDisabled='true' boxSize={6} index={0} />
                <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
        </Stack>
    )
}

export default NewAdviceTime