import React from "react";
import { AiFillBackward } from 'react-icons/ai'
import {ContainerAsside} from './Styleds'


class Aside extends React.Component {

    render() {

        const listaRederizada = this.props.playList.filter((music)=>{
            
            if(music.name.includes(this.props.pesquisaPlaylist)){
                return music
            }
        })
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