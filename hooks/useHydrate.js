import { useEffect, useState } from "react"

export default function useHydrate() {
    const [isMount, setIsMount] = useState(false);

    useEffect(() => {
        setIsMount(true)
    }, [])

    return isMount;
}