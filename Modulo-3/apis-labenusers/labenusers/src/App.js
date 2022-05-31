import React from "react"
import styled from "styled-components";
import axios from "axios";
import CardCadastro from "./components/CardCadastro";
import CardUsuarios from "./components/CardUsuarios";

const Body = styled.div`  
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ccccff;
  margin-right: 20px;
`

const ContainerMain = styled.main`
  box-sizing: border-box;
  width: 300px;
  height: 300px;
  background-color: #bbbbbb;
  border-radius: 20px;
  display:  flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class App extends React.Component {
  state={
    tela: true
  }

  trocaTela = () =>{
    this.setState({tela: !this.state.tela})
  }

  render() {
    return (
      <Body>
        <button onClick={this.trocaTela}>Troca tela</button>
        <ContainerMain>
        {this.state.tela? <CardCadastro /> : <CardUsuarios />} 
          {/*  */}
        </ContainerMain>
      </Body>
    )
  }
}

export default App;
