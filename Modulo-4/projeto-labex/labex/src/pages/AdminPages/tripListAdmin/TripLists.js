import styled from 'styled-components'
import { useGetTrips } from '../../../Hooks/useGetTrips'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ContainerTripList = styled.div`

    .trip{
        border: 1px solid black;
        margin: 5px;
        width: 500px;
        height: 250px;
    }

`

const TripList = () =>{
    const navigate = useNavigate()

    const tripList = useGetTrips()

    const headers = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }

    const deleteTrip = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jonas-meneses-hooks/trips/${id}`

        axios.delete(url, headers)
        .then(reso=>{
            alert("mensagem apagada")
            console.log(reso)
            
        })
        .catch(err=>{
            alert("deu ruim")
            console.log(err)
        })

    }

    const TripDetails = (id) =>{
        navigate(`/admin/trip/${id}`)
    }

    return(
        <ContainerTripList>
            {tripList.map(trip =>{
                return(
                    <div className='trip'>
                    <p> <span>Nome:</span> {trip.name}</p>
                    <p><span>Planeta:</span> {trip.planet}</p>
                    <p><span>Descrição:</span> {trip.description} </p>
                    <p><span>Data:</span> {trip.date} </p>
                    <p><span>Duração:</span> {trip.durationInDays} dias </p>
                    <button onClick={()=>deleteTrip(trip.id)}>apagar</button>
                    <button onClick={()=>TripDetails(trip.id)}>Detalhes</button>
                    </div>
                )
            })}
        </ContainerTripList>
    )
}

export default TripList