import { ResultFilterType } from "@/types/filters";
import { useEffect, useState } from "react"

interface useApiProps {
    urlApi: string;
}

export function useApi({urlApi}: useApiProps) {
    const url = urlApi;
    const [result, setResult] = useState<ResultFilterType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url)
                const json = await res.json()
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
    return { result, loading, error }
}