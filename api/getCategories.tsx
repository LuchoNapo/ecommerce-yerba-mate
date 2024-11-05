import { useEffect, useState } from "react"

export function useGetCategories() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {

        (async () => {
            try {
                const response = await fetch(url)
                const json = await response.json()
                setResult(json.data)
                setLoading(false)
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Unknown error occurred");
                }
                setLoading(false)
            }
        })()

    }, [url])
    return { loading, result, error }
}