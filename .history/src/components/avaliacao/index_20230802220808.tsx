import styled from "styled-components";
import IProfissional from "../../types/IProfissional";
import Card from "./card";
import Titulo from "../titulo";
import { AiFillStar } from 'react-icons/ai'
import Subtitulo from "../subtitulo";
import Button from "../botao";

const SecaoCard = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`

export default function Avaliacao({profissionais} : {profissionais: IProfissional[] | null}) {
    return (
        <>
            <Titulo><AiFillStar /> Avaliação dos Profissionais</Titulo>
            <Subtitulo>Jul/23</Subtitulo>
            <SecaoCard>
                { profissionais?.map((profissional) => {
                    return <Card profissional={profissional} />
                }) }
            </SecaoCard>
            <Button
        </>
    )
}