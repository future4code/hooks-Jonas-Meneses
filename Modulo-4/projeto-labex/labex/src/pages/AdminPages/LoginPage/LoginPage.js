import { useNavigate } from "react-router-dom"
import { ContainerLoginPage } from "./StyledLoginPage"
import { goBack } from '../../../routers/Coordinator'
import axios from "axios"
import { useInput } from "../../../Hooks/useInput"


const LoginPage = (props) => {

    const navigate = useNavigate()

    const {form, onChange, clear} = useInput({ name: '', password: '' })

    const goLogin = (event) => {
        event.preventDefault()

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jonas-meneses-hooks/login`

        axios.post(url, form).then(resp => {
            console.log(resp.data)
            localStorage.setItem("token", resp.data.token)
            navigate("/admin/trips")
            clear()
        }).catch(err => {
            console.log(err)
            alert("email ou senha incorreta")
        })
        console.log(form)
    }


    return (
        <ContainerLoginPage >

            <main>
                LoginPage
                <form onSubmit={goLogin}>
                    <input placeholder="email"
                        name="email"
                        onChange={onChange}
                        value={form.email}
                    />
                    <input placeholder="Password"
                        name="password"
                        type="password"
                        onChange={onChange}
                        value={form.password}
                    />
                    <div className="buttons">
                        <button onClick={() => goBack(navigate)}>voltar</button>
                        <button type="">Entrar</button>
                    </div>
                </form>
            </main>

        </ContainerLoginPage>
    )
}

export default LoginPage