/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'
import facebook from './assets/facebook.png'
import google from './assets/google.png'
import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'

const RodapeEstilizado = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
`

const ListaEstilizada = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 1em auto;
`

const ItemEstilizado = styled.li`
    list-style: ;
`

export default function Rodape(){
    return(
        <RodapeEstilizado>
            <ListaEstilizada>
                <li>
                    <a href="#">
                        <img src={facebook} alt="Logo do Facebook" />
                    </a>
                </li>
            </ListaEstilizada>
            <p>2023 | Desenvolvido por André | Projeto fictício sem fins comerciais</p>
        </RodapeEstilizado>
    )
}