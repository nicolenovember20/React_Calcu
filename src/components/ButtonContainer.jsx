import { Container, Col, Row } from 'react-bootstrap'
import ButtonCustom from './ButtonCustom';
import { CalcContext } from '../context/calcContext';
import { useContext } from 'react';

function ButtonContainer() {

  const { buttonClick, equalClick, clearClick } = useContext(CalcContext)

  return (
    <Container className='buttonContainer'>
      <Row>
        <Col><ButtonCustom variant={'warning'} value={'AC'} onClick={() => clearClick()} /></Col>
        <Col><ButtonCustom variant={'warning'} value={'('} onClick={() => buttonClick('(')} /></Col>
        <Col><ButtonCustom variant={'warning'} value={')'} onClick={() => buttonClick(')')} /></Col>
        <Col><ButtonCustom variant={'warning'} value={'÷'} onClick={() => buttonClick('/')} /></Col>
      </Row>

      <Row>
        <Col><ButtonCustom variant={'primary'} value={'7'} onClick={() => buttonClick('7')} /></Col>
        <Col><ButtonCustom variant={'primary'} value={'8'} onClick={() => buttonClick('8')} /></Col>
        <Col><ButtonCustom variant={'primary'} value={'9'} onClick={() => buttonClick('9')} /></Col>
        <Col><ButtonCustom variant={'warning'} value={'X'} onClick={() => buttonClick('*')} /></Col>
      </Row>

      <Row>
        <Col><ButtonCustom variant={'primary'} value={'4'} onClick={() => buttonClick('4')} /></Col>
        <Col><ButtonCustom variant={'primary'} value={'5'} onClick={() => buttonClick('5')} /></Col>
        <Col><ButtonCustom variant={'primary'} value={'6'} onClick={() => buttonClick('6')} /></Col>
        <Col><ButtonCustom variant={'warning'} value={'-'} onClick={() => buttonClick('-')} /></Col>
      </Row>

      <Row>
        <Col><ButtonCustom variant={'primary'} value={'1'} onClick={() => buttonClick('1')} /></Col>
        <Col><ButtonCustom variant={'primary'} value={'2'} onClick={() => buttonClick('2')} /></Col>
        <Col><ButtonCustom variant={'primary'} value={'3'} onClick={() => buttonClick('3')} /></Col>
        <Col><ButtonCustom variant={'warning'} value={'+'} onClick={() => buttonClick('+')} /></Col>
      </Row>

      <Row>
        <Col><ButtonCustom variant={'primary'} value={'0'} onClick={() => buttonClick('0')} /></Col>
        <Col><ButtonCustom variant={'warning'} value={'.'} onClick={() => buttonClick('.')} /></Col>
        <Col><ButtonCustom variant={'warning'} value={'%'} onClick={() => buttonClick('%')} /></Col>
        <Col><ButtonCustom variant={'warning'} value={'='} onClick={() => equalClick()} /></Col>
      </Row>

    </Container>
  );
}

export default ButtonContainer