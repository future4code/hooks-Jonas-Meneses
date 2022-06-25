import styled from 'styled-components'
import { useGetTrips } from '../../../Hooks/useGetTrips'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ContainerTripList = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .trip{
        border: 1px solid black;
        margin: 5px;
        width: 350px;
        height: 80px;
        padding: 10px;

        text-align: left;
    }

`

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
                alert("viagem apagada")
                console.log(resp)

            })
            .catch(err => {
                alert("Atualiza e tenta de novo")
                console.log(err)
            })

    }

    const TripDetails = (id) => {
        navigate(`/admin/trip/${id}`)
    }

    return (
        <ContainerTripList>
            {tripList.map(trip => {
                return (
                    <div className='trip'>
                        <p> <span>Nome:</span> {trip.name}</p>
                        <button onClick={() => deleteTrip(trip.id)}>apagar</button>
                        <button onClick={() => TripDetails(trip.id)}>Detalhes</button>
                    </div>
                )
            })}
        </ContainerTripList>
    )
}

export default TripList