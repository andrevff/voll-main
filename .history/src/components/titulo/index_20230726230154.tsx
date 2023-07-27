/* eslint-disable jsx-a11y/heading-has-content */
import avaliacao from './assets/avaliacao.png'
import grafico from './assets/grafico.png'
import consulta from './assets/consulta.png'
import React from 'react'
import styled from 'styled-components'

interface Props{
    imagem?: string,
    children?: React.ReactNode
}

interface IImagens{
    avaliacao: string,
    grafico: string,
    consulta: string
}

const SpanEstilizado = styled.span<Props>`
    background: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25px;
    height: 25px;
    background-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'};
`

const TituloEstilizado = styled.h2`
    color: var(--azul-claro);
`

const ContainerEstilizado = styled.div

export default function Titulo({ imagem, children }: Props){

    const listaDeImagens: IImagens = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta
    }

    return(
        <div>
            <SpanEstilizado imagem={listaDeImagens[imagem as keyof IImagens]} />
            <h2>{children}</h2>
        </div>
    )
}