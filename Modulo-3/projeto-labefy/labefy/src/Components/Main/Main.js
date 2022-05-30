import styled from 'styled-components';
import axios, { Axios } from 'axios';
import React from 'react';
import MusicRenderizada from '../MusicRenderizada/MusicRenderizada';
import EscolhaAPlay from '../MusicRenderizada/EscolhaAPlay';
import Aside from '../Aside/Aside';
import Mobile from '../Mobile/Mobile';

const Body = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  display: flex;
  
`

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
  headers: {
    Authorization: "jonas-meneses-hooks"
  }
}

class Main extends React.Component {

  state = {
    nameUser: this.props.nome,
    allPlayList: [],
    allMusic: [],
    inputPlayList: "",
    idPlayList: "",
    nomePlayList: "",
    nomeAddMusic: "",
    valueArtistaMusic: "",
    valueLinkMusic: "",
    valueInputPesquiPlay: "",
    showPlay: false,
    urlMusic: "",
    urlMusicMobile: "",
    ApiSpot:[]
  }

  //======================== PlayList ==============================



  //-------------------------- Create  PlayList --------------------------

  onChangePlayList = (event) => {
    this.setState({ inputPlayList: event.target.value })
  }

  onClickPlayList = async () => {
    const body = {
      name: this.state.inputPlayList
    }
    try {
      const resp = await axios.post(url, body, headers)
      this.setState({ inputPlayList: "" })
      alert('Lista Criada com sucesso')
      console.log(resp)
      this.getAllPlayList()
    } catch (error) {
      alert("Algo não deu certo")
      console.log(error)
    }
  }

  //-------------------------- get List --------------------------

  componentDidMount = () => {
    this.getAllPlayList()
  }

  getAllPlayList = async () => {
    try {
      const response = await axios.get(url, headers)
      this.setState({ allPlayList: response.data.result.list })
    } catch (error) {
      alert("deuruim")
    }
  }

  teste = () => {
    this.setState({ test: "paused" })
  }

  //-------------------------- Delet List --------------------------

  deletePlayList = () => {
    const urlDelete = url + '/' + this.state.idPlayList
    axios.delete(urlDelete, headers).then(() => {
      alert(`PlayLista ${this.state.nomePlayList} apagada`)
      this.setState({ idPlayList: "" })
      this.getAllPlayList()
      this.setState({allMusic:[]})
    }).catch((err) => {
      console.log(err)
      alert("deu ruim")
    })
  }

  //-------------------------- pesquisar List --------------------------

  onChangePesquiPlay = (event) => {
    this.setState({ valueInputPesquiPlay: event.target.value })
  }

  //======================== Music ==============================

  //--------------------- Play Music -----------------------

  playMusic = (url) => {
    this.setState({ urlMusic: url })
  }
  playMusicMobile = (url) => {
    this.setState({ urlMusicMobile: url })
  }

  //--------------------- Adicionar Music -----------------------
  onchangeNome = (event) => {
    this.setState({ nomeAddMusic: event.target.value })
  }

  onchangeArtista = (event) => {
    this.setState({ valueArtistaMusic: event.target.value })
  }

  onchangeLink = (event) => {
    this.setState({ valueLinkMusic: event.target.value })

  }

  onClickIconAddMusic = () => {
    const urlPost = url + "/" + this.state.idPlayList + "/tracks"
    const body = {
      "name": this.state.nomeAddMusic,
      "artist": this.state.valueArtistaMusic,
      "url": this.state.valueLinkMusic
    }

    axios.post(urlPost, body, headers).then(() => {
      alert("Musica add a playList")
      this.setState({ nomeAddMusic: "", valueArtistaMusic: "", valueLinkMusic: "" })
      this.onClickGetMusics(this.state.idPlayList)
    }).catch((err) => {
      alert("deu ruim")
      console.log(err)
    })
  }

  //--------------------- get Music -----------------------
  // captura o click as play lista e renderiza as musicas da playlist clicada

  onClickGetMusics = (id, name) => {
    const urlPost = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/" + id + "/tracks"
    axios.get(urlPost, headers).then((resp) => {
      this.setState({ allMusic: resp.data.result.tracks, idPlayList: id, nomePlayList: name })
    }).catch((err) => {
      console.log(err)
      console.log(id)
    })
  }

  //--------------------- Delet Music -----------------------

  deleteMusic = (id) => {
    const urlDelete = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlayList}/tracks/${id}`

    axios.delete(urlDelete, headers).then(() => {
      alert("Musica Deletada")
      this.onClickGetMusics(this.state.idPlayList)
    }).catch((err) => {
      alert("Deu Ruim, Tenta de novo Plisss!")
      console.log(err.response.message, "*delete music")
    })
  }


  //======================== RENDER ==============================
  render() {
    const allPlayList = this.state.allPlayList

    

  //======================== RETURN ==============================
    return (
      <Body>
        {/* Versão Mobile */}

        <Mobile
          //renderização e adicionar play list
          nomePlayList={this.state.nomePlayList}
          playList={allPlayList}
          onChange={this.onChangePlayList}
          value={this.state.inputPlayList}
          onClick={this.onClickPlayList}
          //input pesquisa Playlist
          onChangePesquiPlay={this.onChangePesquiPlay}
          valueInputPesquiPlay={this.state.valueInputPesquiPlay}

          //nome do usuario
          nameUser={this.state.nameUser}

          //click renderização da musicas
          onClicklList={this.onClickGetMusics}
          listaMusic={this.state.allMusic}
          idPlayList={this.state.idPlayList}

          // props campo adicionar Musica
          onchangeNome={this.onchangeNome}
          valueNome={this.state.nomeAddMusic}
          onchangeArtista={this.onchangeArtista}
          valueArtista={this.state.valueArtistaMusic}
          onchangeLink={this.onchangeLink}
          valueLink={this.state.valueLinkMusic}
          iconAdd={this.onClickIconAddMusic}

          //props apagar playlist
          iconRemove={this.deletePlayList}

          //props deleta musica
          delete={this.deleteMusic}

          //props play Music
          playMusicMobile={this.playMusicMobile}
          urlMusic={this.state.urlMusicMobile}
        />

        {/* Versão PC */}
        <Aside playList={allPlayList}
          onChange={this.onChangePlayList}
          value={this.state.inputPlayList}
          onClick={this.onClickPlayList}
          onClicklList={this.onClickGetMusics}
          nameUser={this.state.nameUser}
          onChangePesquiPlay={this.onChangePesquiPlay}
          valueInputPesquiPlay={this.state.valueInputPesquiPlay}
          pesquisaPlaylist={this.state.valueInputPesquiPlay}
          listaMusic={this.state.allMusic}

          // props campo adicionar Musica
          onchangeNome={this.onchangeNome}
          valueNome={this.state.nomeAddMusic}
          onchangeArtista={this.onchangeArtista}
          valueArtista={this.state.valueArtistaMusic}
          onchangeLink={this.onchangeLink}
          valueLink={this.state.valueLinkMusic}
          iconAdd={this.onClickIconAddMusic}

        />

        {this.state.idPlayList ?
          <MusicRenderizada
            // props renderização da lista de musicas
            nomePlayList={this.state.nomePlayList}
            listaMusic={this.state.allMusic}
            delete={this.deleteMusic}

            // props campo adicionar
            onchangeNome={this.onchangeNome}
            valueNome={this.state.nomeAddMusic}
            onchangeArtista={this.onchangeArtista}
            valueArtista={this.state.valueArtistaMusic}
            onchangeLink={this.onchangeLink}
            valueLink={this.state.valueLinkMusic}
            iconAdd={this.onClickIconAddMusic}

            //props apagar playlist
            iconRemove={this.deletePlayList}

            //props play Music
            playMusic={this.playMusic}
            urlMusic={this.state.urlMusic}
          />
          : <EscolhaAPlay />
        }
      </Body>
    );
  }
}

export default Main;
