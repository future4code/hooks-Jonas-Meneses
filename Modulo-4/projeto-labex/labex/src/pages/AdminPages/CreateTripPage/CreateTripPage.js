import { useProtected } from '../../../Hooks/useProtected'
import { goBack } from '../../../routers/Coordinator'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../../../Hooks/useInput'
import axios from 'axios'
import { ContainerCreate } from './ContainerCreate'

const CreatetripPage = () => {
    useProtected()

    const navigate = useNavigate()
    const { form, onChange, clear } = useInput({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: ''
    })

    const headers = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }

    const send = (event) => {
        event.preventDefault()

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/jonas-meneses-hooks/trips"
        axios.post(url, form, headers)
            .then(resp => {
                alert("Viagem Criada com sucesso")
                clear()
            })
            .catch(err => {
                alert("Opss! Algo de Arrado não está certo.")
            })
    }
    console.log(headers)
    return (
        <ContainerCreate ContainerCreate >
            <h1>Criar viagem </h1>
            <form onSubmit={send} >
                <input
                    placeholder='Nome da Viagem'
                    name='name'
                    onChange={onChange}
                    value={form.name}
                    required
                />

                <input
                    placeholder='Planeta'
                    name='planet'
                    onChange={onChange}
                    value={form.planet}
                    required
                />

                <input
                    placeholder='data'
                    name='date'
                    onChange={onChange}
                    value={form.date}
                    required
                />

                <input
                    placeholder='Descrição'
                    name='description'
                    onChange={onChange}
                    value={form.description}
                    required
                />

                <input
                    placeholder='Duração da viagem'
                    name='durationInDays'
                    onChange={onChange}
                    value={form.durationInDays}
                    required
                />

                <div className='conatinerButton'>
                    <button>Enviar</button>
                </div>
                    <button onClick={() => { goBack(navigate) }}>voltar</button>
            </form>

        </ContainerCreate>
    )
}

export default CreatetripPage