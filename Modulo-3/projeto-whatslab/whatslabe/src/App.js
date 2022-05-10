import React from "react";
import {CardMensagem, Containermain ,ContainerMensagens, TitleUser, Mensagem,ContainerInputs, InputUser,InputMensagem,ButaoEnviar,ContainerWhats, Valor} from '././components/StyledApp'

class App extends React.Component {
  state ={
    mensagens:[],
    inputUser:"", inputMensagem:"",key:0, click:0
  }

  onChangeUser = (event) =>{
    this.setState({inputUser: event.target.value})
  }

  onChangeMensagem = (event) =>{
    this.setState({inputMensagem: event.target.value})
  }

  onKeyEnviar = (event) =>{
    if(event.keyCode ===13){
     this.addMensagem()
    }
  }

  
  remover = () =>{
    this.setState({click: this.state.click+1})
    console.log(this.state.click, this.state.key, this.state.mensagens[this.state.key-1].user)
  }

  addMensagem = () =>{
    if(this.state.inputUser.length > 0 && this.state.inputMensagem.length >0 ){
      
      const recebeObjetos={
      user:this.state.inputUser,
      mensagem: this.state.inputMensagem
      }
      
      const novoArray = [...this.state.mensagens, recebeObjetos]
      this.setState({mensagens : novoArray, inputMensagem:"", key:this.state.key+1})
      
    }else{
      if(this.state.inputUser<1){
        alert("Usuario em branco!")
      }else{
        alert("Mensagem em branco")
      }
    }
  }
  
  render(){
    return (
      <Containermain>
        <ContainerMensagens>  
        
          {this.state.mensagens.map((msg,i)=>{
            return(
              <CardMensagem key={i} onClick={this.remover}>
                <TitleUser > {msg.user}:</TitleUser>
                <Mensagem>{msg.mensagem}</Mensagem>
              </CardMensagem>)
            }
          )}
        </ContainerMensagens>  
        
        <ContainerInputs onKeyUp={this.onKeyEnviar}>
           <InputUser onChange={this.onChangeUser} value={this.state.inputUser} placeholder="Usuario"/> 
           <InputMensagem onChange={this.onChangeMensagem} value={this.state.inputMensagem} placeholder="mensagem"/>
           <ButaoEnviar onClick={this.addMensagem} > send</ButaoEnviar>
        </ContainerInputs>
      </Containermain>
    );
  }
}

export default App;
