import IProfissional from "./types/iProfissional"
import useFetch from "./useFetch"

const useDadosProfissional = () => {
    return useFetch<IProfissional>
}