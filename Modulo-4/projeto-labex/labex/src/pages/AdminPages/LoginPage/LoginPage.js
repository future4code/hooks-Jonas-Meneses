import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContainerLoginPage } from "./StyledLoginPage"
import {goBack} from '../../../Coordinator'
import axios from "axios"


const LoginPage = (props) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangeSenha = (event) => {
        setSenha(event.target.value)
    }

    
    const goLogin = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jonas-meneses-hooks/login`

        const body = {
            email: email,
            password: senha
        }

        axios.post(url,body).then(resp=>{
            console.log(resp.data)
            localStorage.setItem("token", resp.data.token)
            navigate("/adminHomePage")
        }).catch(err=>{
            console.log(err)
        })
    }


    return (
        <ContainerLoginPage >

            <main>
                LoginPage
                <input placeholder="email"
                    onChange={onChangeEmail}
                    value={email}
                />
                <input placeholder="Passeword"
                    type="password"
                    onChange={onChangeSenha}
                    value={senha}
                />
                <div className="buttons">
                    <button onClick={()=>goBack(navigate)}>voltar</button>
                    <button onClick={goLogin}>Entrar</button>
                </div>
            </main>

        </ContainerLoginPage>
    )
}

export default LoginPage