import IProfissional from "../../types/IProfissional"

interface Props {
    profissionais: IProfissional
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