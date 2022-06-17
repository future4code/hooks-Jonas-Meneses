import { useNavigate } from "react-router-dom"
import {ContainerApplication} from "./StyledApplication"
import {useGetTrips} from "../../../../customHooks/useGetTrips"
import axios from "axios"
import { useEffect, useState } from "react"
import {useGetCountries} from "../../../../customHooks/useGetCountries"



const Application = () =>{

    const navigate = useNavigate()
    const goBack = () =>{
        navigate(-1)
    }
    const getTrips = useGetTrips()
        
    const getcountries = useGetCountries()

    const paises = getcountries.map(paises =>{
        return paises.nome_pais
    })

    console.log(paises)
    return(
        <ContainerApplication>
        Formulario de cadastro
        <section>
            <select>
                <option key='0' >Escolha uma viagem</option>
                {getTrips.map(opt=>{
                    return(
                        <option key={opt.id} >{opt.name}</option>
                    )
                })}
            </select>

                {/* <option>Escolha uma viagem</option> */}
            <input type="text" placeholder="Nome" />
            <input type="number" placeholder="Idade" />
            <input type="text" placeholder="Texto de inscrição" />
            <input type="text" placeholder="Profição" />

            <select>
                <option key='0'>Escolha um País</option>
                {paises.map(paises=>{
                    return(
                        <option>{paises}</option>
                    )
                })}
            </select>
            
        </section>

        <button onClick={goBack}>Votar</button>

        </ContainerApplication>
    )
}

export default Application