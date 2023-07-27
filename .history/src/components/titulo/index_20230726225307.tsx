/* eslint-disable jsx-a11y/heading-has-content */
import avaliacao from './assets/avaliacao.png'
import grafico from './assets/grafico.png'
import consulta from './assets/consulta.png'
import React from 'react'

interface Props{
    imagem?: string,
    children?: React.ReactNode
}

interface IImagens{
    avaliacao: string,
    grafico: string,
    consulta: string
}

export default function Titulo({ imagem, children }: Props){

    const listaDeImagens

    return(
        <div>
            <span />
            <h2>{children}</h2>
        </div>
    )
}