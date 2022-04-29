import React from "react";
import styled from "styled-components";

const ContainerAdicionar = styled.div`
    display:flex;
    flex-direction: column;
    width: 300px;
    border: 1px solid black;
    padding: 10px;

`

const Input = styled.input`
    margin: 5px;
`

const Titulo = styled.h2`
    font-size: 0.8em;

`

const Butao = styled.button`
`

const info = styled.p`

`


export const AdicionarPost = (props) =>{
    return(
        <ContainerAdicionar>
            <Titulo> ADICIONAR POST</Titulo>
            <Input  placeholder="Nome" 
            onChange={props.onChangenome}
            value={props.valorNome}/>
            <Input placeholder="imagem Perfil" onChange={props.onChangePerfil} value={props.valorPerfil}/>
            <Input placeholder="imagem post"onChange={props.onChageImagem} value={props.valorPost}/>
            <Butao onClick={props.onClickAdd}>Adicionar</Butao>
            <hr/>
            <Titulo>Links p/ testes</Titulo>
            <Titulo> imagem perfil</Titulo>
            <info>
            https://picsum.photos/50/57
            </info>
            <Titulo> imagem post</Titulo>
            <info>
            https://picsum.photos/200/156
            </info>
        </ContainerAdicionar>
    
    )

}

