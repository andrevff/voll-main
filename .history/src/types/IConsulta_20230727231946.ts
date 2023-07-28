

export default interface IConsulta extends IProfissional {
    id: number,
    data: string,
    horario: string,
    profissional: Array
    especialidade: string,
    paciente: string,
    modalidade: string
}