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
    background-color: var();
`

export default function Rodape(){
    return(
        <footer>
            <ul>
                <li>
                    <a href="#">
                        <img src={facebook} alt="Logo do Facebook" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}