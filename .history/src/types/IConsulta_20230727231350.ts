import IProfissional from "./iProfissional";

export default interface IConsulta {
    id: number,
    data: string,
    horario: string,
    profissional: Array<IProfissional
}