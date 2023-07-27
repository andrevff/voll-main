/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'
import logo from './assets/logo.png'
import perfil from './assets/perfil.png'

const CabecalhoEstilizado = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: 1;
`

const LinkEstilizado = styled.a`
    
`

export default function Cabecalho(){
    return(
        <header>
            <img src={logo} alt="Logo da empresa Voll" />
            <div>
                <img src={perfil} alt="Imagem de perfil do usuário" />
                <a href="#">Sair</a>
            </div>
        </header>
    )

}