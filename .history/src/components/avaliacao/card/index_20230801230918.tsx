import { Rating } from "@mui/material";
import IProfissional from "../../../types/IProfissional";
import styled from "styled-components";

const ContainerEstilizado = styled.div`
    fle
`

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
                        <Rating name="simple-controlled" value={profissional.nota} readOnly={true}/>
                    </li>
                </ul>
            </div>
        </>
    )
}