import styled from "styled-components"


export const ContainerMensagens = styled.div`
  height: 90%;
  width: 500px;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 10px;
  background-image: url(https://i.pinimg.com/736x/7c/29/29/7c2929ff41f2406df117969a5bf46bf7.jpg);
  background-size: contain;
  overflow-y: scroll;
`

export const TitleUser = styled.p`
  padding: 0px;

  margin: 0px;
  margin-left: 10px;
  font-weight: bold;

`
export const Mensagem = styled.p`
  margin: 0px 10px;
  padding: 0px;
  word-wrap: break-word;
  max-width: 80%;
`
export const ContainerInputs = styled.div`
  height: 10%;
  width: 500px;
  background-color: #242;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;

`
export const InputUser = styled.input`
  margin: 0px 10px;
  background-color: #eee;
  width: 150px;
  border: none;
  padding: 5px;
  border-radius: 5px;
`
export const InputMensagem = styled.input`
  background-color: #eee;
  border: none;
  padding: 5px;
  border-radius: 5px;
  word-wrap: break-word;
`
export const ButaoEnviar = styled.button`

`