import React from 'react';
import styled from 'styled-components';
import { ButtonEtapa, ContainerApp } from './components/estilo/Estilo';
import Etapa1 from './components/Etapa1/Etapa1';
import Etapa1Desafio from './components/Etapa1/Etapa1Desafio';
import Etapa2 from './components/Etapa2/Etapa2';
import Etapa3 from './components/Etapa3/Etapa3';
import Final from './components/Final/Final';


class App extends React.Component {
  state = {
    etapa:1
  }

  proximaEtapa = ()=> this.setState({etapa: this.state.etapa +1})

  renderizaEtapa = () =>{
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        break;
    }
  }

  renderizaEtapaDesafio = () =>{
    switch (this.state.etapa) {
      case 1:
        return <Etapa1Desafio />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        break;
    }
  }
  render(){
    return (
      <ContainerApp>
      {this.renderizaEtapa()}
      
      {/*comenta a linha 51 e descomenta a linha 53 para ver o desafio, acho q só vou conseguir a primeira parte*/}
      {/* this.renderizaEtapaDesafio() */}

      {this.state.etapa !=4 && <ButtonEtapa onClick={this.proximaEtapa}>Proxima Etapa</ButtonEtapa>}
        
      </ContainerApp>
    );
  }
}

export default App;
