import { useFetch } from '../hooks/useFetch.js';
import { sortPlacesByDistance } from '../loc.js';
import Error from './Error.jsx';
import { getPlacesHttp } from './http.js';
import Places from './Places.jsx';


async function sortedPlaceList() {
  const place = await getPlacesHttp()
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(place, position.coords.latitude, position.coords.longitude)
      resolve(sortedPlaces)
    })
  })
}

export default function AvailablePlaces({ onSelectPlace }) {

  const {
    data: availablePlaces,
    error,
    isFetching: isLoading } = useFetch(sortedPlaceList, [])

  // const [availablePlaces, setAvailablePlaces] = useState([])

  // const [isLoading, setIsLoading] = useState(false)

  // const [error, setError] = useState({})

  // useEffect(() => {
  //   const fetchPlaces = async () => {
  //     setIsLoading(true)
  //     try {
  //      const responseInJson = await getPlacesHttp();
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         const sortedPlaces = sortPlacesByDistance(responseInJson, position.coords.latitude, position.coords.longitude)
  //         setAvailablePlaces(sortedPlaces)
  //         setIsLoading(false)
  //       })
  //     } catch (error) {
  //       setError({ message: "Unable to fetch Data, Please try again", name: "Error" })
  //       setIsLoading(false)
  //     }
  //   }
  //   fetchPlaces()
  // }, [])


  if (Object.keys(error).length > 0 && error) {

    return <Error title={error.name} message={error.message} ></Error>
  }

  return (
    <>
      {!Object.keys(error).length && <Places
        title="Available Places"
        isLoading={isLoading}
        places={availablePlaces}
        fallbackText="No places available."
        onSelectPlace={onSelectPlace}
      />}
    </>
  );
}
