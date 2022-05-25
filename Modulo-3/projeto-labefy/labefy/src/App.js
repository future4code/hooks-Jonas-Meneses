import styled from 'styled-components';
import axios from 'axios';
import React from 'react';
import Aside from './Components/Aside';

const Body = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
`

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers={
  headers:{
    Authorization: "jonas-meneses-hooks"
  }
}

class App extends React.Component {

  state={
    allPlayList:[],
    allMusic:[],
    inputPlayList:""

  }

 //======================== get List ==============================
  componentDidMount = ()=>{
    this.getAllPlayList()
  }

  getAllPlayList = async () =>{
    try {
      const response = await axios.get(url, headers)
      this.setState({allPlayList: response.data.result.list})
    } catch (error) {
      alert("deuruim")
    }
  }

//--------------------- get Music -----------------------

onClickGetMusics = (id)=>{
  const urlPost = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"+id+"/tracks"
  axios.get(urlPost, headers).then((resp)=>{
    this.setState({allMusic: resp.data.result.tracks})
    console.log("deu bom")
  }).catch((err)=>{
    console.log(err)
    console.log(id)
  })
}

 //======================== Create PlayList ==============================
  onChangePlayList =(event)=>{
    this.setState({inputPlayList: event.target.value})
  }

  onClickPlayList = async () => {
    const body = {
      name: this.state.inputPlayList
    }
    try {
      const resp = await axios.post(url, body, headers)
        this.setState({inputPlayList: ""})
        alert('Lista Criada com sucesso')
        this.getAllPlayList()
    } catch (error) {
        alert("Algo não deu certo")
        console.log(error)
    }
  }
  

 //======================== RENDER ==============================
  render() {
    const allPlayList = this.state.allPlayList
    console.log(this.state.allMusic)
    return (
      <Body>
        <Aside  playList={allPlayList}
          onChange={this.onChangePlayList}
          value={this.state.inputPlayList}
          onClick={this.onClickPlayList}
          onClicklList={this.onClickGetMusics}
        />
      </Body>
    );
  }
}

export default App;
