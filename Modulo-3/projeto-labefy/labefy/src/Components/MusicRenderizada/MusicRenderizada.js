import React from "react";
import { IoIosCloseCircle } from "react-icons/io"
import CampoAddMusic from "./CampoAddMusic"
import {ContainerMusic, CardMusic} from './StyledMusicRenderizada'


class MusicRenderizada extends React.Component {
    render() {
        const listaMusic = this.props.listaMusic
        return (
            <ContainerMusic>

                <main>
                    <h2>{this.props.nomePlayList}</h2>
                    <div className="musicasRend">
                        {listaMusic.map(msc => {
                            return (
                                <CardMusic>
                                    <h3> {msc.name}</h3>
                                    <p>{msc.artist}</p>
                                    <div className="buttons">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1069/1069272.png"
                                            onClick={() => this.props.playMusic(msc.url)} />
                                        <img src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
                                            onClick={() => this.props.delete(msc.id)} />
                                    </div>
                                </CardMusic>
                            )
                        })}
                    </div>
                    <audio controls src={this.props.urlMusic} autoPlay/>

                </main>
                <div className="addRemove">

                    <div className="add">
                        <h3>Adicionar Musica</h3>
                        <CampoAddMusic
                            onchangeNome={this.props.onchangeNome}
                            valueNome={this.props.valueNome}
                            onchangeArtista={this.props.onchangeArtista}
                            valueArtista={this.props.valueArtista}
                            onchangeLink={this.props.onchangeLink}
                            valueLink={this.props.valueLink}
                            iconAdd={this.props.iconAdd}
                        />
                    </div>

                    <div className="remove">
                        <h3>Apagar esta PlayList</h3>
                        <IoIosCloseCircle onClick={this.props.iconRemove} className="svgicon" />
                    </div>

                </div>

            </ContainerMusic>
        )
    }
}

export default MusicRenderizada