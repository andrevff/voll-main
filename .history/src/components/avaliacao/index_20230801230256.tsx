import IProfissional from "../../types/IProfissional";
import Card from "./card";

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