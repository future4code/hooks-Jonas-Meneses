import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import { AdicionarPost } from './components/AdicionarPost/AdicionarPost';


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
`

const ContairnerPosts = styled.div`
  margin-left: 20px ;

`

class App extends React.Component {
  state = {
    posts:[{nomeUsuario:'Jessilania',
    fotoUsuario:'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150'},
    {nomeUsuario:'Jonas',
    fotoUsuario:'https://picsum.photos/50/51',
    fotoPost:'https://picsum.photos/200/151'},
    {nomeUsuario:'Ana Esther',
    fotoUsuario:'https://picsum.photos/50/52',
    fotoPost:'https://picsum.photos/200/152'}],

    nomeUsuario:"", fotoUsuario: "",fotoPost:""
    
  }

  adicionaPost = () =>{
    const newObject = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost
    }

    const newObjects = [...this.state.posts, newObject]
    this.setState({posts: newObjects , nomeUsuario: "", fotoUsuario: "", fotoPost:""})
  }

  onChangenome = (event) =>{
    this.setState({nomeUsuario: event.target.value})
  } 

  onChangePerfil = (event) =>{
    this.setState({fotoUsuario: event.target.value})
  }

  onChageImagem = (event) =>{
    this.setState({fotoPost: event.target.value})
  }


  render() {
    return (
      <MainContainer>
        <AdicionarPost 
          onChangenome = {this.onChangenome}
          valorNome = {this.state.nomeUsuario}
          onChangePerfil = {this.onChangePerfil}
          valorPerfil = {this.state.fotoUsuario}
          onChageImagem = {this.onChageImagem}
          valorPost = {this.state.fotoPost}
          onClickAdd = {this.adicionaPost}
         
        />
        <ContairnerPosts>
        {this.state.posts.map((post) =>{
          return(
          <Post
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
          />)
      })  }
      </ContairnerPosts>
      </MainContainer>
    );
  }
}

export default App;
