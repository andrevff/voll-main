import styled from "styled-components";
import IProfissional from "../../types/IProfissional";
import Card from "./card";
import Titulo from "../titulo";
import { ai } from 'react-icons/ai'

const SecaoCard = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`

export default function Avaliacao({profissionais} : {profissionais: IProfissional[] | null}) {
    return (
        <>
            <Titulo>Avaliação dos Profissionais</Titulo>
            <SecaoCard>
                { profissionais?.map((profissional) => {
                    return <Card profissional={profissional} />
                }) }
            </SecaoCard>
        </>
    )
}