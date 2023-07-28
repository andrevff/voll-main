

export default interface IConsulta extends IProfissional {
    id: number,
    data: string,
    horario: string,
    profissional: Array<I
    especialidade: string,
    paciente: string,
    modalidade: string
}