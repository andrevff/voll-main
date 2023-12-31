import { Rating } from "@mui/material";
import IProfissional from "../../../types/IProfissional";

export default function Card({profissional}: { profissional: IProfissional }) {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <img src={profissional.imagem} alt={`Foto de perfil do profissional ${profissional.nome}`} />
                    </li>
                    <li>
                        <p>{profissional.nome}</p>
                        <p>{profissional.especialidade}</p>
                    </li>
                    <li>
                        <Rating name="simple-controlled" value={profissional.nota} readOnly={/>
                    </li>
                </ul>
            </div>
        </>
    )
}