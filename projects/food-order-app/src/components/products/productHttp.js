export async function getProducts() {

    const response = await fetch("http://localhost:3000/meals")
    const products = await response.json()

    if (!response.ok) {
        return "Unable to fetch data 400 or 500"
    }

    return products


}