import React from "react"
import styled from "styled-components";
import axios from "axios";

const Container = styled.section`

`
const headers= {
    headers:{
    Authorization: "jonas-meneses-hooks"}
}

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

class CardUsuarios extends React.Component{
    state ={
        listUsers:[]
    }

    pegaLista = () =>{
        

        axios.get(url, headers).then((res)=>{
            this.setState({listUsers: res.data})
            console.log(res)
        }).catch((err)=>{
            alert(err.response.message)
        })
    }

    componentDidMount = ()=>{
        this.pegaLista()
    }

    deleteUser = (id) =>{
        axios.delete(url+"/"+id, headers).then((res)=>{
            alert("user delete")
            this.pegaLista()
        }).catch((err)=>{
            alert('errrrrouuuu')
        })
    }
//===========================================
    render(){

        return(
            <Container>
                <h2>Usuarios</h2>
                <ul>
                    {this.state.listUsers.map(user =>{
                        return (
                        <li>
                            {user.name}, {user.email}
                            <button onClick={()=>this.deleteUser(user.id)} >x</button>
                        </li>)
                    })}
                </ul>

            </Container>
        )
    }
}

export default CardUsuarios