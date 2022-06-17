import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import {useGetTrips} from "../../../../customHooks/useGetTrips"

const ContainerTrip = styled.div`
    border:1px solid black;
    background-color: #8855ff;
    width: 400px;
    margin-bottom: 20px ;

`

const Trip = () =>{
    
    const tripList = useGetTrips()

    console.log(tripList)
    return(
        <>
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
        </>
    )
}

export default Trip