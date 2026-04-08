import { useEffect, useState } from "react";

export function useFetch(fetchFn) {
    const [products, setProducts] = useState([])
    const [errors, setErrors] = useState()

    useEffect(() => {
        try {
            async function getAllData() {
                const response = await fetchFn()
                setProducts(response)

            }
            getAllData()
        } catch (error) {
            let errors = []
            errors.push(error?.message ?? "Something went wrong")
            setErrors(errors)


        }

    }, [])

    return {
        products,
        errors
    }
}