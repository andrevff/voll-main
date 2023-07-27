import './App.css';
import Cabecalho from './components/cabecalho';
import Container from './components/container';
import Titulo from './components/titulo';

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo></Titulo>
      </Container>
    </>
  );
}

export default App;
