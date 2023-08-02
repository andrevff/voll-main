import IProfissional from "../../../types/IProfissional";

export default function Card({profissional}: { profissional: IProfissional }) {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <img src={profissional.imagem} alt={`Foto de perfil do profissional ${profissional.nome}`} />
                    </li>
                </ul>
            </div>
        </>
    )
}