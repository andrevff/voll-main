import { useEffect, useState } from "react";

export default function useFetch<T>({url} : {url}) {
    const [dados, setDados] = useState<T | null>(null)
    const [erro, setErro] = useState('')

    useEffect(() => {
        fetch(`http://localhost:8080/${url}`).then(
            resposta => resposta.json()
        )
    })
}