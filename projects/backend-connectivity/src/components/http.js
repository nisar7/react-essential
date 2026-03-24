export async function getPlacesHttp() {
    const placesResponse = await fetch("http://localhost:3000/places")
    if (!placesResponse.ok) {
        throw new Error("Failed to fetch places")
    }
    const responseInJson = await placesResponse.json()
    
    return responseInJson?.places
}


export async function putPlacesHttp(places) {
   
    const placesResponse = await fetch("http://localhost:3000/user-places",
        {
            method: "put", body: JSON.stringify({ places: places }), headers: { 'Content-Type': 'application/json' }
        })


    if (!placesResponse.ok) {
        throw new Error("Failed to put places data")
    }
    const responseInJson = await placesResponse.json()

    return responseInJson?.message
}


export async function getUserPlacesHttp() {
    const placesResponse = await fetch("http://localhost:3000/user-places")

    if (!placesResponse.ok) {
        throw new Error("Failed to get User Places")
    }
    const responseInJson = await placesResponse.json()

    return responseInJson?.places
}