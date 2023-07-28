import IProfissional from "./iProfissional";

export default interface IConsulta extends Ipto {
    id: number,
    data: string,
    horario: string,
    profissional: Array<IProfissional>
}