import { goBack } from '../../../routers/Coordinator'
import { useNavigate } from 'react-router-dom'
import { useProtected } from '../../../Hooks/useProtected'
import { useEffect } from 'react'
import { ContainerTripListAdmin } from './StyledTripListAdmin'
import TripList from './TripLists'

const TripListAdmin = () => {
    useProtected()

    const navigate = useNavigate()

    const goCreate = () => {
        navigate('/createtripPage')
    }

    const logout = () =>{
        localStorage.removeItem('token')
        navigate("/")
    }
    useEffect(() => { }, [])
    return (
        <ContainerTripListAdmin >
            Olá deu certo
            <button onClick={() => { goBack(navigate) }}>voltar</button>
            <button onClick={goCreate}>criar viagem</button>
            <button onClick={logout}>sair</button>
            <section className='renderedList'>
                <TripList />
            </section>
        </ContainerTripListAdmin>)
}

export default TripListAdmin