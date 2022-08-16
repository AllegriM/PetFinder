import { Badge, Button, Grid, Img, Stack, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Posts() {
    const navigate = useNavigate()
    const postsInfo = useSelector(data => data.advice)

    return (
        <Stack px={10} w='100%'>
            <Button onClick={() => navigate('/home')}>Ir al Inicio</Button>
            <Grid gridTemplateColumns='repeat(auto-fit, minmax(320px, 320px))' gap={4} >
                {
                    postsInfo.length === 0 ?
                        <Text>No hay publicaciones por el momento.</Text>
                        :
                        <Stack>
                            {
                                postsInfo.map((advice, index) => {
                                    console.log(advice)
                                    return (
                                        <Stack key={index} bg='white' maxW='290px' minH='420px' h='100%' borderRadius={8}>
                                            <Stack overflowX='visible' pos='relative'>
                                                <Swiper
                                                modules={[Navigation, Thumbs, Pagination]}
                                                slidesPerView={1}
                                                navigation
                                                pagination={{ clickable: true }}
                                                >
                                                    {
                                                        advice.uploadedImages.map((img, index) => {
                                                            return (
                                                                <SwiperSlide key={index} width='190px'>
                                                                    <Img userSelect='none' objectFit='contain' w='100%' h='200px' mr={0} pt={2} src={URL.createObjectURL(img)} />
                                                                </SwiperSlide>
                                                            )
                                                        })
                                                    }
                                                    {/* <Button className="swiper-button-prev"></Button>
                                                    <Button className="swiper-button-next"></Button> */}
                                                </Swiper>
                                            </Stack>
                                            <Stack px={2} borderTopRightRadius={12} borderTopLeftRadius={12} boxShadow='inset 0px 6px 6px -9px #888'>
                                                <Stack direction='row' align='center' justify='space-between' >
                                                    <Badge w='40px' colorScheme='green' borderRadius={2}>{advice.typeOfPet}</Badge>
                                                    <Text fontSize={14} mt={0}>{advice.time}min.</Text>
                                                </Stack>
                                                <Text fontSize={14} fontWeight={700}>Direccion</Text>
                                                <Text fontSize={13} mt={0} >{advice.location.address.road} {advice.location.address.house_number}, {advice.location.address.town} {advice.location.address.state}</Text>
                                                <Text fontSize={14} fontWeight={700}>Descripción</Text>
                                                <Text fontSize={13} mt={0} >{advice.description}</Text>
                                            </Stack>
                                        </Stack>
                                    )
                                })
                            }
                        </Stack>
                }
            </Grid>
        </Stack>
    )
}

export default Posts