import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            LoginPage
            <button onClick={goBack}>voltar</button>

        </>
    )
}

export default LoginPage