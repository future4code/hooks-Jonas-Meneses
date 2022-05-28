import React from "react";
import styled from "styled-components";
import { AiFillBackward } from 'react-icons/ai'

const ContainerAsside = styled.aside`
    width: 250px;
    height: 100vh;
    background-color: #111111;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    overflow: hidden;

    text-align: center;
    color: #e5e5e5;

    h1{
        font-size: 2.5em;
        margin: 10px;
        border-bottom:1px solid #e5e5e5;
        padding: 8px;
    }

    span{
        color: #ff5500;
    }

    ul{
        border-top: 1px solid #e5e5e5;
    }

    li{
        font-size: 1em;
        list-style: none;
        margin: 5px;
        cursor: pointer;
    }

    h3{
        margin: 10px;
        border-top: 1px solid #e5e5e5;
        padding: 10px;
    }

    input{
        margin-bottom: 10px;
    }
`

class Aside extends React.Component {

    render() {

        const listaRederizada = this.props.playList.filter((music)=>{
            
            if(music.name.includes(this.props.pesquisaPlaylist)){
                return music
            }
        })
        console.log(listaRederizada)
        return (
            <ContainerAsside>
                <h1>
                    Labe<span>fy</span>
                </h1>
                <p>Olá <strong>{this.props.nameUser}</strong>!</p>
                <div>
                    <input placeholder="Pesquise aqui sua PlayList"
                        onChange={this.props.onChangePesquiPlay}
                        value={this.props.valueInputPesquiPlay}
                    />
                    <ul>
                        {listaRederizada.map(list => {
                            return (
                                <li key={list.id}
                                    onClick={() => this.props.onClicklList(list.id, list.name)}>
                                    {list.name} <AiFillBackward />
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <h3>
                    Criar PlayList
                </h3>
                <input placeholder="Nome da PlayList"
                    onChange={this.props.onChange}
                    value={this.props.value}
                />

                <button onClick={this.props.onClick}>Criar</button>
            </ContainerAsside>
        )
    }
}

export default Aside