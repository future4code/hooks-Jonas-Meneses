import styled from 'styled-components';
import axios from 'axios';
import React from 'react';
import Aside from './Aside';
import MusicRenderizada from './MusicRenderizada';

const Body = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  display: flex;
`

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers={
  headers:{
    Authorization: "jonas-meneses-hooks"
  }
}

class Main extends React.Component {

  state={
    allPlayList:[],
    allMusic:[],
    inputPlayList:"",
    idPlayList:""

  }

  //======================== PlayList ==============================

  //-------------------------- Create  PlayList --------------------------
   
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


 //-------------------------- get List --------------------------

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

  
  //======================== Music ==============================
  
  //--------------------- get Music -----------------------
  
  onClickGetMusics = (id)=>{
    const urlPost = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"+id+"/tracks"
    axios.get(urlPost, headers).then((resp)=>{
      this.setState({allMusic: resp.data.result.tracks, idPlayList: id})
      console.log("deu bom")
    }).catch((err)=>{
      console.log(err)
      console.log(id)
    })
  }

  //--------------------- Delet Music -----------------------

  deleteMusic = (id)=>{
    const urlDelete = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlayList}/tracks/${id}`
    
    axios.delete(urlDelete, headers).then(()=>{
      alert("Musica Deletada")
      this.onClickGetMusics(this.state.idPlayList)
    }).catch((err)=>{
      alert("Deu Ruim, Tenta de novo Plisss!")
      console.log(err.response.message,"*delete music")
    })
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

        <MusicRenderizada 
        listaMusic={this.state.allMusic}
        delete={this.deleteMusic}
        />
      </Body>
    );
  }
}

export default Main;
