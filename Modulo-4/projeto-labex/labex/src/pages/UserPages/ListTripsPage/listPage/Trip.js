import styled from "styled-components";
import {useGetTrips} from "../../../../Hooks/useGetTrips"

const ContainerCard = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 20px;
    padding: 20px 0px;
    height: auto;
   

`

const ContainerTrip = styled.div`
    background-color: #aa77ff;
    width: 95%;
    padding: 10px;
    text-align: left;
    box-shadow: 3px 3px 7px #00000080;

    span{
        font-weight: bold;

    }

`

const Trip = () =>{
    
    const tripList = useGetTrips()

    console.log(tripList)
    return(
        <ContainerCard>
        {tripList.map(trip=>{
            return(
                <ContainerTrip>
                    <p> <span>Nome:</span> {trip.name}</p>
                    <p><span>Planeta:</span> {trip.planet}</p>
                    <p><span>Descrição:</span> {trip.description} </p>
                    <p><span>Data:</span> {trip.date} </p>
                    <p><span>Duração:</span> {trip.durationInDays} dias </p>
                </ContainerTrip>
            )
        })}
        </ContainerCard>
    )
}

export default Trip