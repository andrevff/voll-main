import './App.css';
import Cabecalho from './components/cabecalho';
import Container from './components/container';
import Grafico from './components/grafico';
import Rodape from './components/rodape';
import Tabela from './components/tabela';
import Titulo from './components/titulo';
import useDadosConsulta from './useDadosConsulta';
import useDadosProfissional from './useDadosProfissional';

function App() {

  const {dados: consultas, erro: consultasErro} = useDadosConsulta()
  const {dados: profissionais, erro: profissionaisErro} = useDadosProfissional()

  if (consultasErro || profissionaisErro) {
    console.log("Ocorreu um erro na requisição!")
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Admnistrativa</Titulo>
        <Tabela consultas={consultas} />
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Ava
      </Container>
      <Rodape />
    </>
  );
}

export default App;
