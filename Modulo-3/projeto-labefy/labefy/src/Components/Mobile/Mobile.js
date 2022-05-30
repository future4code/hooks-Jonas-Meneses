import React from "react";
import { CardMusic, ContainerMobile } from './StyledMobile'
import { IoIosAddCircle, IoIosCloseCircle, IoIosPlayCircle, IoIosTrash } from "react-icons/io"

class Mobile extends React.Component {

    state = {
        show: false
    }

    showPlus = () => {
        this.setState({ show: !this.state.show })
    }
    render() {
        const listaRederizada = this.props.playList.filter((music) => {

            if (music.name.includes(this.props.valueInputPesquiPlay.toUpperCase()) || music.name.includes(this.props.valueInputPesquiPlay.toLowerCase())) {
                return music
            }
        })

        const listMusic = this.props.listaMusic

        const colunas = listaRederizada.length
        const idPlayListatual = this.props.idPlayList

        return (

            <ContainerMobile colunas={colunas} show={this.state.show} idPlayList={idPlayListatual}>
                <header>
                    <h2> Olá {this.props.nameUser}! </h2>
                </header>
                <div className="container">
                    <input placeholder="Pesquise aqui sua PlayList"
                        onChange={this.props.onChangePesquiPlay}
                        value={this.props.valueInputPesquiPlay}
                    />
                    <div className="containerPlayList">
                        {listaRederizada.map(list => {
                            return (
                                <div className="play" key={list.id}
                                    onClick={() => this.props.onClicklList(list.id, list.name)}>
                                    {list.name}
                                </div>
                            )
                        })}
                    </div>

                    {idPlayListatual ? listMusic.map(msc => {
                        return (
                            <CardMusic >
                                <h3> {msc.name}</h3>
                                <p>{msc.artist}</p>
                                <div className="buttons">
                                    <IoIosPlayCircle
                                        onClick={() => this.props.playMusicMobile(msc.url)}
                                    />
                                    <IoIosTrash
                                        onClick={() => this.props.delete(msc.id)}
                                        className="del" />
                                </div>
                            </CardMusic>
                        )
                    }) : <h2>Escolha Uma PayList</h2>}

                    <div className="criar">
                        <h3>
                            Criar PlayList
                        </h3>

                        <input placeholder="Nome da PlayList"
                            onChange={this.props.onChange}
                            value={this.props.value}
                        />
                        <button onClick={this.props.onClick}>Criar</button>

                        <div className="AddMusica">
                            <h3>adicionar musica a playlist: <br /> {this.props.nomePlayList}</h3>
                            <input placeholder="Nome da Musica" onChange={this.props.onchangeNome}
                                value={this.props.valueNome} />
                            <input placeholder="Artista ou banda" onChange={this.props.onchangeArtista}
                                value={this.props.valueArtista} />
                            <input placeholder="link" onChange={this.props.onchangeLink}
                                value={this.props.valueLink} />

                            <p>link para add musica:</p>
                            <p>http://spoti4.future4.com.br/2.mp3</p>
                            <IoIosAddCircle onClick={this.props.iconAdd} />

                            <h3>Apagar esta playlist</h3>
                            <IoIosCloseCircle onClick={this.props.iconRemove} className="svgicon" />

                        </div>
                    </div>

                </div>

                <IoIosAddCircle className="flutauante" onClick={this.showPlus} />

                <audio controls src={this.props.urlMusic} autoPlay
                    className="player"
                />

            </ContainerMobile>
        )
    }
}

export default Mobile