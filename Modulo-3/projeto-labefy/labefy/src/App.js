import React from 'react';
import Main from './Components/Main/Main';
import TelaInicial from './Components/TelaInicial/TelaInicial';


class App extends React.Component {
  state={
    showPlay:false,
    nameUser:""
  }

  onChangeName = (event) =>{
    this.setState({nameUser: event.target.value})
  }

  ShowPlayList=()=>{
    this.state.nameUser? this.setState({showPlay: !this.state.showPlay}): alert("digite o seu Nome")
  }

  render() {
    return (
      <>
       {this.state.showPlay? <Main nome={this.state.nameUser}/>: <TelaInicial 
       onchange={this.onChangeName}
       value={this.state.nameUser}
       onClick={this.ShowPlayList}
       />}
      </>
    )
  }
}

export default App;
