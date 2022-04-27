import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Jonas Levy'}
          fotoUsuario={'https://picsum.photos/id/200/50/50'}
          fotoPost={'https://picsum.photos/id/235/200/300'}
        />
        <Post
          nomeUsuario={'Fulano de tall'}
          fotoUsuario={'https://picsum.photos/id/10/50/50'}
          fotoPost={'https://picsum.photos/id/267/200/150'}
        />  
      </MainContainer>
    );
  }
}

export default App;
