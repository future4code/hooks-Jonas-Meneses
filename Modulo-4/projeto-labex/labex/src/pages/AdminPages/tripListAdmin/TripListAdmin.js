import { goBack } from '../../../Coordinator'
import { useNavigate } from 'react-router-dom'
import { useProtected } from '../../../customHooks/useProtected'


const TripListAdmin = () => {
    useProtected()
    const navigate = useNavigate()
    const goCreate = () =>{
        navigate('/admin/createTrip')
    }
    return (<>
        Olá deu certo
        <button onClick={() => { goBack(navigate) }}>voltar</button>
        <button onClick={goCreate}>criar viagem</button>
        <button>sair</button>
    </>)
}

export default TripListAdmin