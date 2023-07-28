import IProfissional from "./iProfissional";

export default interface IConsulta extr {
    id: number,
    data: string,
    horario: string,
    profissional: Array<IProfissional>
}