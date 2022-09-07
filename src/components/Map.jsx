import React, { useEffect } from 'react'
import { Button, Stack, useDisclosure } from '@chakra-ui/react'
import { MapContainer, TileLayer, Marker, Popup, Circle, LayerGroup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { FaPlusCircle } from 'react-icons/fa'
import NewPost from './NewPost';
import { useSelector } from 'react-redux'
import L from 'leaflet'
import { useMap } from 'react-leaflet';


function ResetCenterView({ locationSelected }) {
    const map = useMap()

    useEffect(() => {
        if (locationSelected) {
            map.setView(L.latLng(locationSelected)),
                map.getZoom(),
            {
                animate: true
            }
        }
    }, [locationSelected])


    return null
}

// export default ResetCenterView

const BUENOS_AIRES_LAT_LON = [-34.60, -58.45]

function Map() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const data = useSelector(state => state?.post)
    const locationSelected = [data[0]?.location?.lat, data[0]?.location?.lon]
    console.log(data)

    return (
        <Stack h='80vh' w='100%' flexGrow='1'>
            <Stack align='flex-end'>
                <Button variant='none' w='60px' onClick={onOpen}><FaPlusCircle size='1.5em' color='green' /></Button>
            </Stack>
            <NewPost isOpen={isOpen} onClose={onClose} />
            <MapContainer cancelable="false" center={data.length === 0 ? BUENOS_AIRES_LAT_LON : locationSelected} zoom={10} scrollWheelZoom={false} style={{ height: '100%', width: '100%', position: 'relative' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=pld9XJEJDv8AyB7c8mGH"
                />
                {
                    data?.map(post => {
                        console.log(post)
                        return (
                            <LayerGroup key={post?.location?.id}>
                                <Marker position={data.length === 0 ? BUENOS_AIRES_LAT_LON : [post?.location?.lat, post?.location?.lon]}>
                                    <Popup>
                                        {post?.location?.name}
                                    </Popup>
                                </Marker>
                                <Circle center={data.length === 0 ? BUENOS_AIRES_LAT_LON : [post?.location?.lat, post?.location?.lon]} pathOptions={{ fillColor: 'red' }} radius={100} stroke={false} />
                            </LayerGroup>
                        )
                    })
                }
                <ResetCenterView locationSelected={data.length === 0 ? BUENOS_AIRES_LAT_LON : locationSelected} />
            </MapContainer>
        </Stack>
    )
}

export default Map