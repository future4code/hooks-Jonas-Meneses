import React from "react";
import styled from 'styled-components'
import {ContainerMensagens, TitleUser, Mensagem,ContainerInputs, InputUser,InputMensagem,ButaoEnviar,ContainerWhats, Valor} from '././components/StyledApp'

const Containermain = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #bbb;
 
`

const CardMensagem = styled.div`
  max-width: 80%;
  min-width: 10%;
  height: auto;
  background-color: white;
  margin:8px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  border-radius: 0px 10px 10px 10px;
  box-sizing: border-box;
  padding: 10px 5px;
  box-shadow: 2px 2px 5px #555;

`


class App extends React.Component {
  state ={
    mensagens:[],
    inputUser:"", inputMensagem:"",
  }

  onChangeUser = (event) =>{
    this.setState({inputUser: event.target.value})
  }

  onChangeMensagem = (event) =>{
    this.setState({inputMensagem: event.target.value})
  }

  addMensagem = () =>{
    if(this.state.inputUser.length > 0 && this.state.inputMensagem.length >0 ){
      const recebeObjetos={
      user:this.state.inputUser,
      mensagem: this.state.inputMensagem
      }
      
      const novoArray = [...this.state.mensagens, recebeObjetos]
      this.setState({mensagens : novoArray, inputMensagem:""})
      
    }
  
    
    console.log(this.state.inputUser.length)
    
  }
  
  render(){
  
    return (
      <Containermain>
        <ContainerMensagens>  
        
          {this.state.mensagens.map((msg,i)=>{
            return(
              <CardMensagem key={i}>
                <TitleUser > {msg.user}:</TitleUser>
                <Mensagem>{msg.mensagem}</Mensagem>
              </CardMensagem>)
            }
          )}

        </ContainerMensagens>  
        
        <ContainerInputs>
           <InputUser onChange={this.onChangeUser} value={this.state.inputUser} placeholder="Usuario"/> 
           <InputMensagem onChange={this.onChangeMensagem} value={this.state.inputMensagem} placeholder="mensagem"/>
           <ButaoEnviar onClick={this.addMensagem}> send</ButaoEnviar>
        </ContainerInputs>
      </Containermain>
    );
  }
}

export default App;
