import { useNavigate } from "react-router-dom"
import { ContainerApplication } from "./StyledApplication"
import { useGetTrips } from "../../../../customHooks/useGetTrips"
import { useGetCountries } from "../../../../customHooks/useGetCountries"
import { goBack } from '../../../../Coordinator'
import { useInput } from "../../../../customHooks/useInput"
import { useState } from "react"
import axios from "axios"


const Application = () => {

    const navigate = useNavigate()

    const getTrips = useGetTrips()

    const getcountries = useGetCountries()

    const paises = getcountries.map(paises => {
        return paises.nome_pais
    })

    const [nome, onChangeNome] = useInput('')
    const [idade, onChangeIdade] = useInput('')
    const [txtInscricao, onChangeTxtInscricao] = useInput('')
    const [proficao, onChangeProficao] = useInput('')
    const [viagem, onChangeViagem] = useInput('')
    const [pais, onChangePais] = useInput('')
    const [body, setBody] = useState({})

    const onClickApplication = () => {
        setBody({
            "name": nome,
            "age": idade,
            "applicationText": txtInscricao,
            "profession": proficao,
            "country": pais
        })
        console.log(viagem)
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jonas-meneses-hooks/trips/${viagem}/apply`, body)
        .then(resp=>{
            console.log(resp)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <ContainerApplication>
            Formulario de cadastro
            <section>
                <select onChange={onChangeViagem} value={viagem}>
                    <option key='0' >Escolha uma viagem</option>
                    {getTrips.map(opt => {
                        return (
                            <option key={opt.id} value={opt.id} >{opt.name}</option>
                        )
                    })}
                </select>


                <input type="text" placeholder="Nome"
                    value={nome} onChange={onChangeNome}
                />
                <input type="number" placeholder="Idade"
                    value={idade} onChange={onChangeIdade}
                />
                <input type="text" placeholder="Texto de inscrição"
                    value={txtInscricao} onChange={onChangeTxtInscricao}
                />
                <input type="text" placeholder="Profição"
                    value={proficao} onChange={onChangeProficao}
                />

                <select onChange={onChangePais} value={pais}>
                    <option key='0'>Escolha um País</option>
                    {paises.map(paises => {
                        return (
                            <option>{paises}</option>
                        )
                    })}
                </select>

                <button onClick={onClickApplication}>Aplicar-se</button>
                <button onClick={() => goBack(navigate)}>Votar</button>
            </section>


        </ContainerApplication>
    )
}

export default Application