import React from "react"
import styled from "styled-components";
import axios from "axios";

const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button{
        margin: 10px;
        padding: 5px;
    }

    input{
        margin: 5px;
    }
`

class CardCadastro extends React.Component {

    state = {
        inputNome: "",
        inputEmail: "",
    }

    addUsers = () =>{
        const body = {
            name:this.state.inputNome,
            email: this.state.inputEmail
        }

        const headers= {
            headers:{
            Authorization: "jonas-meneses-hooks"}
        }

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.post(url, body, headers).then((res)=>{
            alert("Cadastro efetuado")
            this.setState({inputNome: "", inputEmail: ""})
        }).catch((err)=>{
            console.log(err)
            alert("Cadastro não efetuado")

        })
    }

//================ onChanges =====================

    onChageNome = (event) => {
        this.setState({ inputNome: event.target.value })
    }

    onChageEmail = (event) => {
        this.setState({ inputEmail: event.target.value })
    }
    render() {
        return (
            <Card>
                <h2>Cadastro</h2>
                <input placeholder="Nome"
                    value={this.state.inputNome}
                    onChange={this.onChageNome}
                ></input>
                <input placeholder="Email"
                    value={this.state.inputEmail}
                    onChange={this.onChageEmail}
                ></input>
                <button onClick={this.addUsers}>Criar Usuario</button>
            </Card>
        )
    }
}

export default CardCadastro