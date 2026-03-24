import { useState , useEffect} from "react"

export function useFetch(fetchFn , initialData) {
    const [error, setError] = useState({})
    const [isFetching, setIsFetching] = useState(false)
    const [data, setData] = useState(initialData)

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true)
            try {
                const response = await fetchFn()
                setData(response)
            } catch (error) {
                setError({ name: "Error", message: "Unable to fetch get User" })
            }
            setIsFetching(false)
        }
        fetchData()
    }, [fetchFn ])
    return {
        error,
        isFetching,
        data,
        setData
    }
}