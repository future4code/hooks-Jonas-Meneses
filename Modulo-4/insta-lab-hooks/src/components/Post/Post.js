import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [listaDeComentarios, setListaDeComentarios] = useState([])
  const [toggleSectionsComments, setToggleSectionsComments] = useState(false)

  const onClickCurtida = () => {
    setCurtido(!curtido)
    setNumeroCurtidas(curtido ? numeroCurtidas - 1 : numeroCurtidas + 1)
  };

  const iconeCurtir = curtido ? iconeCoracaoPreto : iconeCoracaoBranco

  const onClickComentario = () => {
    setToggleSectionsComments(!toggleSectionsComments)
  };

  const enviarComentario = (comentario) => {

    // fiz a condicional para saber se o comentario tinha alguma coisa,
    // pois estava enviando comentatios em branco, o contador eu peguei
    // a lista e usei o length

    let newlistComments = []
    if (comentario) {
      newlistComments = [...listaDeComentarios, comentario]
      setListaDeComentarios(newlistComments)
      setToggleSectionsComments(!toggleSectionsComments)
    }

  }

  const renderedComments = listaDeComentarios.map((comment, i) => {
    return <p key={i}>{comment}</p>
  })

  const caixaDeComentario = toggleSectionsComments ? renderedComments :
    <SecaoComentario enviarComentario={enviarComentario} />

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>

        <IconeComContador
          icone={iconeCurtir}

          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={listaDeComentarios.length}
        />
      </PostFooter>
      {caixaDeComentario}

    </PostContainer>
  )
}

export default Post