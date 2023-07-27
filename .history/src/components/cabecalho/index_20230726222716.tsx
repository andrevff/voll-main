import logo from './assets/logo.png'
import perfil from './assets/perfil.png'

export default function Cabecalho(){
    return(
        <header>
            <img src={logo} alt="Logo da empresa Voll" />
            <div>
                <img src={perfil} alt="Imagem de perfil do usuário" />
            </div>
        </header>
    )

}