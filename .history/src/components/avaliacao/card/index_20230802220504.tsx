import { Rating } from "@mui/material";
import IProfissional from "../../../types/IProfissional";
import styled from "styled-components";
import Titulo from "../../titulo";

const ContainerEstilizado = styled.div`
    flex: 40%;
    max-width: 100%;
    background-color: #ffffff;
    padding: 1em;
    box-shadow: 2px 2xp 8px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 1em 2em 1em;
`

const ListaEstilizada = styled.ul`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0;
`

const ItemEstilizado = styled.li`
    list-style-type: none;
`

const ImagemEstilizada = styled.img`
    border-radius: 100%;
    width: 64px;
    object-fit: cover;
    height: 64px;
    border: 2px solid var(--azul-claro);
    margin-right: 1em
`

export default function Card({profissional}: { profissional: IProfissional }) {
    return (
        <>
            <Titulo>A</Titulo>
            <ContainerEstilizado>
                <ListaEstilizada>
                    <ItemEstilizado>
                        <ImagemEstilizada src={profissional.imagem} alt={`Foto de perfil do profissional ${profissional.nome}`} />
                    </ItemEstilizado>
                    <ItemEstilizado>
                        <p>{profissional.nome}</p>
                        <p>{profissional.especialidade}</p>
                    </ItemEstilizado>
                    <ItemEstilizado>
                        <Rating name="simple-controlled" value={profissional.nota} readOnly={true}/>
                    </ItemEstilizado>
                </ListaEstilizada>
            </ContainerEstilizado>
        </>
    )
}