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

  const {dados, erro} = useDadosConsulta()
  const {}seDadosProfissional()

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Admnistrativa</Titulo>
        <Tabela consultas={dados} />
        <Grafico />
      </Container>
      <Rodape />
    </>
  );
}

export default App;
