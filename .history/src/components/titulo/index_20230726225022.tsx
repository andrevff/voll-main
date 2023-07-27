/* eslint-disable jsx-a11y/heading-has-content */
import avaliacao from './assets/avaliacao.png'
import grafico from './assets/grafico.png'
import consulta from './assets/consulta.png'

interface Props{
    imagem? s
}

export default function Titulo({ imagem, children }: Props){
    return(
        <div>
            <span />
            <h2></h2>
        </div>
    )
}