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

const SpanEstilizado = styled.span

export default function Titulo({ imagem, children }: Props){

    const listaDeImagens: IImagens = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta
    }

    return(
        <div>
            <span />
            <h2>{children}</h2>
        </div>
    )
}