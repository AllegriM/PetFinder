
export const fetchStreetQuery = async( searchQuery ) => {
    if(searchQuery === undefined) return
    const NOMINATIM_URL = `https://nominatim.openstreetmap.org/?addressdetails=1&q=${searchQuery}&format=json&limit=5`
    try {
        const request = await fetch(NOMINATIM_URL)
        const data = await request.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
