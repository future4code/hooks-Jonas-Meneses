import { useProtected } from '../../../Hooks/useProtected'
import { goBack } from '../../../routers/Coordinator'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../../../Hooks/useInput'
import axios from 'axios'

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
        .then(resp=>{
            console.log(resp.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    console.log(headers)
    return (
        <>
            <h1> CreatetripPage </h1>
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
                <button>Enviar</button>
            </form>
            <button onClick={() => { goBack(navigate) }}>voltar</button>

        </>
    )
}

export default CreatetripPage