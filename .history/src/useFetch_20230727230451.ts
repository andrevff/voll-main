import { useEffect, useState } from "react";

export default function useFetch<T>() {
    const [dados, setDados] = useState<T | null>(null)
    const [erro, setErro] = useState('')

    useEffect(() => {
        fetch(`http`)
    })
}