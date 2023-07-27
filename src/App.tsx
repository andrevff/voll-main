import './App.css';
import Cabecalho from './components/cabecalho';
import Container from './components/container';
import Rodape from './components/rodape';
import Titulo from './components/titulo';

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Admnistrativa</Titulo>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
