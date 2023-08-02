import styled from "styled-components";
import IProfissional from "../../types/IProfissional";
import Card from "./card";

const SecaoCard = styled.section`
    display: f
`

export default function Avaliacao({profissionais} : {profissionais: IProfissional[] | null}) {
    return (
        <>
            <section>
                { profissionais?.map((profissional) => {
                    return <Card profissional={profissional} />
                }) }
            </section>
        </>
    )
}