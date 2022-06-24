import axios from "axios"
import { useEffect, useState } from "react"
import { goBack } from "../../../routers/Coordinator"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const ConatainerDetails = styled.main`

`


const CardDetails = (props) => {
    const navigate = useNavigate()

    const [trip, setTrip] = useState('')

    const idTip = props.id

    const token = localStorage.getItem('token')
    const header = {
        headers: {
            auth: token
        }
    }
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jonas-meneses-hooks/trip/${idTip}`


    const getTripDetails = () => {
        axios.get(url, header)
            .then(resp => {
                console.log(resp.data.trip)
                setTrip(resp.data.trip)
            }).catch(err => {
                console.log(err)
            })
    }

        const candidates = trip.candidates
        const aprovados = trip.approved

    const decide = (id, decisao) => {
        const body = {
            "approve": decisao
        }

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jonas-meneses-hooks/trips/${idTip}/candidates/${id}/decide`

        axios.put(url, body, header)
            .then(resp => {
                console.log(resp)
                alert("deu bom")
                getTripDetails()
            })
            .catch(err => {
                alert("deu ruim")
                console.log(err.response)
            })
    }

    useEffect(()=>{

        getTripDetails()

    },[])
    return (
        <> {trip ?
            <ConatainerDetails>
                < button onClick={() => goBack(navigate)}>voltar</button>
                <h1> {trip.name}</h1>
                <p> <span>Nome:</span> {trip.name}</p>
                <p><span>Planeta:</span> {trip.planet}</p>
                <p><span>Descrição:</span> {trip.description} </p>
                <p><span>Data:</span> {trip.date} </p>
                <p><span>Duração:</span> {trip.durationInDays} dias </p>

                <h1> Canditos pendentes</h1>

                {candidates && candidates.map(candidates => {
                    return (
                        <div>
                            <p>nome: {candidates.name} </p>
                            <p> idade: {candidates.age} </p>
                            <p> país: {candidates.country} </p>
                            <p> profissão: {candidates.profession}</p>
                            <p> texto: {candidates.applicationText} </p>
                            <button onClick={() => decide(candidates.id, true)}>aprovar</button>
                            <button onClick={() => decide(candidates.id, false)} >reprovar</button>
                            <hr />
                        </div>
                    )
                })}

                <h1> Canditos aprovados</h1>
                {aprovados && aprovados.map(candidato => {
                    return (
                        <li>{candidato.name}</li>
                    )
                })}

            </ConatainerDetails> : "carregando ..."}
        </>
    )
}

export default CardDetails