import ButtonContainer from './components/ButtonContainer'
import Container from 'react-bootstrap/Container'
import Display from './components/Display'
import './App.css'

function App() {

  return (
    <Container className='d-flex justify-content-center align-items-center m-0 p-0 h-100' fluid>
      <Container className='calculator'>
        <h1 className='title mb-0'>Panares</h1>
        <Display />
        <ButtonContainer />
      </Container>
    </Container>
  )
}

export default App
