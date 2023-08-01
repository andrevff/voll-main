import IProfissional from "../../types/IProfissional"

interface Props {
    profissionais: IProfissional[] | null,
    consultas: IC
}

interface IDados {
    nome: string,
    consultas: number
}

const useDadosGrafico = ({ profissionais, consultas }: Props) => {
    let dados: Array<IDados> = []

    if (profissionais && consultas)
}

export default useDadosGrafico