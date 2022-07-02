import {ContainerTripList} from './StyledTripList'
import { useGetTrips } from '../../../Hooks/useGetTrips'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {FaTrash} from 'react-icons/fa'



const TripList = () => {
    const navigate = useNavigate()

    const tripList = useGetTrips()

    const headers = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }

    const deleteTrip = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jonas-meneses-hooks/trips/${id}`

        axios.delete(url, headers)
            .then(resp => {
                alert("Viagem apagada")
                navigate('/admin/trips')

            })
            .catch(err => {
                alert("Algo deu errado")
                console.log(err)
            })

    }

    const tripDetails = (id) => {
        navigate(`/admin/trip/${id}`)
    }

    return (
        <ContainerTripList >
            {tripList.map(trip => {
                return (

                    <div className='trip'>
                        <div className='title' onClick={()=>tripDetails(trip.id)}>
                        <p> <span>Nome:</span> {trip.name}</p>
                        </div>

                        <div className='button' onClick={()=>deleteTrip(trip.id)}>
                        <FaTrash />
                        </div>

                    </div>
                )
            })}
        </ContainerTripList>
    )
}

export default TripList