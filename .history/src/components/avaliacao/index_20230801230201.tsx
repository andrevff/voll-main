import IProfissional from "../../types/IProfissional";

export default function Avaliacao({profissionais} : {profissionais: IProfissional[] | null}) {
    return (
        <>
            <section>
                { profissionais?.map((profissi)) }
            </section>
        </>
    )
}