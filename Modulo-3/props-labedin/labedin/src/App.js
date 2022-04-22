import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/1912/1912115.png" 
          nome="Jonas Levy" 
          descricao="Oi, eu sou o Jonas. Sou alunos da Labenu. Adoro Batata Frita (Principalmente do BK), gosto de viajar(embora faz tempo q não faço isso)."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/49/49116.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
          <CardPequeno 
            img="https://cdn-icons-png.flaticon.com/512/725/725643.png"
            info="email"
            conteudo="jonaslevy0408@gmailcom"
          />
      </div>

      <div className="page-section-container">
          <CardPequeno 
          img="https://cdn-icons-png.flaticon.com/512/1179/1179981.png"
          info="Endereço"
          conteudo="Rua dos Levy's, 1991"
          />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
