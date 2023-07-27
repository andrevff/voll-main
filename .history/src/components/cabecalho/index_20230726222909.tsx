/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './assets/logo.png'
import perfil from './assets/perfil.png'

const CabecalhoEstilizado

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